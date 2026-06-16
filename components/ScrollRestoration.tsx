"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Save scroll position
  const saveScrollPosition = () => {
    if (typeof window === "undefined") return;
    
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      try {
        sessionStorage.setItem(`scroll_${pathname}`, String(currentScroll));
      } catch (error) {
        // Ignore storage errors
      }
    }
  };

  // Restore scroll position
  const restoreScrollPosition = (targetScroll: number) => {
    if (typeof window === "undefined") return;
    
    // Attempt immediate restoration
    window.scrollTo({ top: targetScroll, behavior: "instant" });
    
    // Attempt again after a short delay for content to load
    const timers = [
      setTimeout(() => window.scrollTo({ top: targetScroll, behavior: "instant" }), 50),
      setTimeout(() => window.scrollTo({ top: targetScroll, behavior: "instant" }), 150),
      setTimeout(() => window.scrollTo({ top: targetScroll, behavior: "instant" }), 300),
      setTimeout(() => window.scrollTo({ top: targetScroll, behavior: "instant" }), 500),
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  };

  // Handle initial load and navigation
  useEffect(() => {
    // Skip if this is the initial load
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      
      // Check for saved scroll on initial load (refresh)
      const saved = sessionStorage.getItem(`scroll_${pathname}`);
      if (saved) {
        const scrollY = parseInt(saved, 10);
        if (scrollY > 50) {
          const cleanup = restoreScrollPosition(scrollY);
          return cleanup;
        }
      }
      return;
    }

    // Handle navigation - restore saved position
    const saved = sessionStorage.getItem(`scroll_${pathname}`);
    if (saved) {
      const scrollY = parseInt(saved, 10);
      if (scrollY > 50) {
        const cleanup = restoreScrollPosition(scrollY);
        return cleanup;
      }
    }
  }, [pathname]);

  // Set up event listeners
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Save on page unload (refresh)
    const handleBeforeUnload = () => {
      saveScrollPosition();
    };

    // Save on visibility change (tab switch/refresh)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        saveScrollPosition();
      }
    };

    // Save on scroll (debounced)
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        saveScrollPosition();
      }, 300);
    };

    // Save on click navigation
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) {
        return;
      }

      saveScrollPosition();
    };

    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", saveScrollPosition);
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = null;
      }
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
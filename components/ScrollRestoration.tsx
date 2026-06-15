"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);
  const isInitialLoad = useRef(true);

  // Save scroll position only when navigating (not on refresh)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#")) return;

      // Don't save on initial load or refresh
      if (isInitialLoad.current) return;

      // Save current scroll before navigating away
      sessionStorage.setItem(`scroll_${pathname}`, String(window.scrollY));
    };

    // Mark initial load as complete after first render
    const timer = setTimeout(() => {
      isInitialLoad.current = false;
    }, 500);

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      clearTimeout(timer);
    };
  }, [pathname]);

  // Restore scroll when pathname changes
  useEffect(() => {
    // Don't restore on initial page load (to prevent jumping on refresh)
    if (isInitialLoad.current) return;

    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    const saved = sessionStorage.getItem(`scroll_${pathname}`);
    
    if (saved && saved !== "0") {
      const timer = setTimeout(() => {
        window.scrollTo({ top: parseInt(saved), behavior: "instant" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
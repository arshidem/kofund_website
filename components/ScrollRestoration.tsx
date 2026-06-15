"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  // Save scroll position on any link click (before navigation happens)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#")) return;

      // Save current scroll before navigating away
      sessionStorage.setItem(`scroll_${pathname}`, String(window.scrollY));
      console.log("SAVED on click:", `scroll_${pathname}`, "=", window.scrollY);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // Restore scroll when pathname changes
  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    const saved = sessionStorage.getItem(`scroll_${pathname}`);
    console.log("RESTORE:", `scroll_${pathname}`, "=", saved);

    if (saved && saved !== "0") {
      const timer = setTimeout(() => {
        window.scrollTo({ top: parseInt(saved), behavior: "instant" });
        console.log("scrollY after restore:", window.scrollY);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
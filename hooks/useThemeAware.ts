"use client";

import { useEffect, useState } from "react";

export function useThemeAware() {
  const [isDark, setIsDark] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Immediately check localStorage and body class
    const checkTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      const hasDarkClass = document.body.classList.contains("dark");
      
      // Use stored theme as source of truth
      if (storedTheme === "dark") {
        setIsDark(true);
      } else if (storedTheme === "light") {
        setIsDark(false);
      } else {
        // Fallback to body class
        setIsDark(hasDarkClass);
      }
      
      setIsReady(true);
    };
    
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const storedTheme = localStorage.getItem("theme");
      setIsDark(storedTheme === "dark");
    });
    
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return { isDark, isReady };
}
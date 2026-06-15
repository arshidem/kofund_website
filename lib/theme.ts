"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { lightColors, darkColors, ThemeColors } from "./colors";

interface ThemeContextType {
  isDark: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isLightMode = document.body.classList.contains("light");
    setIsDark(!isLightMode);
    
    const observer = new MutationObserver(() => {
      const isLight = document.body.classList.contains("light");
      setIsDark(!isLight);
    });
    
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    setIsDark(!isDark);
  };

  const colors = isDark ? darkColors : lightColors;

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
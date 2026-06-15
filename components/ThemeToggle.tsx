"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sync with localStorage
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDark(true);
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      setDark(false);
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-[9999] w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
      style={{
        background: dark ? "#13181E" : "#ffffff",
        border: `1px solid ${dark ? "#1E2530" : "#e2e8f0"}`,
        color: dark ? "#00E3C3" : "#0f172a",
        boxShadow: dark
          ? "0 4px 24px rgba(0,227,195,0.15)"
          : "0 4px 24px rgba(0,0,0,0.1)",
      }}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
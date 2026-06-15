"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why KoFund", href: "#comparison" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setVisible(true);
      } 
      // Hide navbar when scrolling down and not at top
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
        // Also close mobile menu when navbar hides
        setMenuOpen(false);
      }
      
      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new MutationObserver(() => {
      setDark(!document.body.classList.contains("light"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [lastScrollY]);

  const Logo = () => (
    <div className="flex items-center gap-2.5">
      <div 
        className="rounded-xl p-1.5 flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-105"
        style={{ 
          backgroundColor: mounted ? (dark ? "#00E3C3" : "#00BFA6") : "#00E3C3"
        }}
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96 90.59"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <polygon 
            points="89.84 0 23.76 66.63 0 90.59 0 15.9 23.76 15.9 23.76 47.01 89.84 0" 
            style={{ fill: "#052224" }}
          />
          <polygon 
            points="84.66 90.59 52.18 90.59 31.7 69.71 48.04 53.24 84.66 90.59" 
            style={{ fill: "#fff" }}
          />
          <polygon 
            points="96 4.88 67.69 60.18 54.5 46.73 96 4.88" 
            style={{ fill: "#fff" }}
          />
        </svg>
      </div>
      <div>
        <span 
          className="font-bold text-xl tracking-tight"
          style={{ color: mounted ? (dark ? "#fff" : "#0f172a") : "#fff" }}
        >
          KoFund
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Spacer to prevent content jump when navbar hides */}
      <div className="h-16" />
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out backdrop-blur-md ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          background: scrolled
            ? dark ? "rgba(11,14,17,0.95)" : "rgba(248,250,252,0.95)"
            : "transparent",
          borderBottom: scrolled
            ? `1px solid ${dark ? "#1E2530" : "#e2e8f0"}`
            : "1px solid transparent",
          boxShadow: scrolled && visible ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:text-[#00E3C3]"
                style={{ color: dark ? "#6B7280" : "#475569" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://kofund-153ba.web.app"
              target="_blank"
              className="text-sm transition-colors hover:text-[#00E3C3]"
              style={{ color: dark ? "#6B7280" : "#475569" }}
            >
              Web App
            </Link>
            <Link
              href="https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing"
              target="_blank"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#00E3C3] text-[#0B0E11] hover:bg-[#00BFA6] transition-colors whitespace-nowrap"
            >
              Download App
            </Link>
          </div>

          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: dark ? "#fff" : "#0f172a" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-4 pt-2 pb-6 flex flex-col gap-4 border-t"
            style={{
              background: dark ? "#13181E" : "#f1f5f9",
              borderColor: dark ? "#1E2530" : "#e2e8f0",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm transition-colors hover:text-[#00E3C3]"
                style={{ color: dark ? "#6B7280" : "#475569" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://kofund-153ba.web.app"
              target="_blank"
              className="text-sm"
              style={{ color: dark ? "#6B7280" : "#475569" }}
            >
              Web App
            </Link>
            <Link
              href="https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing"
              target="_blank"
              className="text-sm font-semibold px-4 py-3 rounded-lg bg-[#00E3C3] text-[#0B0E11] text-center"
            >
              Download App
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
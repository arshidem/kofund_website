"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why KoFund", href: "#comparison" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
        setMenuOpen(false);
      }

      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.body.classList.contains("dark"));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const Logo = () => (
    <div className="flex items-center gap-2.5">
      <div
        className="rounded-xl p-1.5 flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-105"
        style={{
          backgroundColor: "var(--color-primary)",
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
          style={{
            color: isDark
              ? "var(--color-dark-text-primary)"
              : "var(--color-light-text-primary)",
          }}
        >
          KoFund
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Spacer to offset fixed header */}
      <div className="h-16" />

      {/* ── Fixed Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out backdrop-blur-md ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          background: scrolled
            ? isDark
              ? "rgba(11,14,17,0.95)"
              : "rgba(248,250,252,0.95)"
            : "transparent",
          borderBottom: scrolled
            ? `1px solid ${isDark ? "#1E2530" : "#e2e8f0"}`
            : "1px solid transparent",
          boxShadow:
            scrolled && visible ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:text-primary"
                style={{ color: isDark ? "#6B7280" : "#475569" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://kofund-153ba.web.app"
              target="_blank"
              className="text-sm transition-colors hover:text-primary"
              style={{ color: isDark ? "#6B7280" : "#475569" }}
            >
              Web App
            </Link>
            <Link
              href="https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing"
              target="_blank"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-primary text-[#0B0E11] hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden relative w-8 h-8 items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 rounded-full transition-all duration-300 ${
                  menuOpen
                    ? "rotate-45 opacity-100"
                    : "translate-y-[-6px] opacity-100"
                }`}
                style={{ background: isDark ? "#fff" : "#0f172a" }}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-[6px]"
                }`}
                style={{ background: isDark ? "#fff" : "#0f172a" }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          top: "64px",
          background: isDark
            ? "rgba(11,14,17,0.98)"
            : "rgba(248,250,252,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Navigation Links — horizontally centered */}
          <div className="flex-1 py-4 px-6">
            <div className="flex flex-col items-center">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-4 text-lg font-medium transition-all duration-300 hover:text-primary ${
                    menuOpen ? "animate-fade-in-up" : ""
                  }`}
                  style={{
                    color: isDark ? "#E0F2EF" : "#1A2E2A",
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="https://kofund-153ba.web.app"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 text-base font-medium rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: isDark ? "#262D35" : "#E9ECEF",
                  color: isDark ? "#E0F2EF" : "#1A2E2A",
                }}
              >
                Web App
              </Link>
              <Link
                href="https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 text-base font-semibold rounded-xl bg-primary text-[#0B0E11] transition-all duration-300 hover:scale-105"
              >
                Download App
              </Link>
            </div>
          </div>

          {/* Footer Text */}
          <div
            className="py-6 text-center text-xs shrink-0"
            style={{ color: isDark ? "#6B8A87" : "#8A9A9A" }}
          >
            <p>Simplify Community Finances</p>
            <p className="mt-1">© 2024 KoFund</p>
          </div>
        </div>
      </div>
    </>
  );
}
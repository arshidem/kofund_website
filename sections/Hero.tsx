"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new MutationObserver(() => {
      setDark(!document.body.classList.contains("light"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));
    return () => observer.disconnect();
  }, []);

if (!mounted) {
    return null; // Skeleton handles loading
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-8 sm:py-12">
      {/* Background blur effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-[480px] h-48 sm:h-64 md:h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: `rgba(0, 227, 195, 0.05)` }}
      />

      <div className="max-w-7xl mx-auto text-center z-10 w-full px-3 sm:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border text-primary text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
              style={{ 
                background: dark ? "var(--color-dark-surface)" : "var(--color-light-progress-bg)",
                borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
              }}
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="hidden xs:inline">Simplify Community Finances</span>
              <span className="xs:hidden">Community Finances</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-3 sm:mb-5"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Manage Community Funds{" "}
              <span className="text-primary whitespace-nowrap">Without WhatsApp Confusion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm xs:text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
              style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
            >
              KoFund helps communities, committees, clubs, events, and organizations
              manage contributions, expenses, members, and balances in one place.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-md mx-auto lg:mx-0"
            >
              <Link
                href="https://kofund-153ba.web.app" 
                target="_blank"
                className="flex items-center justify-center gap-2 bg-primary text-[#0B0E11] font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-primary-dark transition-colors text-xs sm:text-sm w-full xs:w-auto"
              >
                Open Web App <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px]" />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing" 
                target="_blank"
                className="flex items-center justify-center gap-2 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border transition-colors text-xs sm:text-sm w-full xs:w-auto"
                style={{ 
                  background: dark ? "var(--color-dark-surface)" : "var(--color-light-surface)",
                  borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)",
                  color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)"
                }}
              >
                <Download size={14} className="sm:w-[15px] sm:h-[15px]" /> Download App
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t"
              style={{ borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" }}
            >
              {[
                { value: "100%", label: "Transparent" },
                { value: "30 days", label: "Free Trial" },
                { value: "1 tap", label: "Push Reminders" },
                { value: "PDF", label: "Export Ready" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left py-1 sm:py-2">
                  <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-[11px] xs:text-xs mt-0.5 sm:mt-1" 
                    style={{ color: dark ? "var(--color-dark-text-tertiary)" : "var(--color-light-text-tertiary)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - QR Code (Desktop only) */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="mb-4">
                  <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-lg"
                    style={{ backgroundColor: "white" }}>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(
                        "https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing"
                      )}`}
                      alt="Download KoFund App"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 
                    className="font-semibold text-lg mb-1"
                    style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
                  >
                    Scan QR Code
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
                  >
                    Download Android App instantly
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [dark, setDark] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const observer = new MutationObserver(() => {
      setDark(!document.body.classList.contains("light"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));
    return () => observer.disconnect();
  }, []);

  if (!loaded) return null;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-8 sm:py-12">
      {/* Background - no blur on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 md:w-[480px] h-64 sm:h-96 md:h-[480px] rounded-full"
        style={{ 
          background: `radial-gradient(circle, rgba(0,227,195,0.08) 0%, rgba(0,227,195,0) 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto text-center z-10 w-full px-3 sm:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border text-primary text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 animate-fade-in"
              style={{ 
                background: dark ? "var(--color-dark-surface)" : "var(--color-light-progress-bg)",
                borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
              }}
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="hidden xs:inline">Simplify Community Finances</span>
              <span className="xs:hidden">Community Finances</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-3 sm:mb-5 animate-fade-in-up"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Manage Community Funds{" "}
              <span className="text-primary whitespace-nowrap">Without WhatsApp Confusion</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm xs:text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up animation-delay-100"
              style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
            >
              KoFund helps communities, committees, clubs, events, and organizations
              manage contributions, expenses, members, and balances in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-md mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              <Link
                href="https://kofund-153ba.web.app" 
                target="_blank"
                className="flex items-center justify-center gap-2 bg-primary text-[#0B0E11] font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-primary-dark transition-all active:scale-95 text-xs sm:text-sm w-full xs:w-auto"
              >
                Open Web App <ArrowRight size={14} />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing" 
                target="_blank"
                className="flex items-center justify-center gap-2 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border transition-all active:scale-95 text-xs sm:text-sm w-full xs:w-auto"
                style={{ 
                  background: dark ? "var(--color-dark-surface)" : "var(--color-light-surface)",
                  borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)",
                  color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)"
                }}
              >
                <Download size={14} /> Download App
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t animate-fade-in-up animation-delay-300"
              style={{ borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" }}
            >
              {[
                { value: "100%", label: "Transparent" },
                { value: "30 days", label: "Free Trial" },
                { value: "1 tap", label: "Push Reminders" },
                { value: "PDF", label: "Export Ready" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-[11px] xs:text-xs mt-0.5" 
                    style={{ color: dark ? "var(--color-dark-text-tertiary)" : "var(--color-light-text-tertiary)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* QR Code */}
          <div className="hidden lg:flex flex-col items-center justify-center animate-fade-in animation-delay-200">
            <div className="text-center">
              <div className="w-56 h-56 mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=224x224&data=${encodeURIComponent(
                    "https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing"
                  )}`}
                  alt="Download KoFund App"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-lg mt-4" style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}>
                Scan QR Code
              </h3>
              <p className="text-sm" style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}>
                Download Android App instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
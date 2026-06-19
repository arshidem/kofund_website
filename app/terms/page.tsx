"use client";

import Link from "next/link";
import { ChevronLeft, Calendar, FileText } from "lucide-react";
import { useEffect, useState } from "react";

// Skeleton Loader Component
function TermsOfServiceSkeleton() {
  const [dark, setDark] = useState(true);
  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(!document.body.classList.contains("light"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pb-16 px-4 sm:px-6">
      {/* App Bar Skeleton */}
      <div 
        className="sticky top-0 z-50 border-b"
        style={{
          background: dark ? "rgba(11, 14, 17, 0.95)" : "rgba(248, 250, 252, 0.95)",
          borderColor: dark ? "#1E2530" : "#e2e8f0",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="w-16 h-4 bg-primary/20 rounded animate-pulse" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary/20 animate-pulse" />
            <div className="w-16 h-5 bg-primary/10 rounded animate-pulse" />
          </div>
          <div className="w-16" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-4xl mx-auto pt-6">
        <div className="rounded-2xl border overflow-hidden animate-pulse"
          style={{ 
            background: dark ? "#13181E" : "#ffffff", 
            borderColor: dark ? "#1E2530" : "#e2e8f0" 
          }}
        >
          <div className="p-6 sm:p-8 border-b" style={{ borderColor: dark ? "#1E2530" : "#e2e8f0" }}>
            <div className="w-32 h-4 bg-primary/20 rounded mb-2" />
            <div className="w-56 h-8 bg-primary/20 rounded" />
          </div>
          <div className="p-6 sm:p-8 space-y-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i}>
                <div className="w-64 h-6 bg-primary/20 rounded mb-3" />
                <div className="space-y-2">
                  <div className="w-full h-4 bg-primary/10 rounded" />
                  <div className="w-3/4 h-4 bg-primary/10 rounded" />
                  <div className="w-5/6 h-4 bg-primary/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TermsOfServicePage() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new MutationObserver(() => {
      setDark(!document.body.classList.contains("light"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));
    
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Show skeleton while loading
  if (!mounted) {
    return <TermsOfServiceSkeleton />;
  }

  const sections = [
    {
      title: "Agreement to Terms",
      content: "By accessing and using KoFund, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the application."
    },
    {
      title: "User Responsibilities",
      content: "Users are responsible for maintaining the confidentiality of their credentials and active sessions. Any financial data, member lists, and community ledgers uploaded must be accurate, true, and comply with local financial regulations."
    },
    {
      title: "Acceptable Use",
      content: "You agree not to use KoFund for any illegal activities, money laundering, fraud, or misrepresenting community assets. Violation of this clause will lead to instant account termination."
    },
    {
      title: "Account Ownership",
      content: "You own the data and content you upload to KoFund. However, you grant us a license to host, display, and process this data as necessary to provide service functionality. We claim no ownership over community funds."
    },
    {
      title: "Service Availability & Modification",
      content: "While we strive for 99.9% uptime, KoFund is provided 'as is' and 'as available'. We reserve the right to temporarily modify, suspend, or discontinue the service with or without notice for system maintenance."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall KoFund or its creators be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, the platform or any errors in financial tracking."
    }
  ];

  const Logo = () => (
    <div className="flex items-center gap-2">
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
      <span 
        className="font-bold text-xl tracking-tight"
        style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
      >
        KoFund
      </span>
    </div>
  );

  return (
    <div className="min-h-screen pb-16 px-4 sm:px-6">
      {/* Sticky App Bar with scroll effect */}
      <div 
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
          scrolled ? "shadow-md" : ""
        }`}
        style={{
          background: dark 
            ? (scrolled ? "rgba(11, 14, 17, 0.98)" : "rgba(11, 14, 17, 0.8)")
            : (scrolled ? "rgba(248, 250, 252, 0.98)" : "rgba(248, 250, 252, 0.8)"),
          borderColor: dark ? "#1E2530" : "#e2e8f0",
        }}
      >
        <div className="max-w-4xl mx-auto h-16 flex items-center justify-between relative">
          {/* Back Button - Left */}
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-1.5 text-sm transition-colors hover:text-primary group h-full"
            style={{ color: dark ? "#6B7280" : "#64748b" }}
          >
            <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-0.5" /> 
            <span className="leading-none">Back</span>
          </Link>

          {/* Centered Logo */}
         {/* Centered Logo / Title swap on scroll */}
<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="relative h-8 flex items-center justify-center">
    {/* Logo - visible at top, fades + slides up on scroll */}
    <div
      className="absolute transition-all duration-300 ease-out"
      style={{
        opacity: scrolled ? 0 : 1,
        transform: scrolled ? "translateY(-16px)" : "translateY(0)",
        pointerEvents: scrolled ? "none" : "auto",
      }}
    >
      <Logo />
    </div>

    {/* Page title - fades + slides up into place on scroll */}
    <div
      className="absolute transition-all duration-300 ease-out whitespace-nowrap"
      style={{
        opacity: scrolled ? 1 : 0,
        transform: scrolled ? "translateY(0)" : "translateY(16px)",
        pointerEvents: scrolled ? "auto" : "none",
      }}
    >
      <span
        className="font-semibold text-base"
        style={{ color: dark ? "#ffffff" : "#0f172a" }}
      >
        Terms of Service
      </span>
    </div>
  </div>
</div>

          {/* Empty div for balance */}
          <div className="w-16 opacity-0 pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto pt-6">
        <div className="rounded-2xl border overflow-hidden animate-fade-in-up"
          style={{
            animationFillMode: "forwards",
            background: dark ? "#13181E" : "#ffffff",
            borderColor: dark ? "#1E2530" : "#e2e8f0"
          }}
        >
          {/* Header */}
            <div className="p-6 sm:p-8 border-b" style={{ borderColor: dark ? "#1E2530" : "#e2e8f0" }}>
             
              <div className="flex items-center gap-2 text-sm mb-2" style={{ color: dark ? "#6B7280" : "#64748b" }}>
                <Calendar size={14} />
                Last Updated: June 2026
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                Terms of Service
              </h1>
            </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {sections.map((section, index) => (
                <section className="transition-all duration-300 hover:translate-x-1">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                    {section.title}
                  </h2>
                  <p className="leading-relaxed" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                    {section.content}
                  </p>
                </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
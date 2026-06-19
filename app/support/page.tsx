"use client";

import Link from "next/link";
import { ChevronLeft, Mail, Clock, HelpCircle, Wifi, RefreshCw, Headphones, Globe } from "lucide-react";
import { useEffect, useState } from "react";

// Skeleton Loader Component
function SupportSkeleton() {
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
            <div className="w-48 h-8 bg-primary/20 rounded mb-2" />
            <div className="w-64 h-4 bg-primary/10 rounded" />
          </div>
          <div className="p-6 sm:p-8 space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded bg-primary/20" />
                  <div className="w-40 h-6 bg-primary/20 rounded" />
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-primary/10 bg-primary/5">
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded bg-primary/20" />
                      <div className="flex-1">
                        <div className="w-32 h-4 bg-primary/20 rounded mb-2" />
                        <div className="w-full h-4 bg-primary/10 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SupportPage() {
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
    return <SupportSkeleton />;
  }

  const troubleshootingSteps = [
    {
      icon: <Wifi className="w-4 h-4" />,
      title: "Network Connection",
      description: "Ensure you are connected to active Wi-Fi or cellular networks. KoFund will fall back to local cached data if you are offline, but requires a connection to push edits."
    },
    {
      icon: <RefreshCw className="w-4 h-4" />,
      title: "Session Refresh",
      description: "If balances are not updating, try logging out and logging back in to re-authenticate your Firebase session."
    },
    {
      icon: <Globe className="w-4 h-4" />,
      title: "Browser Compatibility",
      description: "We recommend using the latest versions of Google Chrome, Safari, or Mozilla Firefox."
    }
  ];

  const supportHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Response Time", hours: "Within 24 hours" },
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
        Help & Support
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
             
              <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                Help & Support
              </h1>
              <p className="text-sm" style={{ color: dark ? "#6B7280" : "#64748b" }}>
                We are here to help you manage your community funds smoothly.
              </p>
            </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                  <Mail size={20} className="text-primary" />
                  Contact Information
                </h2>
                <div className="space-y-3">
                  <div 
                    className="p-4 rounded-xl border flex items-center justify-between flex-wrap gap-3 transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      background: dark ? "var(--color-dark-card)" : "var(--color-light-card)", 
                      borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                    }}
                  >
                    <span className="text-sm" style={{ color: dark ? "#9CA3AF" : "#475569" }}>Support Email:</span>
                    <a href="mailto:kofundapp@gmail.com" className="text-primary hover:underline font-medium transition-all duration-200">
                      kofundapp@gmail.com
                    </a>
                  </div>
                  <div 
                    className="p-4 rounded-xl border flex items-center justify-between flex-wrap gap-3 transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      background: dark ? "var(--color-dark-card)" : "var(--color-light-card)", 
                      borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                    }}
                  >
                    <span className="text-sm" style={{ color: dark ? "#9CA3AF" : "#475569" }}>WhatsApp Support:</span>
                    <a href="https://wa.me/918157875032" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium transition-all duration-200">
                      +91 815 787 5032
                    </a>
                  </div>
                  <div 
                    className="p-4 rounded-xl border flex items-center justify-between flex-wrap gap-3 transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      background: dark ? "var(--color-dark-card)" : "var(--color-light-card)", 
                      borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                    }}
                  >
                    <span className="text-sm" style={{ color: dark ? "#9CA3AF" : "#475569" }}>Phone Support:</span>
                    <a href="tel:+918157875032" className="text-primary hover:underline font-medium transition-all duration-200">
                      +91 815 787 5032
                    </a>
                  </div>
                </div>
              </div>

            {/* Troubleshooting Guide */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                  <HelpCircle size={20} className="text-primary" />
                  Troubleshooting Guide
                </h2>
                <div className="space-y-3">
                  {troubleshootingSteps.map((step, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02]"
                      style={{ 
                        background: dark ? "var(--color-dark-card)" : "var(--color-light-card)", 
                        borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-0.5">{step.icon}</div>
                        <div>
                          <h3 className="font-semibold mb-1" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                            {step.title}
                          </h3>
                          <p className="text-sm" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            {/* Support Hours */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                  <Clock size={20} className="text-primary" />
                  Support Hours
                </h2>
                <div 
                  className="rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    background: dark ? "var(--color-dark-card)" : "var(--color-light-card)", 
                    borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                  }}
                >
                  {supportHours.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-center p-4 ${
                        index !== supportHours.length - 1 ? "border-b" : ""
                      }`}
                      style={{ 
                        borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                      }}
                    >
                      <span className="text-sm font-medium" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                        {item.day}
                      </span>
                      <span className="text-sm" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
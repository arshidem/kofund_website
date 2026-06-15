"use client";

import Link from "next/link";
import { ChevronLeft, Target, Shield, Users, Clock, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

// Skeleton Loader Component
function AboutPageSkeleton() {
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
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded bg-primary/20" />
                  <div className="w-32 h-6 bg-primary/20 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="w-full h-4 bg-primary/10 rounded" />
                  <div className="w-3/4 h-4 bg-primary/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
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
    return <AboutPageSkeleton />;
  }

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Absolute Transparency",
      description: "Every single payout or collection is listed on the live ledger. Trust is maintained across the entire organization."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Saves Time",
      description: "Admins don't need to constantly reply to 'what is the balance?' or 'did my payment arrive?' messages."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sub-Fund Segmentation",
      description: "Separate balances for specific events (e.g., charity drives, building renovation, trips) ensure money is never mixed up."
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
        <div className="max-w-4xl mx-auto  h-16 flex items-center justify-between relative">
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
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Logo />
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
                About KoFund
              </h1>
              <p className="text-sm" style={{ color: dark ? "#6B7280" : "#64748b" }}>
                A transparent, dedicated platform for joint committee fund management.
              </p>
            </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Mission Section */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                  <Target className="text-primary" size={24} />
                  Our Mission
                </h2>
                <p className="leading-relaxed" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                  KoFund was born out of a simple observation: communities, committees, clubs, and family groups 
                  struggle to manage joint funds cleanly. Traditional methods like WhatsApp chats, spreadsheet links, 
                  and paper notebooks lead to miscommunication, forgotten payments, and trust issues.
                </p>
                <p className="leading-relaxed mt-3" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                  Our mission is to eliminate WhatsApp financial confusion by providing a single source of truth 
                  that is accessible, transparent, secure, and user-friendly.
                </p>
              </section>

            {/* Product Overview */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                  <Users className="text-primary" size={24} />
                  Product Overview
                </h2>
                <p className="leading-relaxed" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                  KoFund is a dedicated software-as-a-service application that allows community administrators 
                  to invite members, set up contribution targets, log event expenses, and share live balance sheets. 
                  Members can view records, export historical reports, and receive reminders without waiting for 
                  manual balance updates in chat groups.
                </p>
              </section>

            {/* Benefits */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                  Key Benefits
                </h2>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] opacity-0 animate-fade-in-up"
                      style={{
                        animationDelay: `${0.1 + index * 0.1}s`,
                        animationFillMode: "forwards",
                        background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
                        borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">{benefit.icon}</div>
                        <div>
                          <h3 className="font-semibold mb-1" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                            {benefit.title}
                          </h3>
                          <p className="text-sm" style={{ color: dark ? "#6B7280" : "#64748b" }}>
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
          </div>
        </div>
      </div>
    </div>
  );
}
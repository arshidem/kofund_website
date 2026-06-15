"use client";

import Link from "next/link";
import { ChevronLeft, Shield, Database, Lock, UserCheck } from "lucide-react";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

// Skeleton Loader Component
function DataSafetySkeleton() {
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
          <div className="p-6 sm:p-8 space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-primary/10 bg-primary/5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/20" />
                  <div className="flex-1">
                    <div className="w-32 h-5 bg-primary/20 rounded mb-2" />
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-primary/10 rounded" />
                      <div className="w-3/4 h-4 bg-primary/10 rounded" />
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

export default function DataSafetyPage() {
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
    return <DataSafetySkeleton />;
  }

  const sections = [
    {
      icon: <Database className="w-5 h-5" />,
      title: "What Data is Collected",
      content: "KoFund collects community name, admin logs, contribution ledgers, expense logs, user display names, email addresses, and phone numbers. We do NOT collect or store direct bank account passwords, credit card numbers, or automated banking transaction feeds."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Why Data is Collected",
      content: "Ledger data is collected purely to calculate and display real-time balances, track who has contributed to event sub-funds, and generate transparent audit reports for all members of the community."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Firebase Security & Storage Rules",
      content: "All data is encrypted in transit using SSL/TLS and encrypted at rest on Google Cloud Servers. We implement strict Firestore Security Rules to guarantee that only registered and approved members of a community can view that community's ledger, and only authorized administrators can log expenses or modify contribution records."
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "User Controls & Data Deletion",
      content: "You have full control over your profile. At any time, you can request manual removal, download a copy of your personal data, or delete your account permanently via settings, which instantly cleanses your data from active authentication directories."
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
          <Reveal direction="up">
            <div className="p-6 sm:p-8 border-b" style={{ borderColor: dark ? "#1E2530" : "#e2e8f0" }}>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                Data Safety
              </h1>
              <p className="text-sm" style={{ color: dark ? "#6B7280" : "#64748b" }}>
                How we protect your community finances and individual privacy.
              </p>
            </div>
          </Reveal>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {sections.map((section, index) => (
              <Reveal key={index} direction="up" delay={100 + index * 50}>
                <div 
                  className="p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    background: dark ? "var(--color-dark-card)" : "var(--color-light-card)", 
                    borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-0.5">{section.icon}</div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                        {section.title}
                      </h2>
                      <p className="text-sm leading-relaxed" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { ChevronLeft, AlertTriangle, Mail, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

// Skeleton Loader Component (no theme dependencies for SSR)
function DeleteAccountSkeleton() {
  return (
    <div className="min-h-screen pb-16 px-4 sm:px-6">
      {/* App Bar Skeleton - Use static colors for SSR */}
      <div className="sticky top-0 z-50 border-b bg-[#0B0E11] border-[#1E2530]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="w-16 h-4 bg-[#00E3C3]/20 rounded animate-pulse" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#00E3C3]/20 animate-pulse" />
            <div className="w-16 h-5 bg-[#00E3C3]/10 rounded animate-pulse" />
          </div>
          <div className="w-16" />
        </div>
      </div>

      {/* Content Skeleton - Use static colors for SSR */}
      <div className="max-w-4xl mx-auto pt-6">
        <div className="rounded-2xl border overflow-hidden animate-pulse bg-[#13181E] border-[#1E2530]">
          <div className="p-6 sm:p-8 border-b border-[#1E2530]">
            <div className="w-48 h-8 bg-[#00E3C3]/20 rounded mb-2" />
            <div className="w-64 h-4 bg-[#00E3C3]/10 rounded" />
          </div>
          <div className="p-6 sm:p-8 space-y-8">
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-red-500/20" />
                <div className="flex-1">
                  <div className="w-40 h-5 bg-red-500/20 rounded mb-2" />
                  <div className="w-full h-4 bg-[#00E3C3]/10 rounded" />
                  <div className="w-3/4 h-4 bg-[#00E3C3]/10 rounded mt-2" />
                </div>
              </div>
            </div>
            {[1, 2].map((i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded bg-[#00E3C3]/20" />
                  <div className="w-40 h-6 bg-[#00E3C3]/20 rounded" />
                </div>
                <div className="p-4 rounded-xl border border-[#00E3C3]/10 bg-[#00E3C3]/5">
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-[#00E3C3]/10 rounded" />
                    <div className="w-3/4 h-4 bg-[#00E3C3]/10 rounded" />
                    <div className="w-1/2 h-4 bg-[#00E3C3]/10 rounded" />
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

export default function DeleteAccountPage() {
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
    return <DeleteAccountSkeleton />;
  }

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-1.5 text-sm transition-colors hover:text-primary group h-full"
            style={{ color: dark ? "#6B7280" : "#64748b" }}
          >
            <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-0.5" /> 
            <span className="leading-none">Back</span>
          </Link>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Logo />
          </div>

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
                Delete Account
              </h1>
              <p className="text-sm" style={{ color: dark ? "#6B7280" : "#64748b" }}>
                Learn how to permanently erase your profile and records from KoFund.
              </p>
            </div>
          </Reveal>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Warning Box */}
            <Reveal direction="up" delay={100}>
              <div 
                className="p-4 rounded-xl border border-red-500/20 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: dark ? "rgba(220, 38, 38, 0.1)" : "rgba(220, 38, 38, 0.05)" }}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-red-500 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-red-500 mb-1">Warning: Permanent Action</h3>
                    <p className="text-sm" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                      Deleting your account is permanent and irreversible. All personal details, community memberships, 
                      and individual contribution histories will be permanently wiped. Ledger entries created on behalf 
                      of the community may be preserved to prevent database corruption, but all identifying member 
                      records will be permanently decoupled.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Method 1: Web App */}
            <Reveal direction="up" delay={200}>
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                  <Settings size={20} className="text-primary" />
                  Steps to Delete via Web App
                </h2>
                <div 
                  className="p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    background: dark ? "var(--color-dark-card)" : "var(--color-light-card)", 
                    borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                  }}
                >
                  <ol className="list-decimal list-inside space-y-3 ml-2" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                    <li>Open KoFund Web App at <a href="https://kofund-153ba.web.app" target="_blank" className="text-primary hover:underline">https://kofund-153ba.web.app</a></li>
                    <li>Log into your account</li>
                    <li>Go to Profile → Settings</li>
                    <li>Click on <strong className="text-red-500">Delete Account</strong> button</li>
                    <li>Type <strong className="text-red-500">"delete"</strong> in the confirmation input field</li>
                    <li>Click <strong className="text-red-500">Delete Permanently</strong> to confirm</li>
                  </ol>
                </div>
              </div>
            </Reveal>

            {/* Method 2: Email Request */}
            <Reveal direction="up" delay={300}>
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                  <Mail size={20} className="text-primary" />
                  Delete via Support Email Request
                </h2>
                <div 
                  className="p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    background: dark ? "var(--color-dark-card)" : "var(--color-light-card)", 
                    borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                  }}
                >
                  <ul className="list-disc list-inside space-y-2 ml-2" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                    <li>Email us at <a href="mailto:delete-account@kofund.web.app" className="text-primary hover:underline">delete-account@kofund.web.app</a></li>
                    <li>Subject line: <strong>"Account Deletion Request - [Your Name]"</strong></li>
                    <li>Send the email from your registered KoFund email address</li>
                    <li>Requests are processed within <strong>48 to 72 hours</strong></li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
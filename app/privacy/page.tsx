"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

// Skeleton Loader Component
function PrivacyPolicySkeleton() {
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
            <div className="w-48 h-8 bg-primary/20 rounded" />
          </div>
          <div className="p-6 sm:p-8 space-y-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i}>
                <div className="w-48 h-6 bg-primary/20 rounded mb-3" />
                <div className="space-y-2">
                  <div className="w-full h-4 bg-primary/10 rounded" />
                  <div className="w-3/4 h-4 bg-primary/10 rounded" />
                  {i === 1 || i === 3 ? (
                    <div className="pl-4 mt-2 space-y-1">
                      <div className="w-1/2 h-3 bg-primary/10 rounded" />
                      <div className="w-2/3 h-3 bg-primary/10 rounded" />
                      <div className="w-3/4 h-3 bg-primary/10 rounded" />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
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
    return <PrivacyPolicySkeleton />;
  }

  const sections = [
    {
      title: "Introduction",
      content: "KoFund (\"we\", \"our\", or \"us\") values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web and mobile applications."
    },
    {
      title: "Data Collection",
      content: "We collect personal details to provide and improve the KoFund experience. This includes:",
      list: [
        "Name and Display Name",
        "Email Address (for accounts, login, security)",
        "Phone Number (used to identify member registry)",
        "Community affiliations and financial ledger transactions"
      ]
    },
    {
      title: "Firebase Authentication & Cloud Services",
      content: "We utilize Firebase Authentication to securely manage logins, account verification, and password resets. Your passwords are encrypted at rest and never visible to our administrators. All community records, balances, contributions, and metadata are stored securely on Google Cloud Firestore and protected by rigorous Security Rules."
    },
    {
      title: "User Rights",
      content: "You have the right to:",
      list: [
        "Access the personal data we store about you",
        "Request corrections to incorrect details",
        "Revoke community access or request absolute account deletion at any time"
      ]
    },
    {
      title: "Data Deletion Process",
      content: "If you wish to terminate your account and wipe all stored telemetry data, you can navigate to the \"Delete Account\" option under your settings, or visit our dedicated Delete Account webpage. Initiating account deletion permanently removes your personal profile, credentials, and affiliations from our active identity servers."
    },
    {
      title: "Contact Information",
      content: "For any queries, concerns, or requests regarding this Privacy Policy, please contact our support team at ",
      email: "support@kofund.web.app"
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="rounded-2xl border overflow-hidden"
            style={{ background: dark ? "#13181E" : "#ffffff", borderColor: dark ? "#1E2530" : "#e2e8f0" }}
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b" style={{ borderColor: dark ? "#1E2530" : "#e2e8f0" }}>
              <div className="flex items-center gap-2 text-sm mb-2" style={{ color: dark ? "#6B7280" : "#64748b" }}>
                <Calendar size={14} />
                Last Updated: June 2026
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                Privacy Policy
              </h1>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {sections.map((section, index) => (
                <section key={index} className="transition-all duration-300 hover:translate-x-1">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                    {section.title}
                  </h2>
                  <p className="leading-relaxed mb-3" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 ml-2" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                      {section.list.map((item, i) => (
                        <li key={i} className="transition-all duration-200 hover:text-primary hover:ml-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.email && (
                    <p className="leading-relaxed" style={{ color: dark ? "#9CA3AF" : "#475569" }}>
                      {section.content}
                      <a 
                        href={`mailto:${section.email}`}
                        className="text-primary hover:underline ml-1 transition-all duration-200"
                      >
                        {section.email}
                      </a>
                    </p>
                  )}
                </section>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
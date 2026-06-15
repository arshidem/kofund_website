"use client";

import { useState, useEffect } from "react";
import { ChevronDown, HelpCircle, Mail, MessageCircle, Search } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const faqs = [
  { q: "Who can use KoFund?", a: "KoFund is designed for anyone managing money jointly — mosque committees, local event organizers, student organizations, charity collections, family savings pools, housing societies, clubs, and college groups." },
  { q: "How much does KoFund cost?", a: "KoFund offers a 30-day free trial with no credit card required. After the trial, it's just ₹25/month per community. All members get full access for free when the community admin subscribes." },
  { q: "Can I track monthly contributions?", a: "Yes! KoFund is built to track both one-off event targets and recurring monthly contributions, making it perfect for clubs, college committees, or residential societies." },
  { q: "How do members verify their payments?", a: "Once an admin records a contribution, members instantly receive a digital receipt. They can download it directly from the app to verify their payment." },
  { q: "Can members view event details without logging in?", a: "Yes. Admins can generate a secure public link for an event. Anyone with this link can view the contribution list, expense logs, target metrics, and the net balance." },
  { q: "Is my data secure?", a: "Absolutely. We use Firebase Authentication to secure member logins and cloud security rules to ensure only approved committee members can edit or access community records." },
  { q: "What happens after the free trial?", a: "After 30 days, you'll need to subscribe for ₹25/month to continue using KoFund. You'll receive reminders before your trial ends, and you can cancel anytime." },
  { q: "Can I export financial reports?", a: "Absolutely. KoFund allows you to generate and export comprehensive PDF reports of all transactions, contributions, and expense histories." },
  { q: "How are expenses tracked?", a: "Admins can log expenses in real-time, and the system automatically deducts them from the available balance. Every transaction is recorded and visible to all members." },
  { q: "Can I set up different roles for members?", a: "Yes! KoFund supports multiple roles including Admin, Member, and Auditor. Each role has specific permissions to maintain security and transparency." },
  { q: "What happens if I delete my account?", a: "Deleting your account is permanent. All personal details, community memberships, and individual contribution history will be permanently wiped. Ledger entries made on behalf of the community are preserved, but all identifying member details are permanently decoupled." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const obs = new MutationObserver(() => setDark(!document.body.classList.contains("light")));
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));
    return () => obs.disconnect();
  }, []);

  // Filter FAQs based on search
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!mounted) {
    return null; // Skeleton handles loading
  }

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-primary text-sm font-medium mb-2">FAQ</p>
            <h2
              className="text-2xl sm:text-4xl font-bold"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-sm mt-3 max-w-md mx-auto"
              style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
            >
              Everything you need to know about KoFund. Can't find what you're looking for?
            </p>
          </div>
        </Reveal>

        {/* Search Bar */}
        <Reveal direction="up" delay={100}>
          <div className="mb-8">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: dark ? "var(--color-dark-text-tertiary)" : "var(--color-light-text-tertiary)" }}
              />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                style={{
                  background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
                  borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)",
                  color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)",
                }}
              />
            </div>
          </div>
        </Reveal>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <HelpCircle size={48} className="mx-auto mb-3 opacity-50" />
              <p style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}>
                No questions found. Try a different search term.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden transition-all duration-200 hover:shadow-md opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${i * 0.03}s`,
                  animationFillMode: "forwards",
                  background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
                  borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-3 group"
                >
                  <span
                    className="text-sm sm:text-base font-medium flex-1"
                    style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`transition-transform duration-200 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className="shrink-0 transition-colors group-hover:text-primary"
                      style={{ color: dark ? "var(--color-dark-text-tertiary)" : "var(--color-light-text-tertiary)" }}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    open === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                    <div className="w-8 h-0.5 bg-primary/30 rounded-full mb-3" />
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Still have questions section */}
        <Reveal direction="up" delay={200}>
          <div
            className="mt-12 p-6 rounded-2xl text-center border"
            style={{
              background: dark ? "var(--color-dark-surface)" : "var(--color-light-surface)",
              borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
            }}
          >
            <HelpCircle size={32} className="mx-auto mb-3 text-primary" />
            <h3
              className="font-semibold mb-2"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Still have questions?
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
            >
              Can't find the answer you're looking for? Please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: "var(--color-primary)",
                  color: "#0B0E11"
                }}
              >
                <MessageCircle size={16} /> Contact Support
              </Link>
              <Link
                href="mailto:kofundapp@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border hover:scale-105"
                style={{
                  borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)",
                  color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)"
                }}
              >
                <Mail size={16} /> kofundapp@gmail.com
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Quick links */}
        <div className="mt-8 flex justify-center gap-4 text-xs">
          <Link
            href="/privacy"
            className="transition-colors hover:text-primary"
            style={{ color: dark ? "var(--color-dark-text-tertiary)" : "var(--color-light-text-tertiary)" }}
          >
            Privacy Policy
          </Link>
          <span style={{ color: dark ? "var(--color-dark-border)" : "var(--color-light-border)" }}>•</span>
          <Link
            href="/terms"
            className="transition-colors hover:text-primary"
            style={{ color: dark ? "var(--color-dark-text-tertiary)" : "var(--color-light-text-tertiary)" }}
          >
            Terms of Service
          </Link>
          <span style={{ color: dark ? "var(--color-dark-border)" : "var(--color-light-border)" }}>•</span>
          <Link
            href="/data-safety"
            className="transition-colors hover:text-primary"
            style={{ color: dark ? "var(--color-dark-text-tertiary)" : "var(--color-light-text-tertiary)" }}
          >
            Data Safety
          </Link>
        </div>
      </div>
    </section>
  );
}
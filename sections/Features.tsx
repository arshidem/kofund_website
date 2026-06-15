"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useState } from "react";
import { CalendarDays, Link2, Receipt, FileText, Bell, Wallet, Users } from "lucide-react";

const features = [
  { icon: CalendarDays, title: "Monthly & Event Contributions", description: "Track recurring monthly fees for clubs and societies, alongside one-off event targets — all in one dashboard." },
  { icon: Link2, title: "Public Sharing Links", description: "Share a secure public link so all members can instantly view collection progress, expenses, and paid/unpaid lists." },
  { icon: Receipt, title: "Instant Digital Receipts", description: "Members can view and download their digital receipt the moment an admin marks their contribution as paid." },
  { icon: FileText, title: "PDF & Image Summaries", description: "Generate clean event summaries in PDF or image format and share them directly on messaging groups." },
  { icon: Bell, title: "Smart Push Reminders", description: "Set custom reminders and send push notifications directly to members who have outstanding dues." },
  { icon: Wallet, title: "Live Net Balances", description: "Track the exact remaining budget and current net balances with automated real-time expense deductions." },
  { icon: Users, title: "Member Management", description: "Manage community members, approve join requests, and assign custom roles transparently." },
];

export default function Features() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const obs = new MutationObserver(() => setDark(!document.body.classList.contains("light")));
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));
    return () => obs.disconnect();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section id="features" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="text-primary text-sm font-medium mb-2">Features</p>
            <h2
              className="text-2xl sm:text-4xl font-bold"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Everything You Need to Run Smoothly
            </h2>
          </m.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((f, i) => (
              <m.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl p-5 border transition-all duration-300 group hover:scale-105"
                style={{
                  background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
                  borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: dark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)",
                  }}
                >
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3
                  className="font-semibold text-sm sm:text-base mb-1.5"
                  style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
                >
                  {f.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
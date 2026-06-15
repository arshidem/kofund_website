"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, Gift, Users, FileText, Bell, Shield, Zap, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free Trial",
    price: "₹0",
    period: "for 30 days",
    description: "Experience KoFund risk-free",
    features: [
      "All features included",
      "Track contributions & expenses",
      "Generate PDF reports",
      "Real-time balance updates",
      "Member management",
      "Email support",
      "No credit card required"
    ],
    buttonText: "Start Free Trial",
    buttonLink: "https://kofund-153ba.web.app",
    popular: false
  },
  {
    name: "Monthly",
    price: "₹25",
    period: "per month",
    description: "Perfect for communities",
    features: [
      "Everything in Free Trial",
      "Continue after trial",
      "Priority support",
      "Push notifications",
      "WhatsApp support",
      "Export reports",
      "Sub-fund management"
    ],
    buttonText: "Get Started",
    buttonLink: "https://kofund-153ba.web.app",
    popular: true
  }
];

export default function Pricing() {
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
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-primary text-sm font-medium mb-2">Simple Pricing</p>
          <h2 className="text-2xl sm:text-4xl font-bold mb-3" style={{ color: dark ? "#fff" : "#0f172a" }}>
            Just ₹25/month per Community
          </h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: dark ? "#6B7280" : "#64748b" }}>
            Start with 30 days free trial. No credit card required. Cancel anytime.
            All members get full access for free.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl border p-6 transition-all hover:shadow-xl ${
                plan.popular ? "border-primary shadow-lg" : ""
              }`}
              style={{
                background: dark ? "#151A1F" : "#ffffff",
                borderColor: plan.popular ? "#00E3C3" : dark ? "#262D35" : "#E9ECEF"
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-[#0B0E11] text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.name === "Free Trial" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    No Credit Card
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {plan.name === "Free Trial" ? <Zap size={24} className="text-primary" /> : <Crown size={24} className="text-primary" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: dark ? "#fff" : "#0f172a" }}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-sm" style={{ color: dark ? "#6B7280" : "#64748b" }}>
                    /{plan.period}
                  </span>
                </div>
                <p className="text-sm" style={{ color: dark ? "#6B7280" : "#64748b" }}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    <span style={{ color: dark ? "#E0F2EF" : "#1A2E2A" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={plan.buttonLink} target="_blank">
                <button
                  className={`w-full py-2.5 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-primary text-[#0B0E11] hover:bg-primary-dark"
                      : "border hover:bg-primary/10"
                  }`}
                  style={{
                    borderColor: dark ? "#262D35" : "#E9ECEF"
                  }}
                >
                  {plan.buttonText}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs" style={{ color: dark ? "#6B7280" : "#64748b" }}>
            ✓ No hidden fees ✓ Cancel anytime ✓ 30-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}
"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles, CheckCircle, Users, TrendingUp, Shield, Star, CreditCard, Rocket } from "lucide-react";

export default function CTA() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const obs = new MutationObserver(() => setDark(!document.body.classList.contains("light")));
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));
    return () => obs.disconnect();
  }, []);

  if (!mounted) {
    return (
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto px-3 sm:px-0">
          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden border border-[#1E2530] bg-[#13181E]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 md:w-96 h-32 sm:h-48 bg-[#00E3C3]/10 blur-2xl sm:blur-3xl rounded-full pointer-events-none" />
            <div className="inline-flex mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#00E3C3]/15">
                <Sparkles size={24} className="text-[#00E3C3]" />
              </div>
            </div>
            <p className="text-[#00E3C3] text-xs sm:text-sm font-medium mb-2 sm:mb-3 uppercase tracking-wide">
              Get Started Today
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 text-white">
              Ready to Simplify{" "}
              <span className="text-[#00E3C3]">Community Finances?</span>
            </h2>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 max-w-sm mx-auto px-3 leading-relaxed text-[#6B7280]">
              Join thousands of communities already using KoFund to manage finances with complete transparency and ease.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#00E3C3]" />
                <span className="text-xs text-[#6B7280]">100% Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[#00E3C3]" />
                <span className="text-xs text-[#6B7280]">Community Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#00E3C3]" />
                <span className="text-xs text-[#6B7280]">Real-time Tracking</span>
              </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-3 justify-center max-w-md mx-auto xs:max-w-none">
              <Link
                href="https://kofund-153ba.web.app"
                target="_blank"
                className="group flex items-center justify-center gap-2 bg-[#00E3C3] text-[#0B0E11] font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-[#00BFA6] transition-all hover:scale-105 active:scale-95 text-sm sm:text-base w-full"
              >
                Open Web App
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing"
                target="_blank"
                className="group flex items-center justify-center gap-2 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border transition-all hover:scale-105 active:scale-95 text-sm sm:text-base w-full border-[#1E2530] text-white bg-transparent"
              >
                <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                Download App
              </Link>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1E2530]">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <Star size={12} className="text-[#00E3C3]" />
                  <span className="text-[#6B7280]">Trusted by 50+ communities</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#1E2530]" />
                <div className="flex items-center gap-1.5">
                  <CreditCard size={12} className="text-[#00E3C3]" />
                  <span className="text-[#6B7280]">No credit card required</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#1E2530]" />
                <div className="flex items-center gap-1.5">
                  <Rocket size={12} className="text-[#00E3C3]" />
                  <span className="text-[#6B7280]">Free forever</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const benefits = [
    { icon: CheckCircle, text: "100% Transparent" },
    { icon: Users, text: "Community Trust" },
    { icon: TrendingUp, text: "Real-time Tracking" },
  ];

  const trustBadges = [
    { icon: Star, text: "Trusted by 50+ communities" },
    { icon: CreditCard, text: "No credit card required" },
    { icon: Rocket, text: "Free forever" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto px-3 sm:px-0">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center overflow-hidden border shadow-xl"
            style={{
              background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
              borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
            }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 md:w-96 h-32 sm:h-48 bg-primary/5 blur-2xl sm:blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 blur-2xl rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 blur-2xl rounded-full pointer-events-none" />

            {/* Sparkle icon */}
            <m.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="inline-flex mb-4"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "rgba(0, 227, 195, 0.15)" }}
              >
                <Sparkles size={24} className="text-primary" />
              </div>
            </m.div>

            <p className="text-primary text-xs sm:text-sm font-medium mb-2 sm:mb-3 uppercase tracking-wide">
              Get Started Today
            </p>

            <m.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Ready to Simplify{" "}
              <span className="text-primary">Community Finances?</span>
            </m.h2>

            <m.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-sm sm:text-base mb-6 sm:mb-8 max-w-sm mx-auto px-3 leading-relaxed"
              style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
            >
              Join thousands of communities already using KoFund to manage finances with complete transparency and ease.
            </m.p>

            {/* Benefits row */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <benefit.icon size={16} className="text-primary" />
                  <span
                    className="text-xs"
                    style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
                  >
                    {benefit.text}
                  </span>
                </div>
              ))}
            </m.div>

            {/* Buttons */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col xs:flex-row gap-3 justify-center max-w-md mx-auto xs:max-w-none"
            >
              <Link
                href="https://kofund-153ba.web.app"
                target="_blank"
                className="group flex items-center justify-center gap-2 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 text-sm sm:text-base w-full"
                style={{
                  background: "var(--color-primary)",
                  color: "#0B0E11"
                }}
              >
                Open Web App
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing"
                target="_blank"
                className="group flex items-center justify-center gap-2 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border transition-all hover:scale-105 active:scale-95 text-sm sm:text-base w-full"
                style={{
                  borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)",
                  color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)",
                  background: dark ? "transparent" : "white"
                }}
              >
                <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                Download App
              </Link>
            </m.div>

            {/* Trust badges */}
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
              className="mt-8 pt-6 border-t"
              style={{ borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" }}
            >
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <badge.icon size={12} className="text-primary" />
                    <span style={{ color: dark ? "var(--color-dark-text-tertiary)" : "var(--color-light-text-tertiary)" }}>
                      {badge.text}
                    </span>
                    {idx < trustBadges.length - 1 && (
                      <span
                        className="w-1 h-1 rounded-full mx-1"
                        style={{ background: dark ? "var(--color-dark-border)" : "var(--color-light-border)" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </m.div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
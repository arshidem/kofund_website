"use client";

import { useEffect, useState } from "react";
import { Check, X, Minus } from "lucide-react";
import Reveal from "@/components/Reveal";

const rows = [
  { feature: "Track Contributions", wa: { s: false }, no: { s: "partial" }, kf: { s: true, note: "Auto per member" } },
  { feature: "Track Expenses", wa: { s: false }, no: { s: "partial" }, kf: { s: true, note: "Auto balance" } },
  { feature: "Member Management", wa: { s: false }, no: { s: false }, kf: { s: true, note: "Roles & approval" } },
  { feature: "Reports & History", wa: { s: false }, no: { s: false }, kf: { s: true, note: "PDF export" } },
  { feature: "Transparency", wa: { s: false }, no: { s: false }, kf: { s: true, note: "Public link" } },
];

function Cell({ s }: { s: boolean | string }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const obs = new MutationObserver(() => setDark(!document.body.classList.contains("light")));
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));
    return () => obs.disconnect();
  }, []);

  if (s === true) {
    return (
      <div className="w-6 h-6 rounded-full flex items-center justify-center mx-auto"
        style={{ backgroundColor: "rgba(0, 227, 195, 0.15)" }}>
        <Check size={12} className="text-primary" />
      </div>
    );
  }
  if (s === "partial") {
    return (
      <div className="w-6 h-6 rounded-full flex items-center justify-center mx-auto"
        style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}>
        <Minus size={12} className="text-yellow-500" />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center mx-auto"
      style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}>
      <X size={12} className="text-red-400" />
    </div>
  );
}

export default function Comparison() {
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
    return null;
  }

  return (
    <section id="comparison" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-primary text-sm font-medium mb-2">Why KoFund?</p>
            <h2
              className="text-2xl sm:text-4xl font-bold mb-3"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Built for Accountability
            </h2>
            <p
              className="text-sm"
              style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
            >
              Traditional tools fall short when it comes to accountability.
            </p>
          </div>
        </Reveal>

        {/* Comparison Table */}
        <Reveal direction="up" delay={100}>
          <div
            className="rounded-2xl border overflow-hidden animate-fade-in-up"
            style={{
              animationFillMode: "forwards",
              background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
              borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
            }}
          >
            {/* Header */}
            <div className="grid grid-cols-4 border-b" style={{ borderColor: dark ? "#1E2530" : "#e2e8f0" }}>
              {["Feature", "WhatsApp", "Notes/Excel", "KoFund"].map((h, i) => (
                <div key={h} className={`p-3 sm:p-4 text-xs sm:text-sm font-semibold ${i > 0 ? "text-center" : ""}`}
                  style={{ color: i === 3 ? "#00E3C3" : dark ? "#6B7280" : "#64748b" }}>
                  {h}{i === 3 ? " ✦" : ""}
                </div>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 items-stretch ${i !== rows.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" }}
              >
                <div
                  className="p-3 sm:p-4 text-xs sm:text-sm font-medium"
                  style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
                >
                  {row.feature}
                </div>
                <div className="p-3 sm:p-4"><Cell s={row.wa.s} /></div>
                <div className="p-3 sm:p-4"><Cell s={row.no.s} /></div>
                <div
                  className="p-3 sm:p-4 self-stretch flex items-center justify-center"
                  style={{ background: dark ? "rgba(0, 227, 195, 0.03)" : "rgba(0, 191, 166, 0.04)" }}
                >
                  <Cell s={row.kf.s} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Legend */}
        <Reveal direction="up" delay={150}>
          <div className="mt-6 text-center">
            <p
              className="text-xs"
              style={{ color: dark ? "var(--color-dark-text-tertiary)" : "var(--color-light-text-tertiary)" }}
            >
              ✓ = Supported &nbsp;&nbsp;|&nbsp;&nbsp; ⟋ = Partial &nbsp;&nbsp;|&nbsp;&nbsp; ✗ = Not Supported
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
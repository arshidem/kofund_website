"use client";

import { useEffect, useState } from "react";
import { Moon as MoonIcon, Users, Calendar, Heart, HandHeart, GraduationCap, Church, Users2, Ticket, Gift, Building2, BookOpen } from "lucide-react";
import Reveal from "@/components/Reveal";

const cases = [
  { icon: MoonIcon, label: "Religious Groups" },
  { icon: Users, label: "Community Groups" },
  { icon: Calendar, label: "Event Organizers" },
  { icon: Heart, label: "Family Funds" },
  { icon: HandHeart, label: "Charity Collections" },
  { icon: GraduationCap, label: "Student Orgs" },
  { icon: Church, label: "Mosque Committees" },
  { icon: Users2, label: "Clubs & Societies" },
  { icon: Ticket, label: "Event Planning" },
  { icon: Gift, label: "Gift Collections" },
  { icon: Building2, label: "Resident Groups" },
  { icon: BookOpen, label: "Study Groups" },
];

export default function UseCases() {
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
    return null; // Skeleton handles loading
  }

  // Split cases into rows for auto-moving layout
  const firstRow = cases.slice(0, 6);
  const secondRow = cases.slice(6, 12);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-primary text-sm font-medium mb-2">Use Cases</p>
            <h2
              className="text-2xl sm:text-4xl font-bold"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Perfect For Every Committee & Group
            </h2>
            <p
              className="text-sm mt-3 max-w-2xl mx-auto"
              style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
            >
              From religious organizations to student clubs, KoFund adapts to your community's needs
            </p>
          </div>
        </Reveal>

        {/* Auto-moving rows - CSS animations instead of Framer Motion */}
        <div className="relative">
          {/* Row 1 - Moves left to right */}
          <div className="relative mb-6 overflow-hidden">
            <div className="animate-marquee-left flex gap-4">
              {[...firstRow, ...firstRow].map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  className="flex-shrink-0 w-36 sm:w-40 lg:w-44"
                >
                  <div
                    className="rounded-2xl p-4 flex flex-col items-center gap-3 border transition-all duration-300 hover:scale-105 cursor-pointer group"
                    style={{
                      background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
                      borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: dark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)",
                      }}
                    >
                      <item.icon size={22} className="text-primary" />
                    </div>
                    <p
                      className="text-xs font-medium text-center leading-snug"
                      style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moves right to left (opposite direction) */}
          <div className="relative overflow-hidden">
            <div className="animate-marquee-right flex gap-4">
              {[...secondRow, ...secondRow].map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  className="flex-shrink-0 w-36 sm:w-40 lg:w-44"
                >
                  <div
                    className="rounded-2xl p-4 flex flex-col items-center gap-3 border transition-all duration-300 hover:scale-105 cursor-pointer group"
                    style={{
                      background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
                      borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: dark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)",
                      }}
                    >
                      <item.icon size={22} className="text-primary" />
                    </div>
                    <p
                      className="text-xs font-medium text-center leading-snug"
                      style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="relative mt-8">
          <div
            className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${dark ? "var(--color-dark-background)" : "var(--color-light-background)"}, transparent)`
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${dark ? "var(--color-dark-background)" : "var(--color-light-background)"}, transparent)`
            }}
          />
        </div>
      </div>
    </section>
  );
}
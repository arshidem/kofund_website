"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UserPlus, Settings, BarChart3 } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Create Your Group", description: "Set up your community — clubs, student group, event group, or family fund. Invite members instantly." },
  { icon: Settings, title: "Set Up Contributions", description: "Define monthly fees or one-off event targets. KoFund tracks who paid, who hasn't, and sends reminders automatically." },
  { icon: BarChart3, title: "Track & Share", description: "View live balances, log expenses, generate PDF reports, and share a public link so everyone stays informed." },
];

export default function HowItWorks() {
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

  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-primary text-sm font-medium mb-2">How It Works</p>
          <h2 
            className="text-2xl sm:text-4xl font-bold"
            style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
          >
            Up and Running in Minutes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-5">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    background: dark ? "var(--color-dark-card)" : "var(--color-light-card)", 
                    borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)" 
                  }}
                >
                  <step.icon 
                    size={26} 
                    className="text-primary-dark dark:text-primary"
                    style={{ 
                      color: dark ? "var(--color-primary)" : "var(--color-primary-dark)"
                    }}
                  />
                </div>
                <span 
                  className="absolute -top-2 -right-2 w-5 h-5 text-xs font-bold rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: "var(--color-primary)",
                    color: "#0B0E11"
                  }}
                >
                  {i + 1}
                </span>
              </div>
              <h3 
                className="font-semibold text-base sm:text-lg mb-2"
                style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
              >
                {step.title}
              </h3>
              <p 
                className="text-xs sm:text-sm leading-relaxed max-w-[260px]"
                style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
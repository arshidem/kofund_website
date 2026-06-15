"use client";

import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Eye, ClipboardList } from "lucide-react";

const roles = [
  { id: "admin", icon: ShieldCheck, label: "Admins", heading: "Take Control of the Ledger", sub: "Spend less time responding to messages and more time running your group.", points: ["Record contributions and manage recurring monthly fees or events in 3 clicks.", "Send automatic push notifications & reminders to members with outstanding dues.", "Generate and share beautiful event summaries in PDF or image format."] },
  { id: "member", icon: Eye, label: "Members", heading: "Track Where Every Cent Goes", sub: "Total transparency at your fingertips. No more guessing the group balance.", points: ["Access public links to view target progress, paid/unpaid statuses, and expenses.", "Get official digital receipts instantly when your contribution is recorded.", "View the live net balance showing contributions minus expense deductions."] },
  { id: "auditor", icon: ClipboardList, label: "Auditors", heading: "Audit-Ready in Seconds", sub: "Remove administrative hurdles and financial mix-ups completely.", points: ["Export comprehensive PDF summaries and transaction histories instantly.", "Verify transaction logs, receipts, and individual member statuses.", "Eliminate bookkeeping errors with structured community ledgers."] },
];

export default function Roles() {
  const [active, setActive] = useState("admin");
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const current = roles.find((r) => r.id === active)!;
  const activeIndex = roles.findIndex(r => r.id === active);

  useEffect(() => {
    setMounted(true);
    
    // Get initial theme
    const isLight = document.body.classList.contains("light");
    setDark(!isLight);
    
    const obs = new MutationObserver(() => {
      setDark(!document.body.classList.contains("light"));
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    
    return () => obs.disconnect();
  }, []);

  // Update slider position when active tab changes or component mounts
  useEffect(() => {
    if (mounted && buttonRefs.current[active] && tabsContainerRef.current) {
      const button = buttonRefs.current[active];
      const container = tabsContainerRef.current;
      if (button && container) {
        const buttonRect = button.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setSliderStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
        });
        
        // Scroll active tab into view on mobile (but keep centered on desktop)
        if (scrollContainerRef.current && window.innerWidth < 1024) {
          const scrollContainer = scrollContainerRef.current;
          const scrollButtonLeft = button.offsetLeft;
          const scrollButtonRight = scrollButtonLeft + button.offsetWidth;
          const scrollLeft = scrollContainer.scrollLeft;
          const scrollRight = scrollLeft + scrollContainer.offsetWidth;
          
          if (scrollButtonLeft < scrollLeft || scrollButtonRight > scrollRight) {
            button.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            });
          }
        }
      }
    }
  }, [active, mounted]);

  const handleTabChange = (newId: string) => {
    const newIndex = roles.findIndex(r => r.id === newId);
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActive(newId);
  };

  if (!mounted) {
    return null; // Skeleton handles loading
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <p className="text-primary text-sm font-medium mb-2">Roles</p>
            <h2
              className="text-2xl sm:text-4xl font-bold"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Built for Everyone in the Group
            </h2>
          </m.div>

          {/* Tab Container - Centered on desktop, scrollable on mobile */}
          <div className="mb-8">
            {/* Scrollable tabs container with center alignment on desktop */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {/* Center the tabs on all screen sizes */}
              <div className="flex justify-center">
                <div
                  ref={tabsContainerRef}
                  className="relative inline-flex rounded-xl p-1 gap-1"
                  style={{
                    background: dark ? "var(--color-dark-surface)" : "var(--color-light-surface)",
                    border: `1px solid ${dark ? "var(--color-dark-border)" : "var(--color-light-border)"}`
                  }}
                >
                  {/* Animated Sliding Background */}
                  <m.div
                    className="absolute rounded-lg"
                    initial={false}
                    animate={{
                      left: sliderStyle.left,
                      width: sliderStyle.width,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      mass: 0.5
                    }}
                    style={{
                      height: 'calc(100% - 8px)',
                      top: '4px',
                      background: "var(--color-primary)",
                    }}
                  />

                  {roles.map((r) => {
                    const isActive = active === r.id;
                    return (
                      <m.button
                        key={r.id}
                        ref={(el) => { buttonRefs.current[r.id] = el; }}
                        onClick={() => handleTabChange(r.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative whitespace-nowrap px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 z-10"
                        style={{
                          color: isActive ? "#0B0E11" : (dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)"),
                        }}
                      >
                        <span className="flex items-center gap-2">
                          <r.icon size={15} /> {r.label}
                        </span>
                      </m.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Content Container with smooth slide animation */}
          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 35 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="rounded-2xl p-6 sm:p-8 border shadow-lg"
              style={{
                background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
                borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
              }}
            >
              <m.h3
                className="text-xl sm:text-2xl font-bold mb-2"
                style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {current.heading}
              </m.h3>

              <m.p
                className="text-sm mb-6"
                style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {current.sub}
              </m.p>

              <ul className="space-y-3">
                {current.points.map((pt, idx) => (
                  <m.li
                    key={pt}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <m.div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                      style={{ background: "rgba(0, 227, 195, 0.15)" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.25 + idx * 0.1 }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--color-primary)" }}
                      />
                    </m.div>
                    <span
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
                    >
                      {pt}
                    </span>
                  </m.li>
                ))}
              </ul>
            </m.div>
          </AnimatePresence>

          {/* Role indicator dots with animation */}
          <div className="flex justify-center gap-2 mt-6">
            {roles.map((r, idx) => (
              <button
                key={r.id}
                onClick={() => handleTabChange(r.id)}
                className="transition-all duration-300 group"
              >
                <m.div
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background: active === r.id ? "var(--color-primary)" : (dark ? "var(--color-dark-border)" : "var(--color-light-border)"),
                  }}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    width: active === r.id ? 24 : 6,
                    background: active === r.id ? "var(--color-primary)" : (dark ? "var(--color-dark-border)" : "var(--color-light-border)")
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
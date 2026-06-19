"use client";

import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Eye, ClipboardList } from "lucide-react";
import Reveal from "@/components/Reveal";

const roles = [
  { id: "admin", icon: ShieldCheck, label: "Admins", heading: "Take Control of the Ledger", sub: "Spend less time responding to messages and more time running your group.", points: ["Record contributions and manage recurring monthly fees or events in 3 clicks.", "Send automatic push notifications & reminders to members with outstanding dues.", "Generate and share beautiful event summaries in PDF or image format."] },
  { id: "member", icon: Eye, label: "Members", heading: "Track Where Every Cent Goes", sub: "Total transparency at your fingertips. No more guessing the group balance.", points: ["Access public links to view target progress, paid/unpaid statuses, and expenses.", "Get official digital receipts instantly when your contribution is recorded.", "View the live net balance showing contributions minus expense deductions."] },
];

export default function Roles() {
  const [active, setActive] = useState("admin");
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const current = roles.find((r) => r.id === active)!;

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
        
        // Scroll active tab into view on mobile
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
    setActive(newId);
  };

  if (!mounted) {
    return null;
  }

  // Get content animation class based on active tab
  const getContentAnimationClass = () => {
    return "animate-fade-in-up";
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-primary text-sm font-medium mb-2">Roles</p>
            <h2
              className="text-2xl sm:text-4xl font-bold"
              style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
            >
              Built for Everyone in the Group
            </h2>
          </div>
        </Reveal>

        {/* Tab Container */}
        <div className="mb-8">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex justify-center">
              <div
                ref={tabsContainerRef}
                className="relative inline-flex rounded-xl p-1 gap-1"
                style={{
                  background: dark ? "var(--color-dark-surface)" : "var(--color-light-surface)",
                  border: `1px solid ${dark ? "var(--color-dark-border)" : "var(--color-light-border)"}`
                }}
              >
                {/* Animated Sliding Background using CSS transition */}
                <div
                  className="absolute rounded-lg transition-all duration-300 ease-out"
                  style={{
                    left: sliderStyle.left,
                    width: sliderStyle.width,
                    height: 'calc(100% - 8px)',
                    top: '4px',
                    background: "var(--color-primary)",
                    transition: "left 0.3s ease-out, width 0.3s ease-out"
                  }}
                />

                {roles.map((r) => {
                  const isActive = active === r.id;
                  return (
                    <button
                      key={r.id}
                      ref={(el) => { buttonRefs.current[r.id] = el; }}
                      onClick={() => handleTabChange(r.id)}
                      className="relative whitespace-nowrap px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 z-10 hover:scale-105 active:scale-95"
                      style={{
                        color: isActive ? "#0B0E11" : (dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)"),
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <r.icon size={15} /> {r.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Content Container with CSS fade animation */}
        <div key={active} className={`rounded-2xl p-6 sm:p-8 border shadow-lg ${getContentAnimationClass()}`}
          style={{
            background: dark ? "var(--color-dark-card)" : "var(--color-light-card)",
            borderColor: dark ? "var(--color-dark-border)" : "var(--color-light-border)"
          }}
        >
          <h3
            className="text-xl sm:text-2xl font-bold mb-2"
            style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
          >
            {current.heading}
          </h3>

          <p
            className="text-sm mb-6"
            style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
          >
            {current.sub}
          </p>

          <ul className="space-y-3">
            {current.points.map((pt, idx) => (
              <li
                key={pt}
                className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + idx * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                  style={{ background: "rgba(0, 227, 195, 0.15)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--color-primary)" }}
                  />
                </div>
                <span
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: dark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
                >
                  {pt}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Role indicator dots */}
        <div className="flex justify-center gap-2 mt-6">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => handleTabChange(r.id)}
              className="transition-all duration-300 group"
            >
              <div
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: active === r.id ? 24 : 6,
                  background: active === r.id ? "var(--color-primary)" : (dark ? "var(--color-dark-border)" : "var(--color-light-border)"),
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
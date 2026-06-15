"use client";

import { useEffect, useState } from "react";

export default function HowItWorksSkeleton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.body.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-16 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-64 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative mb-5">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border animate-pulse"
                  style={{
                    background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)",
                    borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
                  }}
                />
                <div 
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full"
                  style={{
                    background: isDark ? "rgba(0, 227, 195, 0.3)" : "rgba(0, 191, 166, 0.3)"
                  }}
                />
              </div>
              <div className="w-32 h-5 bg-primary/20 rounded mb-2 animate-pulse" />
              <div className="w-48 h-4 bg-primary/10 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
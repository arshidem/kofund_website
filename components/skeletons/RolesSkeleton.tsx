"use client";

import { useEffect, useState } from "react";

export default function RolesSkeleton() {
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
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-16 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-64 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
        </div>

        {/* Tab skeleton - Theme aware */}
        <div className="flex justify-center mb-8">
          <div 
            className="inline-flex rounded-xl p-1 gap-1"
            style={{
              background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)",
              border: `1px solid ${isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"}`
            }}
          >
            {[1, 2, 3].map((i, idx) => (
              <div 
                key={i} 
                className={`px-5 py-2 w-24 h-9 rounded-lg animate-pulse ${idx === 0 ? 'bg-primary/30' : 'bg-primary/15'}`}
                style={{
                  background: idx === 0 
                    ? (isDark ? "rgba(0, 227, 195, 0.3)" : "rgba(0, 191, 166, 0.3)")
                    : (isDark ? "rgba(0, 227, 195, 0.15)" : "rgba(0, 191, 166, 0.15)")
                }}
              />
            ))}
          </div>
        </div>

        {/* Content card skeleton - Theme aware */}
        <div 
          className="rounded-2xl p-6 sm:p-8 border animate-pulse"
          style={{
            background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)",
            borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
          }}
        >
          <div className="w-48 h-7 bg-primary/20 rounded-lg mb-2" />
          <div className="w-64 h-4 bg-primary/10 rounded mb-6" />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <div 
                  className="w-5 h-5 rounded-full"
                  style={{
                    background: isDark ? "rgba(0, 227, 195, 0.15)" : "rgba(0, 191, 166, 0.15)"
                  }}
                />
                <div className="flex-1 h-4 bg-primary/10 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Role indicator dots skeleton */}
        <div className="flex justify-center gap-2 mt-6">
          {[1, 2, 3].map((i, idx) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === 0 ? 'w-6' : 'w-1.5'}`}
              style={{
                background: idx === 0 
                  ? (isDark ? "#00E3C3" : "#00BFA6")
                  : (isDark ? "rgba(0, 227, 195, 0.2)" : "rgba(0, 191, 166, 0.2)")
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
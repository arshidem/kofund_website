"use client";

import { useEffect, useState } from "react";

export default function FAQSkeleton() {
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
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-12 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-64 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
          <div className="w-96 h-4 bg-primary/10 rounded mx-auto mt-3 animate-pulse" />
        </div>

        {/* Search Bar skeleton */}
        <div className="mb-8 animate-pulse">
          <div 
            className="w-full h-12 rounded-xl"
            style={{
              background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)",
              border: `1px solid ${isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"}`
            }}
          />
        </div>

        {/* FAQ List skeleton */}
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="rounded-xl border overflow-hidden animate-pulse"
              style={{
                background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)",
                borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
              }}
            >
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="w-3/4 h-4 bg-primary/20 rounded" />
                  <div className="w-4 h-4 bg-primary/20 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions section skeleton */}
        <div 
          className="mt-12 p-6 rounded-2xl text-center border animate-pulse"
          style={{
            background: isDark ? "rgba(0, 227, 195, 0.03)" : "rgba(0, 191, 166, 0.03)",
            borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
          }}
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 mx-auto mb-3" />
          <div className="w-40 h-5 bg-primary/20 rounded mx-auto mb-2" />
          <div className="w-64 h-4 bg-primary/10 rounded mx-auto mb-4" />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <div className="w-40 h-10 bg-primary/20 rounded-lg mx-auto" />
            <div className="w-48 h-10 bg-primary/10 rounded-lg mx-auto" />
          </div>
        </div>

        {/* Quick links skeleton */}
        <div className="mt-8 flex justify-center gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-24 h-3 bg-primary/10 rounded animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}
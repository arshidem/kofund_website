"use client";

import { useEffect, useState } from "react";

export default function PricingSkeleton() {
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-16 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-64 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
          <div className="w-96 h-4 bg-primary/10 rounded mx-auto mt-3 animate-pulse" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[1, 2].map((i) => (
            <div 
              key={i} 
              className="relative rounded-2xl border p-6 animate-pulse"
              style={{
                background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)",
                borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
              }}
            >
              {/* Popular badge skeleton - only for second card */}
              {i === 2 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-5 bg-primary/30 rounded-full" />
                </div>
              )}

              {/* Free trial badge skeleton - only for first card */}
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="w-28 h-5 bg-primary/20 rounded-full" />
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div 
                    className="w-12 h-12 rounded-full"
                    style={{
                      background: isDark ? "rgba(0, 227, 195, 0.15)" : "rgba(0, 191, 166, 0.15)"
                    }}
                  />
                </div>
                <div className="w-24 h-6 bg-primary/20 rounded mx-auto mb-2" />
                <div className="mb-2">
                  <div className="w-20 h-8 bg-primary/20 rounded mx-auto" />
                </div>
                <div className="w-32 h-4 bg-primary/10 rounded mx-auto" />
              </div>

              <div className="space-y-3 mb-8">
                {[1, 2, 3, 4, 5, 6, 7].map((j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20" />
                    <div className="flex-1 h-3 bg-primary/10 rounded" />
                  </div>
                ))}
              </div>

              <div className="w-full h-10 bg-primary/20 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Footer note skeleton */}
        <div className="text-center mt-8">
          <div className="w-64 h-3 bg-primary/10 rounded mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
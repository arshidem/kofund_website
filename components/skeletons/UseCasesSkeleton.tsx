"use client";

import { useEffect, useState } from "react";

export default function UseCasesSkeleton() {
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
    <section className="py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-16 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-80 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
          <div className="w-96 h-4 bg-primary/10 rounded mx-auto mt-3 animate-pulse" />
        </div>

        {/* Auto-moving rows skeleton - matching the actual UseCases component structure */}
        <div className="relative">
          {/* Row 1 skeleton */}
          <div className="relative mb-6 overflow-hidden">
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div
                  key={`row1-${i}`}
                  className="flex-shrink-0 w-36 sm:w-40 lg:w-44"
                >
                  <div 
                    className="rounded-2xl p-4 flex flex-col items-center gap-3 border animate-pulse"
                    style={{
                      background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)",
                      borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl bg-primary/20"
                      style={{
                        background: isDark ? "rgba(0, 227, 195, 0.15)" : "rgba(0, 191, 166, 0.15)"
                      }}
                    />
                    <div className="w-16 h-3 bg-primary/20 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 skeleton */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div
                  key={`row2-${i}`}
                  className="flex-shrink-0 w-36 sm:w-40 lg:w-44"
                >
                  <div 
                    className="rounded-2xl p-4 flex flex-col items-center gap-3 border animate-pulse"
                    style={{
                      background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)",
                      borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl bg-primary/20"
                      style={{
                        background: isDark ? "rgba(0, 227, 195, 0.15)" : "rgba(0, 191, 166, 0.15)"
                      }}
                    />
                    <div className="w-16 h-3 bg-primary/20 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient overlays for smooth edges skeleton */}
        <div className="relative mt-8">
          <div 
            className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${isDark ? "#0B0E11" : "#F8F9FA"}, transparent)`
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${isDark ? "#0B0E11" : "#F8F9FA"}, transparent)`
            }}
          />
        </div>
      </div>
    </section>
  );
}
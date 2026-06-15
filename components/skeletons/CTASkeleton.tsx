"use client";

import { useEffect, useState } from "react";

export default function CTASkeleton() {
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
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto px-3 sm:px-0">
        <div 
          className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center overflow-hidden border animate-pulse"
          style={{
            background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)",
            borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
          }}
        >
          {/* Background decoration skeletons */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 md:w-96 h-32 sm:h-48 bg-primary/5 blur-2xl sm:blur-3xl rounded-full pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 blur-2xl rounded-full pointer-events-none animate-pulse" />
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 blur-2xl rounded-full pointer-events-none animate-pulse" />

          {/* Sparkle icon skeleton */}
          <div className="inline-flex mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse" />
          </div>

          {/* Badge skeleton */}
          <div className="w-32 h-4 bg-primary/20 rounded mx-auto mb-3 animate-pulse" />

          {/* Heading skeleton */}
          <div className="w-80 h-8 bg-primary/10 rounded mx-auto mb-4 animate-pulse" />

          {/* Description skeleton */}
          <div className="w-64 h-4 bg-primary/10 rounded mx-auto mb-8 animate-pulse" />

          {/* Benefits row skeleton */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary/20 animate-pulse" />
                <div className="w-20 h-3 bg-primary/10 rounded animate-pulse" />
              </div>
            ))}
          </div>

          {/* Buttons skeleton */}
          <div className="flex flex-col xs:flex-row gap-3 justify-center max-w-md mx-auto">
            <div 
              className="w-full xs:w-auto h-11 rounded-xl animate-pulse"
              style={{
                background: isDark ? "rgba(0, 227, 195, 0.3)" : "rgba(0, 191, 166, 0.3)"
              }}
            />
            <div 
              className="w-full xs:w-auto h-11 rounded-xl animate-pulse"
              style={{
                background: isDark ? "rgba(0, 227, 195, 0.15)" : "rgba(0, 191, 166, 0.15)"
              }}
            />
          </div>

          {/* Trust badges skeleton */}
          <div className="mt-8 pt-6 border-t animate-pulse"
            style={{
              borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded bg-primary/20 animate-pulse" />
                  <div className="w-24 h-3 bg-primary/10 rounded animate-pulse" />
                  {i < 3 && (
                    <div className="w-1 h-1 rounded-full bg-primary/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
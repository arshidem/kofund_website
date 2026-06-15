"use client";

import { useThemeAware } from "@/hooks/useThemeAware";

export default function HeroSkeleton() {
  const { isDark, isReady } = useThemeAware();

  if (!isReady) {
    return (
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="animate-pulse">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-8 sm:py-12">
      {/* Background blur effect skeleton - theme aware */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-[480px] h-48 sm:h-64 md:h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: isDark 
            ? "radial-gradient(circle, rgba(0,227,195,0.08) 0%, rgba(0,227,195,0) 70%)"
            : "radial-gradient(circle, rgba(0,191,166,0.08) 0%, rgba(0,191,166,0) 70%)"
        }}
      />

      <div className="max-w-7xl mx-auto text-center z-10 w-full px-3 sm:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Hero Content Skeleton */}
          <div className="text-center lg:text-left">
            {/* Badge skeleton */}
            <div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 animate-pulse"
              style={{
                background: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
              <div className="w-32 h-3 bg-primary/20 rounded hidden xs:inline" />
            </div>
            
            {/* Heading skeleton */}
            <div className="w-full h-12 sm:h-16 md:h-20 bg-primary/10 rounded-lg mb-3 sm:mb-5 animate-pulse" />
            
            {/* Subtitle skeleton */}
            <div className="w-3/4 h-4 bg-primary/10 rounded mx-auto lg:mx-0 mb-6 sm:mb-8 animate-pulse" />
            
            {/* CTAs skeleton */}
            <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-md mx-auto lg:mx-0">
              <div 
                className="w-full xs:w-36 h-10 rounded-xl animate-pulse"
                style={{
                  background: isDark ? "rgba(0, 227, 195, 0.3)" : "rgba(0, 191, 166, 0.3)"
                }}
              />
              <div 
                className="w-full xs:w-36 h-10 rounded-xl animate-pulse"
                style={{
                  background: isDark ? "rgba(0, 227, 195, 0.15)" : "rgba(0, 191, 166, 0.15)"
                }}
              />
            </div>
            
            {/* Stats skeleton */}
            <div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t"
              style={{
                borderColor: isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="w-12 h-6 bg-primary/20 rounded mx-auto lg:mx-0 mb-1 animate-pulse" />
                  <div className="w-16 h-3 bg-primary/10 rounded mx-auto lg:mx-0 animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - QR Code Skeleton (Desktop only) */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div 
              className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg animate-pulse"
              style={{
                background: isDark ? "#151A1F" : "#FFFFFF",
                border: `1px solid ${isDark ? "rgba(0, 227, 195, 0.1)" : "rgba(0, 191, 166, 0.1)"}`
              }}
            >
              <div 
                className="w-full h-full"
                style={{
                  background: isDark ? "rgba(0, 227, 195, 0.05)" : "rgba(0, 191, 166, 0.05)"
                }}
              />
            </div>
            <div className="w-32 h-5 bg-primary/20 rounded mt-4 animate-pulse" />
            <div className="w-40 h-3 bg-primary/10 rounded mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
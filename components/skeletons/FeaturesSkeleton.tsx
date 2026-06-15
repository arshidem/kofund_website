"use client";

export default function FeaturesSkeleton() {
  return (
<section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="w-16 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-64 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl p-5 border border-primary/10 bg-primary/5 animate-pulse">
              <div className="w-10 h-10 rounded-xl bg-primary/20 mb-3" />
              <div className="w-3/4 h-5 bg-primary/20 rounded mb-1.5" />
              <div className="w-full h-4 bg-primary/10 rounded" />
              <div className="w-2/3 h-4 bg-primary/10 rounded mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
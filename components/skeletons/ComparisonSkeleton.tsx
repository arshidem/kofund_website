"use client";

export default function ComparisonSkeleton() {
  return (
<section className="py-12 sm:py-16 px-4 sm:px-6">
         <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="w-16 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-64 h-8 bg-primary/10 rounded mx-auto mb-3 animate-pulse" />
          <div className="w-48 h-4 bg-primary/10 rounded mx-auto animate-pulse" />
        </div>

        <div className="rounded-2xl border border-primary/10 overflow-hidden animate-pulse">
          <div className="grid grid-cols-4 border-b border-primary/10 bg-primary/5 p-3 sm:p-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-primary/20 rounded" />
            ))}
          </div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="grid grid-cols-4 p-3 sm:p-4 border-b border-primary/10">
              <div className="h-4 bg-primary/20 rounded w-3/4" />
              <div className="w-6 h-6 bg-primary/20 rounded-full mx-auto" />
              <div className="w-6 h-6 bg-primary/20 rounded-full mx-auto" />
              <div className="w-6 h-6 bg-primary/20 rounded-full mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
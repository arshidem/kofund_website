"use client";

export default function UseCasesSkeleton() {
  return (
<section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="w-16 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-80 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="rounded-2xl p-5 border border-primary/10 bg-primary/5 animate-pulse">
              <div className="w-12 h-12 rounded-xl bg-primary/20 mx-auto mb-3" />
              <div className="w-20 h-3 bg-primary/20 rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

export default function FAQSkeleton() {
  return (
<section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="w-12 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-64 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
        </div>

        <div className="space-y-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-xl border border-primary/10 bg-primary/5 animate-pulse">
              <div className="p-4 sm:p-5">
                <div className="w-3/4 h-4 bg-primary/20 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
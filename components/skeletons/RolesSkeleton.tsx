"use client";

export default function RolesSkeleton() {
  return (
<section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-16 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-64 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl p-1 gap-1 bg-primary/5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="px-5 py-2 w-24 h-9 bg-primary/15 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-6 sm:p-8 border border-primary/10 bg-primary/5 animate-pulse">
          <div className="w-48 h-7 bg-primary/20 rounded-lg mb-2" />
          <div className="w-64 h-4 bg-primary/10 rounded mb-6" />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20" />
                <div className="flex-1 h-4 bg-primary/10 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
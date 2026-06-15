"use client";

export default function PricingSkeleton() {
  return (
<section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="w-16 h-4 bg-primary/20 rounded mx-auto mb-2 animate-pulse" />
          <div className="w-64 h-8 bg-primary/10 rounded mx-auto animate-pulse" />
          <div className="w-96 h-4 bg-primary/10 rounded mx-auto mt-3 animate-pulse" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="rounded-2xl border border-primary/10 bg-primary/5 animate-pulse"
            >
              <div className="p-6 text-center">
                <div className="w-24 h-5 bg-primary/20 rounded mx-auto mb-2" />
                <div className="w-20 h-8 bg-primary/20 rounded mx-auto mb-2" />
                <div className="w-32 h-4 bg-primary/10 rounded mx-auto" />
              </div>
              <div className="border-t border-primary/10" />
              <div className="p-6 space-y-3">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20" />
                    <div className="flex-1 h-3 bg-primary/10 rounded" />
                  </div>
                ))}
              </div>
              <div className="p-6 pt-0">
                <div className="w-full h-10 bg-primary/20 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
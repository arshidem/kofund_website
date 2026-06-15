"use client";

export default function CTASkeleton() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto px-3 sm:px-0">
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-primary/10 bg-primary/5 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-4" />
          <div className="w-32 h-4 bg-primary/20 rounded mx-auto mb-3" />
          <div className="w-80 h-8 bg-primary/10 rounded mx-auto mb-4" />
          <div className="w-64 h-4 bg-primary/10 rounded mx-auto mb-8" />
          <div className="flex flex-col xs:flex-row gap-3 justify-center max-w-md mx-auto">
            <div className="w-full xs:w-auto h-10 bg-primary/30 rounded-xl" />
            <div className="w-full xs:w-auto h-10 bg-primary/20 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
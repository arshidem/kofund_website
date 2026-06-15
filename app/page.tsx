"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import skeletons
import {
  HeroSkeleton,
  FeaturesSkeleton,
  HowItWorksSkeleton,
  ComparisonSkeleton,
  UseCasesSkeleton,
  RolesSkeleton,
  FAQSkeleton,
  CTASkeleton,
  PricingSkeleton, // Add this new skeleton
} from "@/components/skeletons";

// Dynamically import sections with loading skeletons
const Hero = dynamic(() => import("@/sections/Hero"), {
  ssr: false,
  loading: () => <HeroSkeleton />,
});

const Features = dynamic(() => import("@/sections/Features"), {
  ssr: false,
  loading: () => <FeaturesSkeleton />,
});

const HowItWorks = dynamic(() => import("@/sections/HowItWorks"), {
  ssr: false,
  loading: () => <HowItWorksSkeleton />,
});

const Comparison = dynamic(() => import("@/sections/Comparison"), {
  ssr: false,
  loading: () => <ComparisonSkeleton />,
});

const UseCases = dynamic(() => import("@/sections/UseCases"), {
  ssr: false,
  loading: () => <UseCasesSkeleton />,
});

const Roles = dynamic(() => import("@/sections/Roles"), {
  ssr: false,
  loading: () => <RolesSkeleton />,
});

const Pricing = dynamic(() => import("@/sections/Pricing"), {
  ssr: false,
  loading: () => <PricingSkeleton />,
});

const FAQ = dynamic(() => import("@/sections/FAQ"), {
  ssr: false,
  loading: () => <FAQSkeleton />,
});

const CTA = dynamic(() => import("@/sections/CTA"), {
  ssr: false,
  loading: () => <CTASkeleton />,
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show all skeletons while loading
  if (!mounted) {
    return (
      <>
        <Navbar />
        <main>
          <HeroSkeleton />
          <FeaturesSkeleton />
          <HowItWorksSkeleton />
          <ComparisonSkeleton />
          <UseCasesSkeleton />
          <RolesSkeleton />
          <PricingSkeleton />
          <FAQSkeleton />
          <CTASkeleton />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Comparison />
        <UseCases />
        <Roles />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
"use client";

import { ReactNode } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollRestoration from "@/components/ScrollRestoration";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      {children}
      <ThemeToggle />
    </>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

const geist = Geist({ 
  variable: "--font-geist", 
  subsets: ["latin"] 
});

const geistMono = Geist_Mono({ 
  variable: "--font-geist-mono", 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "KoFund — Manage Community Funds Without WhatsApp Confusion",
  description:
    "KoFund helps communities, committees, clubs, events, and organizations manage contributions, expenses, members, and balances in one place.",
  icons: {
    icon: "/KoFund.png",
    apple: "/KoFund.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes" />
      </head>
      <body 
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new MutationObserver(() => {
      setDark(!document.body.classList.contains("light"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setDark(!document.body.classList.contains("light"));
    return () => observer.disconnect();
  }, []);

  const footerLinks = [
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Data Safety", href: "/data-safety" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Help & Support", href: "/support" },
        { name: "Delete Account", href: "/delete-account" },
      ]
    }
  ];

  const contactMethods = [
    {
      icon: <Mail size={16} />,
      label: "Email Support",
      value: "kofundapp@gmail.com",
      href: "mailto:kofundapp@gmail.com?subject=KoFund%20App%20Support&body=Hello%20KoFund%20Support%2C%0A%0AI%20need%20help%20with%3A",
    },
    {
      icon: <MessageCircle size={16} />,
      label: "WhatsApp Support",
      value: "+91 815 787 5032",
      href: "https://wa.me/918157875032?text=Hello%20KoFund%20Support%2C%20I%20need%20help%20with%3A",
    },
    {
      icon: <Phone size={16} />,
      label: "Phone Support",
      value: "+91 815 787 5032",
      href: "tel:+918157875032",
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      label: "Instagram",
      value: "@kofundapp",
      href: "https://instagram.com/kofundapp",
    },
  ];

  return (
    <footer 
      className="border-t py-12 px-4 sm:px-6"
      style={{ background: dark ? "#0B0E11" : "#ffffff", borderColor: dark ? "#1E2530" : "#e2e8f0" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand with Logo */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="rounded-xl p-1.5 flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-105"
                style={{ 
                  backgroundColor: "var(--color-primary)",
                }}
              >
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 96 90.59"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <polygon 
                    points="89.84 0 23.76 66.63 0 90.59 0 15.9 23.76 15.9 23.76 47.01 89.84 0" 
                    style={{ fill: "#052224" }}
                  />
                  <polygon 
                    points="84.66 90.59 52.18 90.59 31.7 69.71 48.04 53.24 84.66 90.59" 
                    style={{ fill: "#fff" }}
                  />
                  <polygon 
                    points="96 4.88 67.69 60.18 54.5 46.73 96 4.88" 
                    style={{ fill: "#fff" }}
                  />
                </svg>
              </div>
              <span 
                className="font-bold text-xl tracking-tight"
                style={{ color: dark ? "var(--color-dark-text-primary)" : "var(--color-light-text-primary)" }}
              >
                KoFund
              </span>
            </div>
            <p className="text-sm mt-2" style={{ color: dark ? "#6B7280" : "#64748b" }}>
              Simplify Community Finances
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-3 text-sm" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors"
                      style={{ color: dark ? "#6B7280" : "#64748b" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-3 text-sm" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              {contactMethods.map((method, index) => (
                <li key={index}>
                  <a 
                    href={method.href}
                    target={method.label === "Instagram" ? "_blank" : undefined}
                    rel={method.label === "Instagram" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
                    style={{ color: dark ? "#6B7280" : "#64748b" }}
                  >
                    <span className="transition-transform group-hover:scale-110 text-primary">
                      {method.icon}
                    </span>
                    <span>{method.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty div to maintain grid layout */}
          <div />
        </div>

        {/* Copyright */}
        <div 
          className="pt-8 text-center text-xs border-t"
          style={{ borderColor: dark ? "#1E2530" : "#e2e8f0", color: dark ? "#6B7280" : "#64748b" }}
        >
          <p>&copy; {new Date().getFullYear()} KoFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
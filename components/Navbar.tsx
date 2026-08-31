"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/editorial-board", label: "Editorial Board" },
  { href: "/author-guidelines", label: "Author Guidelines" },
  { href: "/current-issue", label: "Current Issue" },
  { href: "/archives", label: "Archives" },
  { href: "/peer-review-ethics", label: "Peer Review & Ethics" },
  { href: "/downloads", label: "Downloads" },
  { href: "/submission", label: "Submission" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF8]/95 backdrop-blur-md border-b border-[#E8D5B5] shadow-xs">
      {/* Top Banner / Masthead Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/jmn-logo.png"
            alt="JMN Journal of Medical Sciences Logo"
            className="w-10 h-10 object-contain shadow-sm group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="font-masthead text-2xl sm:text-3xl font-bold tracking-tight text-[#5B1E1E] block leading-tight">
              JMN Journal of Medical Sciences
            </span>
            <span className="text-xs tracking-wider uppercase text-stone-600 block">
              Official Biannual Peer-Reviewed Medical Journal · Est. 2025
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-[#5B1E1E]">
          <span className="bg-[#F5EFE6] px-3 py-1.5 rounded-full border border-[#E8D5B5]">
            Frequency: Biannual
          </span>
          <span className="bg-[#5B1E1E] text-white px-3 py-1.5 rounded-full shadow-xs">
            Open Access
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#5B1E1E] hover:bg-[#F5EFE6] rounded-md transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Maroon Accent Bar */}
      <div className="accent-line-maroon" />

      {/* Desktop Navigation Links */}
      <nav className="hidden md:block bg-[#F5EFE6]/60 border-b border-[#E8D5B5]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between space-x-1 overflow-x-auto py-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-xs lg:text-sm font-medium transition-colors whitespace-nowrap border-b-2 ${
                    isActive
                      ? "border-[#5B1E1E] text-[#5B1E1E] font-semibold"
                      : "border-transparent text-stone-700 hover:text-[#5B1E1E] hover:border-[#B8860B]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF8] border-b border-[#E8D5B5] px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-[#5B1E1E] text-white"
                    : "text-stone-800 hover:bg-[#F5EFE6] hover:text-[#5B1E1E]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

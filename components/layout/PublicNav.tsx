"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PublicNavProps {
  activePage?: string;
}

const navLinks = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Tenders (Bids)", href: "/bids" },
  { label: "OEM / Supply Chain", href: "/products-oem" },
  { label: "Investment & Opportunities", href: "/business-opportunity" },
  { label: "Seller Services", href: "/seller-services" },
];

export default function PublicNav({ activePage }: PublicNavProps) {
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/marketplace?q=${encodeURIComponent(query.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-xl border-b border-outline-variant/15 sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 md:px-8 py-3 max-w-[1920px] mx-auto">
          {/* Left: Logo + Hamburger */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-base md:text-lg">account_balance</span>
              </div>
              <span className="text-lg md:text-xl font-black tracking-tight text-primary uppercase font-headline">
                GovSeller
              </span>
            </Link>

            {/* Hamburger - mobile only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 hover:bg-surface-container rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface text-xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>

          {/* Center: Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  activePage === link.label
                    ? "text-primary font-semibold bg-primary/5 px-4 py-2 rounded-lg text-sm border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg text-sm font-medium transition-all border-b-2 border-transparent"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Login */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Login */}
            <Link
              href="/login"
              className="bg-primary text-white px-3 md:px-5 py-1.5 md:py-2 rounded-lg font-headline font-bold text-xs md:text-sm hover:bg-primary-container transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[53px] bottom-0 bg-white z-40 overflow-y-auto">
          {/* Mobile search */}
          <form onSubmit={handleSearch} className="m-4 flex items-center bg-surface-container px-3 py-2.5 rounded-lg border border-outline-variant/15 gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">search</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="bg-transparent border-none focus:ring-0 text-sm flex-1 text-on-surface outline-none placeholder:text-on-surface-variant/50"
            />
            <button type="submit" className="p-1 hover:bg-primary/10 rounded transition-colors">
              <span className="material-symbols-outlined text-primary text-lg">search</span>
            </button>
          </form>

          {/* Mobile nav links */}
          <nav className="flex flex-col px-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  activePage === link.label
                    ? "flex items-center gap-3 text-primary font-semibold bg-primary/5 px-4 py-3.5 rounded-lg text-sm"
                    : "flex items-center gap-3 text-on-surface hover:text-primary hover:bg-primary/5 px-4 py-3.5 rounded-lg text-sm font-medium transition-all"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile quick links */}
          <div className="mx-4 mt-4 pt-4 border-t border-outline-variant/15">
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold mb-3 px-4">Quick Links</p>
            <Link href="/#requirement-form" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-on-surface hover:bg-primary/5 rounded-lg">
              <span className="material-symbols-outlined text-secondary text-lg">edit_note</span>
              Post Requirement
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

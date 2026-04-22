"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PublicNavProps {
  activePage?: string;
}

const navLinks = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Bids", href: "/bids" },
  { label: "Execution support", href: "/execution-support" },
  { label: "Product & OEM", href: "/products-oem" },
  { label: "Tenders & Opportunities", href: "/tenders" },
  { label: "Seller Services", href: "/seller-services" },
];

export default function PublicNav({ activePage }: PublicNavProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/marketplace?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-outline-variant/15 flex justify-between items-center px-8 py-3.5 w-full max-w-[1920px] mx-auto top-0 sticky z-50">
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="flex items-center gap-2.5"
        >
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-lg">account_balance</span>
          </div>
          <span className="text-xl font-black tracking-tight text-primary uppercase font-headline">
            GovSeller
          </span>
        </Link>
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
      </div>

      <div className="flex items-center gap-3">
        <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-surface-container px-3.5 py-2 rounded-lg border border-outline-variant/15 gap-2">
          <span className="material-symbols-outlined text-on-surface-variant text-lg">search</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tenders, suppliers..."
            className="bg-transparent border-none focus:ring-0 text-sm w-56 text-on-surface outline-none placeholder:text-on-surface-variant/50"
          />
          <button type="submit" className="p-1 hover:bg-primary/10 rounded transition-colors">
            <span className="material-symbols-outlined text-primary text-lg">arrow_forward</span>
          </button>
        </form>
        <button className="p-2 hover:bg-surface-container transition-colors rounded-lg relative">
          <span className="material-symbols-outlined text-on-surface-variant text-xl">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full animate-pulse-dot" />
        </button>
        <Link
          href="/login"
          className="bg-primary text-white px-5 py-2 rounded-lg font-headline font-bold text-sm hover:bg-primary-container transition-colors"
        >
          Portal Access
        </Link>
      </div>
    </header>
  );
}

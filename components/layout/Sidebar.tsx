"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  icon: string;
  href: string;
}

interface SidebarProps {
  navItems: NavItem[];
  ctaLabel?: string;
}

export default function Sidebar({ navItems, ctaLabel = "New Procurement" }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-primary flex flex-col py-6 z-50">
      {/* Logo */}
      <div className="px-6 mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-white">account_balance</span>
          </div>
          <div>
            <h1 className="text-base font-black text-white leading-none font-headline">
              GovSeller
            </h1>
            <p className="text-[0.6rem] text-slate-300 uppercase tracking-widest mt-1">
              Government Authority
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive
                  ? "bg-surface text-primary rounded-l-full ml-4 pl-4 py-3 font-bold flex items-center gap-3 transition-all duration-200"
                  : "text-slate-300 hover:text-white px-8 py-3 flex items-center gap-3 hover:bg-primary-container transition-all duration-200"
              }
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-xs uppercase tracking-wider font-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-8 mt-auto pt-6 border-t border-white/10 space-y-4">
        <button className="w-full bg-secondary-container text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-secondary/20 hover:scale-105 transition-transform font-headline">
          {ctaLabel}
        </button>
        <div className="space-y-2 pb-4">
          <a
            href="#"
            className="flex items-center gap-3 text-slate-300 text-xs hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm">description</span>
            Documentation
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-slate-300 text-xs hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            Log Out
          </a>
        </div>
      </div>
    </aside>
  );
}

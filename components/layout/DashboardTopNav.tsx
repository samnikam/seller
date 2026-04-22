interface DashboardTopNavProps {
  role: string;
  department: string;
}

export default function DashboardTopNav({ role, department }: DashboardTopNavProps) {
  return (
    <header className="flex justify-between items-center px-8 h-16 w-full bg-primary sticky top-0 z-40 shadow-lg shadow-on-background/10">
      {/* Search + Nav links */}
      <div className="flex items-center gap-8">
        <div className="relative w-64 group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            search
          </span>
          <input
            type="text"
            placeholder="Search Marketplace..."
            className="w-full bg-white/10 border-none rounded-xl py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:ring-2 focus:ring-secondary-container outline-none"
          />
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-white border-b-2 border-secondary-container pb-1 text-xs font-bold uppercase tracking-wider">
            Marketplace
          </a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
            Guidelines
          </a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
            Support
          </a>
        </nav>
      </div>

      {/* Right: actions + user */}
      <div className="flex items-center gap-6">
        <button className="text-white relative hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary-container rounded-full" />
        </button>
        <button className="text-white hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <div className="flex items-center gap-3 border-l border-white/10 pl-6">
          <div className="text-right">
            <p className="text-xs font-bold text-white">{department}</p>
            <p className="text-[10px] text-slate-300">{role}</p>
          </div>
          <div className="w-8 h-8 rounded-xl bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-sm">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

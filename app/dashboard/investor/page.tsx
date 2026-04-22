import DashboardLayout from "@/components/layout/DashboardLayout";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard/investor" },
  { label: "Portfolio", icon: "pie_chart", href: "/dashboard/investor/portfolio" },
  { label: "Opportunities", icon: "trending_up", href: "/dashboard/investor/opportunities" },
  { label: "Ledger", icon: "receipt_long", href: "/dashboard/investor/ledger" },
  { label: "Reports", icon: "bar_chart", href: "/dashboard/investor/reports" },
  { label: "Settings", icon: "settings", href: "/dashboard/investor/settings" },
];

const portfolio = [
  { category: "IT Infrastructure", allocation: "34%", value: "$4.2M", change: "+8.4%", positive: true },
  { category: "Medical Supply Chain", allocation: "28%", value: "$3.5M", change: "+12.1%", positive: true },
  { category: "Logistics & Transport", allocation: "22%", value: "$2.7M", change: "-1.2%", positive: false },
  { category: "Construction", allocation: "16%", value: "$2.0M", change: "+4.8%", positive: true },
];

const opportunities = [
  {
    title: "National Health Mission Supply Contract",
    type: "Healthcare / Medical",
    size: "$18M",
    roi: "14.2% IRR",
    risk: "Low",
    riskColor: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  {
    title: "Smart City Infrastructure Phase III",
    type: "Urban Development",
    size: "$42M",
    roi: "11.8% IRR",
    risk: "Medium",
    riskColor: "bg-secondary-fixed text-on-secondary-fixed",
  },
  {
    title: "Defence Equipment Modernization",
    type: "Defence / Industrial",
    size: "$95M",
    roi: "18.5% IRR",
    risk: "High",
    riskColor: "bg-error-container text-on-error-container",
  },
];

const ledger = [
  { date: "Jan 14, 2025", description: "Medical Supply — Tranche 2 Disbursement", amount: "+$420,000", type: "credit" },
  { date: "Jan 10, 2025", description: "IT Infrastructure — Return Distribution", amount: "+$184,000", type: "credit" },
  { date: "Jan 05, 2025", description: "Logistics Contract — Capital Deployment", amount: "-$700,000", type: "debit" },
  { date: "Dec 28, 2024", description: "Healthcare Supply Chain — ROI Payment", amount: "+$318,000", type: "credit" },
];

export default function InvestorDashboard() {
  return (
    <DashboardLayout
      navItems={navItems}
      role="Institutional Investor"
      department="GovSeller Capital"
      ctaLabel="New Investment"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-primary tracking-tight font-headline">
              Investment Portfolio
            </h2>
            <p className="text-on-surface-variant font-body">Q3 2025 · GovSeller Capital Desk</p>
          </div>
          <div className="bg-surface-container-high px-6 py-4 rounded-xl">
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Total Portfolio AUM</p>
            <p className="text-3xl font-black text-primary font-headline">$12.4M</p>
            <p className="text-xs text-on-tertiary-fixed-variant font-bold">+9.8% this quarter</p>
          </div>
        </div>

        {/* ROI Performance + Portfolio breakdown */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-black text-primary font-headline">ROI Performance</h3>
                <p className="text-sm text-on-surface-variant mt-1">Trailing 12-month returns vs benchmark</p>
              </div>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded text-xs font-bold uppercase">
                Outperforming
              </span>
            </div>
            {/* Simulated bar chart */}
            <div className="space-y-3">
              {[
                { month: "Jul", portfolio: 85, benchmark: 72 },
                { month: "Aug", portfolio: 88, benchmark: 75 },
                { month: "Sep", portfolio: 76, benchmark: 71 },
                { month: "Oct", portfolio: 92, benchmark: 78 },
                { month: "Nov", portfolio: 95, benchmark: 80 },
                { month: "Dec", portfolio: 98, benchmark: 82 },
                { month: "Jan", portfolio: 100, benchmark: 84 },
              ].map((bar) => (
                <div key={bar.month} className="flex items-center gap-4">
                  <span className="text-[11px] font-bold text-on-surface-variant w-8">{bar.month}</span>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${bar.portfolio}%` }} />
                    </div>
                    <div className="h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                      <div className="h-full bg-outline-variant rounded-full" style={{ width: `${bar.benchmark}%` }} />
                    </div>
                  </div>
                  <span className="text-xs font-black text-primary font-headline w-8">{bar.portfolio}%</span>
                </div>
              ))}
            </div>
            <div className="flex gap-6 text-xs">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-primary rounded" /><span className="text-on-surface-variant">Portfolio</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-outline-variant rounded" /><span className="text-on-surface-variant">Benchmark</span></div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-6">
            <h3 className="text-xl font-black text-primary font-headline">Portfolio Breakdown</h3>
            <div className="space-y-4">
              {portfolio.map((item) => (
                <div key={item.category} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-on-surface">{item.category}</span>
                    <div className="text-right">
                      <span className="text-sm font-black text-primary font-headline">{item.value}</span>
                      <span className={`text-xs ml-2 font-bold ${item.positive ? "text-on-tertiary-fixed-variant" : "text-secondary"}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: item.allocation }} />
                  </div>
                  <span className="text-[10px] text-on-surface-variant">{item.allocation} of portfolio</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunities */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
            <span className="material-symbols-outlined">trending_up</span>
            Emerging Opportunities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
              <div key={opp.title} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{opp.type}</span>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${opp.riskColor}`}>{opp.risk} Risk</span>
                </div>
                <h4 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors font-headline">{opp.title}</h4>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Deal Size</p>
                    <p className="text-xl font-black text-primary font-headline">{opp.size}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Projected ROI</p>
                    <p className="text-xl font-black text-on-tertiary-fixed-variant font-headline">{opp.roi}</p>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-container transition-colors">
                  Request Prospectus
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Ledger */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
            <span className="material-symbols-outlined">receipt_long</span>
            Portfolio Ledger
          </h3>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <table className="w-full border-separate border-spacing-y-2 p-4">
              <thead>
                <tr className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  {["Date", "Description", "Amount"].map((h) => (
                    <th key={h} className="text-left pb-3 px-4 font-headline">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ledger.map((entry) => (
                  <tr key={entry.date + entry.description} className="bg-surface-container-low hover:shadow-md transition-all">
                    <td className="px-4 py-3 rounded-l-xl text-xs text-on-surface-variant font-mono">{entry.date}</td>
                    <td className="px-4 py-3 text-sm font-medium text-on-surface">{entry.description}</td>
                    <td className={`px-4 py-3 rounded-r-xl text-sm font-black font-headline ${entry.type === "credit" ? "text-on-tertiary-fixed-variant" : "text-secondary"}`}>
                      {entry.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

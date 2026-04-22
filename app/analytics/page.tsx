import PublicNav from "@/components/layout/PublicNav";

const sectorData = [
  { sector: "IT & Cybersecurity", volume: "$284M", share: 78, contracts: 312, trend: "+14.2%", positive: true },
  { sector: "Medical & Healthcare", volume: "$218M", share: 60, contracts: 248, trend: "+22.8%", positive: true },
  { sector: "Infrastructure & Civil", volume: "$412M", share: 100, contracts: 184, trend: "+8.1%", positive: true },
  { sector: "Logistics & Transport", volume: "$196M", share: 53, contracts: 142, trend: "-3.4%", positive: false },
  { sector: "Defence & Security", volume: "$348M", share: 89, contracts: 96, trend: "+11.5%", positive: true },
  { sector: "Office & Services", volume: "$84M", share: 24, contracts: 204, trend: "+2.2%", positive: true },
];

const monthlyData = [
  { month: "Aug", volume: 62, count: 98 },
  { month: "Sep", volume: 78, count: 112 },
  { month: "Oct", volume: 71, count: 104 },
  { month: "Nov", volume: 88, count: 128 },
  { month: "Dec", volume: 94, count: 136 },
  { month: "Jan", volume: 100, count: 148 },
];

const topMinistries = [
  { name: "Ministry of Infrastructure", value: "$412M", pct: "29.4%", contracts: 184 },
  { name: "Ministry of Defence", value: "$348M", pct: "24.8%", contracts: 96 },
  { name: "Ministry of IT", value: "$284M", pct: "20.3%", contracts: 312 },
  { name: "Ministry of Health", value: "$218M", pct: "15.6%", contracts: 248 },
  { name: "Others", value: "$138M", pct: "9.9%", contracts: 346 },
];

const geographicData = [
  { region: "North India", states: "Delhi, UP, Haryana, Punjab", volume: "$388M", share: 72 },
  { region: "South India", states: "Karnataka, TN, Andhra, Kerala", volume: "$312M", share: 58 },
  { region: "West India", states: "Maharashtra, Gujarat, Rajasthan", volume: "$278M", share: 52 },
  { region: "East India", states: "WB, Odisha, Bihar, Jharkhand", volume: "$194M", share: 36 },
  { region: "Central India", states: "MP, Chhattisgarh", volume: "$128M", share: 24 },
  { region: "North-East India", states: "7 Sisters", volume: "$98M", share: 18 },
];

const platformStats = [
  { label: "Total Platform Volume", value: "$42.8B", sub: "FY 2024-25", icon: "payments" },
  { label: "Active Vendors", value: "12,418", sub: "KYC verified", icon: "storefront" },
  { label: "Govt. Departments", value: "152", sub: "across all ministries", icon: "account_balance" },
  { label: "Avg. Tender Value", value: "$1.2M", sub: "this quarter", icon: "trending_up" },
  { label: "Transparency Score", value: "99.9%", sub: "DPIIT rated", icon: "verified" },
  { label: "Dispute Rate", value: "0.28%", sub: "industry low", icon: "policy" },
];

export default function AnalyticsPage() {
  return (
    <div className="bg-surface text-on-background min-h-screen">
      <PublicNav activePage="Analytics" />

      {/* ── Hero strip ── */}
      <section className="bg-primary py-12 px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-secondary-container text-xs font-bold uppercase tracking-widest mb-2">
                Public Transparency Dashboard
              </p>
              <h1 className="text-4xl font-black text-white font-headline">
                Platform Analytics
              </h1>
              <p className="text-on-primary-container mt-2 text-sm max-w-xl">
                Real-time fiscal data, procurement volume, and vendor performance metrics —
                published in the public interest under the RTI Act 2005.
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-on-primary-container uppercase tracking-wider">Last Updated</p>
              <p className="text-white font-bold text-sm">Jan 22, 2025 · 09:00 IST</p>
              <p className="text-[10px] text-on-primary-container mt-1">Auto-refresh every 6 hours</p>
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {platformStats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 space-y-1">
                <span className="material-symbols-outlined text-secondary-container text-lg">{s.icon}</span>
                <p className="text-2xl font-black text-white font-headline">{s.value}</p>
                <p className="text-[10px] text-on-primary-container uppercase tracking-wider leading-tight">{s.label}</p>
                <p className="text-[10px] text-on-primary-container/60">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-[1920px] mx-auto px-8 py-10 space-y-10">

        {/* ── Monthly volume trend ── */}
        <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-black text-primary font-headline">Monthly Procurement Volume</h2>
              <p className="text-sm text-on-surface-variant mt-1">Trailing 6 months · All departments combined</p>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded" />
                <span className="text-on-surface-variant">Volume (₹ Cr)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary-fixed rounded" />
                <span className="text-on-surface-variant">Contract Count</span>
              </div>
            </div>
          </div>
          <div className="flex items-end gap-4 h-48">
            {monthlyData.map((m) => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end gap-1 h-36">
                  <div
                    className="flex-1 bg-primary rounded-t-lg transition-all hover:bg-primary-container cursor-pointer"
                    style={{ height: `${m.volume}%` }}
                    title={`Volume index: ${m.volume}`}
                  />
                  <div
                    className="flex-1 bg-secondary-fixed rounded-t-lg transition-all hover:bg-secondary-fixed-dim cursor-pointer"
                    style={{ height: `${m.count}%` }}
                    title={`Contract count: ${m.count}`}
                  />
                </div>
                <span className="text-xs font-bold text-on-surface-variant">{m.month}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-12 gap-8">
          {/* ── Sector breakdown ── */}
          <section className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-black text-primary font-headline">Procurement by Sector</h2>
              <p className="text-sm text-on-surface-variant mt-1">FY 2024-25 · Top 6 sectors by contract value</p>
            </div>
            <div className="space-y-5">
              {sectorData.map((s) => (
                <div key={s.sector} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-on-surface">{s.sector}</span>
                      <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">
                        {s.contracts} contracts
                      </span>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <span className={`text-xs font-bold ${s.positive ? "text-on-tertiary-fixed-variant" : "text-secondary"}`}>
                        {s.trend}
                      </span>
                      <span className="text-sm font-black text-primary font-headline">{s.volume}</span>
                    </div>
                  </div>
                  <div className="h-2.5 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${s.share}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Ministry breakdown ── */}
          <section className="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-xl p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-black text-primary font-headline">Top Ministries</h2>
              <p className="text-sm text-on-surface-variant mt-1">By total contract value awarded</p>
            </div>
            <div className="space-y-4">
              {topMinistries.map((m, i) => (
                <div key={m.name} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black font-headline flex-shrink-0 ${
                    i === 0 ? "bg-primary text-white" :
                    i === 1 ? "bg-primary-container text-white" :
                    "bg-surface-container-high text-primary"
                  }`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-on-surface truncate">{m.name}</p>
                    <div className="h-1.5 bg-surface-container-low rounded-full mt-1.5 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: m.pct }}
                      />
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-black text-primary font-headline">{m.value}</p>
                    <p className="text-[10px] text-on-surface-variant">{m.pct}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Geographic distribution ── */}
        <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-black text-primary font-headline">Geographic Distribution</h2>
              <p className="text-sm text-on-surface-variant mt-1">Procurement volume by region · FY 2024-25</p>
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest hover:underline cursor-pointer">
              View State-wise →
            </span>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {geographicData.map((r) => (
              <div key={r.region} className="bg-surface-container-low rounded-xl p-5 space-y-3 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-on-surface font-headline">{r.region}</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">{r.states}</p>
                  </div>
                  <p className="text-lg font-black text-primary font-headline">{r.volume}</p>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${r.share}%` }} />
                </div>
                <p className="text-[10px] text-on-surface-variant">{r.share}% of total platform volume</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Transparency metrics ── */}
        <section className="bg-primary rounded-xl p-8 space-y-6">
          <h2 className="text-xl font-black text-white font-headline">Accountability Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Avg. Tender-to-Award Days", value: "18.4 days", sub: "Industry avg: 42 days", icon: "schedule" },
              { label: "e-Procurement Adoption", value: "98.7%", sub: "of all departments", icon: "cloud_done" },
              { label: "Vendor Dispute Rate", value: "0.28%", sub: "vs 1.8% industry avg", icon: "policy" },
              { label: "RTI Requests Fulfilled", value: "100%", sub: "within 30 days", icon: "task_alt" },
            ].map((m) => (
              <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="material-symbols-outlined text-secondary-container">{m.icon}</span>
                <p className="text-2xl font-black text-white font-headline">{m.value}</p>
                <p className="text-[11px] text-on-primary-container uppercase tracking-wider">{m.label}</p>
                <p className="text-[10px] text-on-primary-container/60">{m.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data export */}
        <section className="bg-surface-container-low rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-on-surface font-headline">Download Raw Data</h3>
            <p className="text-sm text-on-surface-variant mt-1">
              All procurement data is available for download under the Open Government Data policy.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {["CSV", "JSON", "PDF Report"].map((fmt) => (
              <button
                key={fmt}
                className="text-[10px] font-bold text-primary border border-primary/20 px-5 py-2.5 rounded-xl uppercase tracking-widest hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                {fmt}
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-8 bg-surface-container-low py-8 px-8">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest">
            © 2025 GovSeller · Data published under Open Government Data Policy v2.0
          </p>
          <div className="flex gap-6">
            {["Privacy", "RTI Portal", "Data Policy", "Support"].map((link) => (
              <a key={link} href="#" className="text-[10px] text-on-surface-variant/60 hover:text-primary uppercase tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

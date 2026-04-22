import DashboardLayout from "@/components/layout/DashboardLayout";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard/admin" },
  { label: "Users", icon: "manage_accounts", href: "/dashboard/admin/users" },
  { label: "Tenders", icon: "gavel", href: "/dashboard/admin/tenders" },
  { label: "KYC Queue", icon: "verified_user", href: "/dashboard/admin/kyc" },
  { label: "Disputes", icon: "policy", href: "/dashboard/admin/disputes" },
  { label: "Reports", icon: "bar_chart", href: "/dashboard/admin/reports" },
  { label: "Settings", icon: "settings", href: "/dashboard/admin/settings" },
];

const platformStats = [
  { label: "Platform Volume", value: "$42.8M", sub: "+11.2% MoM", icon: "payments", borderColor: "border-primary", positive: true },
  { label: "Active Tenders", value: "1,402", sub: "38 closing today", icon: "gavel", borderColor: "border-primary", positive: true },
  { label: "KYC Pending", value: "89", sub: "14 urgent", icon: "pending_actions", borderColor: "border-secondary-container", positive: false },
  { label: "Open Disputes", value: "4", sub: "Requires arbitration", icon: "policy", borderColor: "border-error", positive: false },
];

const kycQueue = [
  { org: "BharatTech Solutions Pvt. Ltd.", type: "OEM Manufacturer", submitted: "Jan 20, 2025", docs: 4, risk: "Low", riskColor: "bg-tertiary-fixed text-on-tertiary-fixed" },
  { org: "NexGen Logistics India", type: "Logistics Vendor", submitted: "Jan 19, 2025", docs: 3, risk: "Medium", riskColor: "bg-secondary-fixed text-on-secondary-fixed" },
  { org: "GovSeller Medical Supplies", type: "Healthcare Vendor", submitted: "Jan 18, 2025", docs: 6, risk: "Low", riskColor: "bg-tertiary-fixed text-on-tertiary-fixed" },
  { org: "InfraCore Engineering", type: "Construction OEM", submitted: "Jan 17, 2025", docs: 2, risk: "High", riskColor: "bg-error-container text-on-error-container" },
];

const recentTenders = [
  { id: "TR-99421", ministry: "Ministry of Health", value: "$4.2M", bids: 14, status: "Open", statusColor: "bg-tertiary-fixed text-on-tertiary-fixed" },
  { id: "TR-88120", ministry: "Ministry of Defence", value: "$28.0M", bids: 6, status: "Evaluation", statusColor: "bg-secondary-fixed text-on-secondary-fixed" },
  { id: "TR-77081", ministry: "Ministry of Transport", value: "$6.2M", bids: 21, status: "Open", statusColor: "bg-tertiary-fixed text-on-tertiary-fixed" },
  { id: "TR-66045", ministry: "Ministry of IT", value: "$1.8M", bids: 9, status: "Awarded", statusColor: "bg-surface-container-high text-on-surface-variant" },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout
      navItems={navItems}
      role="Super Administrator"
      department="GovSeller"
      ctaLabel="System Actions"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-primary tracking-tight font-headline">
              Platform Command Center
            </h2>
            <p className="text-on-surface-variant font-body">Q3 2025 · GovSeller Super Admin</p>
          </div>
          <div className="flex gap-3">
            <select className="bg-surface-container-high border-none rounded-xl px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-primary outline-none font-label">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>This Year</option>
            </select>
            <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 font-headline">
              <span className="material-symbols-outlined text-sm">download</span> Export
            </button>
          </div>
        </div>

        {/* Platform stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platformStats.map((stat) => (
            <div key={stat.label} className={`bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 ${stat.borderColor} hover:shadow-lg transition-all`}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest font-headline">{stat.label}</p>
                <span className="material-symbols-outlined text-primary/30 text-lg">{stat.icon}</span>
              </div>
              <p className="text-3xl font-black text-on-surface font-headline">{stat.value}</p>
              <p className={`text-xs font-bold mt-1 ${stat.positive ? "text-on-tertiary-fixed-variant" : "text-secondary"}`}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* KYC Queue */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined">verified_user</span>
                KYC Verification Queue
              </h3>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded text-xs font-bold">
                89 Pending
              </span>
            </div>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
              <table className="w-full border-separate border-spacing-y-2 p-4">
                <thead>
                  <tr className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {["Organization", "Type", "Submitted", "Docs", "Risk", "Action"].map((h) => (
                      <th key={h} className="text-left pb-3 px-3 font-headline">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {kycQueue.map((row) => (
                    <tr key={row.org} className="bg-surface-container-low hover:shadow-md transition-all">
                      <td className="px-3 py-3 rounded-l-xl font-bold text-on-surface text-sm">{row.org}</td>
                      <td className="px-3 py-3 text-xs text-on-surface-variant">{row.type}</td>
                      <td className="px-3 py-3 text-xs text-on-surface-variant font-mono">{row.submitted}</td>
                      <td className="px-3 py-3 text-sm font-bold text-primary font-headline">{row.docs}</td>
                      <td className="px-3 py-3">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${row.riskColor}`}>
                          {row.risk}
                        </span>
                      </td>
                      <td className="px-3 py-3 rounded-r-xl">
                        <button className="text-[10px] font-bold text-white bg-primary px-3 py-1.5 rounded-lg uppercase tracking-widest hover:bg-primary-container transition-colors">
                          Review
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Platform Health */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
              <span className="material-symbols-outlined">monitoring</span>
              Platform Health
            </h3>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-5">
              {[
                { label: "Tender Success Rate", value: "94.2%", fill: 94 },
                { label: "Vendor Compliance", value: "87.8%", fill: 88 },
                { label: "Payment Settlement", value: "99.1%", fill: 99 },
                { label: "Dispute Resolution", value: "78.4%", fill: 78 },
              ].map((metric) => (
                <div key={metric.label} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-on-surface">{metric.label}</span>
                    <span className="text-sm font-black text-primary font-headline">{metric.value}</span>
                  </div>
                  <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${metric.fill}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dispute alerts */}
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline mt-2">
              <span className="material-symbols-outlined">policy</span>
              Open Disputes
            </h3>
            <div className="space-y-3">
              {[
                { id: "DSP-0041", parties: "InfoSys vs Ministry of IT", issue: "Delivery timeline breach", severity: "High" },
                { id: "DSP-0039", parties: "NexGen vs Ministry of Transport", issue: "Quality non-compliance", severity: "Medium" },
              ].map((dispute) => (
                <div key={dispute.id} className="bg-error-container/30 p-4 rounded-xl flex items-start gap-3">
                  <span className="material-symbols-outlined text-error mt-0.5">error_outline</span>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-xs font-bold text-on-surface font-headline">{dispute.id} · {dispute.parties}</p>
                    <p className="text-[11px] text-on-surface-variant">{dispute.issue}</p>
                  </div>
                  <button className="text-[10px] font-bold text-error uppercase tracking-wider hover:underline flex-shrink-0">
                    Arbitrate
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tender oversight */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
            <span className="material-symbols-outlined">gavel</span>
            Active Tender Registry
          </h3>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <table className="w-full border-separate border-spacing-y-2 p-4">
              <thead>
                <tr className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  {["Tender ID", "Ministry", "Value", "Total Bids", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left pb-3 px-4 font-headline">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentTenders.map((row) => (
                  <tr key={row.id} className="bg-surface-container-low hover:shadow-md transition-all">
                    <td className="px-4 py-3 rounded-l-xl text-[11px] font-mono text-on-surface-variant">{row.id}</td>
                    <td className="px-4 py-3 font-bold text-on-surface text-sm">{row.ministry}</td>
                    <td className="px-4 py-3 font-black text-primary text-sm font-headline">{row.value}</td>
                    <td className="px-4 py-3 text-sm text-on-surface-variant">{row.bids} bids</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 rounded-r-xl flex gap-2">
                      <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">
                        View
                      </button>
                      <button className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:underline">
                        Audit
                      </button>
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

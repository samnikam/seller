import DashboardLayout from "@/components/layout/DashboardLayout";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard/buyer" },
  { label: "Tenders", icon: "gavel", href: "/dashboard/buyer/tenders" },
  { label: "Inventory", icon: "inventory_2", href: "/dashboard/buyer/inventory" },
  { label: "Analytics", icon: "monitoring", href: "/dashboard/buyer/analytics" },
  { label: "KYC", icon: "verified_user", href: "/dashboard/buyer/kyc" },
  { label: "Settings", icon: "settings", href: "/dashboard/buyer/settings" },
];

const tenders = [
  {
    ref: "#TR-99421-2023",
    status: "Active",
    statusColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    borderColor: "border-secondary-container",
    title: "Infrastructure Modernization: Phase IV Cloud Expansion",
    desc: "Procurement of scalable server architecture and secure networking for municipal data centers.",
    amount: "$420,000",
    closing: "Closing in 4 days",
  },
  {
    ref: "#TR-88120-2023",
    status: "Evaluation",
    statusColor: "bg-secondary-fixed text-on-secondary-fixed",
    borderColor: "border-outline-variant/30",
    title: "Emergency Fleet Vehicle Acquisition",
    desc: "Supply of 15 fully equipped rapid response medical units with telematics integration.",
    amount: "$1.85M",
    closing: "Closed Jan 14",
  },
  {
    ref: "#TR-77081-2023",
    status: "Active",
    statusColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    borderColor: "border-secondary-container",
    title: "State-Wide Broadband Infrastructure Tender",
    desc: "Optical fibre rollout across 14 districts with BSNL interoperability requirements.",
    amount: "$6.2M",
    closing: "Closing in 12 days",
  },
];

export default function BuyerDashboard() {
  return (
    <DashboardLayout
      navItems={navItems}
      role="Procurement Officer"
      department="Min. of Commerce"
      ctaLabel="New Procurement"
    >
      <div className="space-y-8">
        {/* ── Header ── */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-primary tracking-tight font-headline">
              Executive Overview
            </h2>
            <p className="text-on-surface-variant font-body">
              Fiscal Quarter Q3 — Administrative Procurement Hub
            </p>
          </div>
          <div className="flex gap-4">
            {[
              { label: "Active Budget", value: "$14.2M", sub: "+2.4%", subColor: "text-on-tertiary-fixed-variant" },
              { label: "Pending Approvals", value: "18", sub: "Critical", subColor: "text-secondary" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-container-high px-6 py-3 rounded-xl">
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="text-xl font-black text-on-surface font-headline">
                  {stat.value}{" "}
                  <span className={`text-xs font-normal ${stat.subColor}`}>{stat.sub}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Bento Grid ── */}
        <div className="grid grid-cols-12 gap-6">
          {/* Active Tenders */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined">gavel</span>
                Active Tenders
              </h3>
              <button className="text-xs font-bold text-primary uppercase tracking-wider hover:underline">
                View All Tenders
              </button>
            </div>

            <div className="space-y-4">
              {tenders.map((tender) => (
                <div
                  key={tender.ref}
                  className={`bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all group border-l-4 ${tender.borderColor}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2 py-0.5 ${tender.statusColor} text-[10px] font-bold rounded uppercase tracking-tighter`}
                        >
                          {tender.status}
                        </span>
                        <span className="text-[10px] text-on-surface-variant font-mono">
                          REF: {tender.ref}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors font-headline">
                        {tender.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant">{tender.desc}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-xl font-black text-primary font-headline">{tender.amount}</p>
                      <p className="text-xs text-on-surface-variant">{tender.closing}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-outline-variant/10">
                    <div className="flex -space-x-2">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-primary-container border-2 border-white flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined text-white text-[10px]">person</span>
                        </div>
                      ))}
                      <div className="w-6 h-6 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center text-[8px] font-bold text-primary">
                        +12
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-[10px] font-bold text-primary-fixed-dim uppercase tracking-widest px-3 py-1.5 rounded-lg border border-primary/10 hover:bg-primary-container hover:text-white transition-colors">
                        Audit Trail
                      </button>
                      <button className="text-[10px] font-bold text-white bg-primary-container uppercase tracking-widest px-4 py-1.5 rounded-lg hover:bg-primary transition-colors">
                        Evaluate Bids
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Post New Tender form */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-surface-container-high p-8 rounded-xl sticky top-24 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-primary flex items-center gap-3 font-headline">
                <span className="material-symbols-outlined text-secondary-container">add_circle</span>
                Post New Tender
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Tender Reference ID", placeholder: "TR-00000-YYYY", type: "text" },
                  { label: "Department / Ministry", placeholder: "Select Department", type: "text" },
                  { label: "Category of Goods", placeholder: "e.g. IT Hardware", type: "text" },
                  { label: "Estimated Value (₹)", placeholder: "e.g. 12,00,000", type: "number" },
                  { label: "Submission Deadline", placeholder: "", type: "date" },
                ].map((field) => (
                  <div key={field.label} className="space-y-1.5">
                    <label className="text-[11px] font-headline font-bold text-primary uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary rounded-xl px-4 py-2.5 text-sm outline-none placeholder:text-slate-400"
                    />
                  </div>
                ))}
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform font-headline">
                Submit Tender
              </button>
            </div>
          </div>
        </div>

        {/* ── L1 Comparison Table ── */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
            <span className="material-symbols-outlined">compare</span>
            L1 Comparison Matrix
          </h3>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <table className="w-full border-separate border-spacing-y-2 p-4">
              <thead>
                <tr className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  {["Vendor", "Bid Value", "Delivery Days", "Compliance Score", "Status", "Action"].map((h) => (
                    <th key={h} className="text-left pb-3 px-4 font-headline">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { vendor: "Infosys Ltd.", bid: "$398,000", days: "21", score: "97%", status: "L1 Candidate", statusColor: "bg-tertiary-fixed text-on-tertiary-fixed" },
                  { vendor: "TCS Enterprise", bid: "$411,000", days: "18", score: "94%", status: "Shortlisted", statusColor: "bg-secondary-fixed text-on-secondary-fixed" },
                  { vendor: "Wipro GovTech", bid: "$425,000", days: "25", score: "91%", status: "Under Review", statusColor: "bg-surface-container-high text-on-surface-variant" },
                ].map((row) => (
                  <tr key={row.vendor} className="bg-surface-container-low rounded-xl hover:shadow-md transition-all">
                    <td className="px-4 py-3 rounded-l-xl">
                      <span className="font-bold text-on-surface text-sm">{row.vendor}</span>
                    </td>
                    <td className="px-4 py-3 font-black text-primary text-sm font-headline">{row.bid}</td>
                    <td className="px-4 py-3 text-sm text-on-surface-variant">{row.days} days</td>
                    <td className="px-4 py-3 text-sm font-bold text-on-surface">{row.score}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 rounded-r-xl">
                      <button className="text-[10px] font-bold text-primary uppercase tracking-wider hover:underline">
                        View Full Bid
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

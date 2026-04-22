import DashboardLayout from "@/components/layout/DashboardLayout";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard/oem" },
  { label: "Catalog", icon: "category", href: "/dashboard/oem/catalog" },
  { label: "Orders", icon: "local_shipping", href: "/dashboard/oem/orders" },
  { label: "Partners", icon: "handshake", href: "/dashboard/oem/partners" },
  { label: "Distribution", icon: "public", href: "/dashboard/oem/distribution" },
  { label: "Settings", icon: "settings", href: "/dashboard/oem/settings" },
];

const stats = [
  { label: "Active Orders", value: "1,284", icon: "shopping_bag", border: "border-primary" },
  { label: "Pending Approvals", value: "42", icon: "pending_actions", border: "border-secondary-container" },
  { label: "Quarterly Revenue", value: "$4.2M", icon: "payments", border: "border-primary" },
  { label: "Catalog Health", value: "98.2%", icon: "health_and_safety", border: "border-tertiary-fixed" },
];

const supplyTracking = [
  { orderId: "ORD-29841", product: "Dell PowerEdge R750", qty: 48, status: "In Transit", statusColor: "bg-secondary-fixed text-on-secondary-fixed", eta: "Jan 26" },
  { orderId: "ORD-29612", product: "Cisco Catalyst 9300", qty: 12, status: "Delivered", statusColor: "bg-tertiary-fixed text-on-tertiary-fixed", eta: "Jan 19" },
  { orderId: "ORD-29504", product: "ICU Patient Monitor", qty: 6, status: "Processing", statusColor: "bg-surface-container-high text-on-surface-variant", eta: "Feb 2" },
];

const partnerRequests = [
  { company: "Infosys Government BU", type: "Reseller Partner", region: "North India", status: "Pending Review" },
  { company: "TCS Smart Cities", type: "System Integrator", region: "Pan India", status: "Pending Review" },
];

export default function OEMDashboard() {
  return (
    <DashboardLayout
      navItems={navItems}
      role="OEM Manufacturer"
      department="GovSeller"
      ctaLabel="Add New Product"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-primary tracking-tight font-headline">
              Manufacturer Operations
            </h2>
            <p className="text-on-surface-variant font-body">Q3 2025 · OEM Control Center</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-colors font-headline">
              Bulk Upload
            </button>
            <button className="bg-surface-container-high text-primary px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-surface-container-highest transition-colors font-headline">
              Add Single Product
            </button>
          </div>
        </div>

        {/* Stats bento */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className={`bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 ${stat.border} hover:shadow-lg transition-all`}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest font-headline">{stat.label}</p>
                <span className="material-symbols-outlined text-primary/30 text-lg">{stat.icon}</span>
              </div>
              <p className="text-3xl font-black text-on-surface font-headline">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Supply tracking + Catalog sync */}
        <div className="grid grid-cols-12 gap-6">
          {/* Supply tracking table */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
              <span className="material-symbols-outlined">local_shipping</span> Live Supply Tracking
            </h3>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
              <table className="w-full border-separate border-spacing-y-2 p-4">
                <thead>
                  <tr className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {["Order ID", "Product", "Qty", "ETA", "Status"].map((h) => (
                      <th key={h} className="text-left pb-3 px-3 font-headline">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {supplyTracking.map((row) => (
                    <tr key={row.orderId} className="bg-surface-container-low hover:shadow-md transition-all">
                      <td className="px-3 py-3 rounded-l-xl text-[10px] font-mono text-on-surface-variant">{row.orderId}</td>
                      <td className="px-3 py-3 font-bold text-on-surface text-sm">{row.product}</td>
                      <td className="px-3 py-3 text-sm text-on-surface-variant">{row.qty} units</td>
                      <td className="px-3 py-3 text-sm font-bold text-on-surface">{row.eta}</td>
                      <td className="px-3 py-3 rounded-r-xl">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${row.statusColor}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Partner Connection Requests */}
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline mt-6">
              <span className="material-symbols-outlined">handshake</span> Partner Requests
            </h3>
            <div className="space-y-4">
              {partnerRequests.map((req) => (
                <div key={req.company} className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex items-center justify-between hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-sm">corporate_fare</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface text-sm">{req.company}</p>
                      <p className="text-[11px] text-on-surface-variant">{req.type} · {req.region}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 rounded text-[10px] font-bold uppercase">
                      {req.status}
                    </span>
                    <button className="text-[10px] font-bold text-white bg-primary px-4 py-1.5 rounded-lg uppercase tracking-widest hover:bg-primary-container transition-colors">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Catalog sync + Alerts */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* Catalog Bulk Sync */}
            <div className="glass-card border border-white/30 p-8 rounded-xl shadow-xl space-y-6">
              <h3 className="text-xl font-black text-primary flex items-center gap-3 font-headline">
                <span className="material-symbols-outlined text-secondary-container">sync</span>
                Catalog Bulk Sync
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Source Format", opts: ["Excel (.xlsx)", "JSON", "XML"] },
                  { label: "Target Category", opts: ["IT Hardware", "Healthcare", "Logistics"] },
                ].map((field) => (
                  <div key={field.label} className="space-y-1.5">
                    <label className="text-[11px] font-headline font-bold text-primary uppercase tracking-wider">
                      {field.label}
                    </label>
                    <select className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-xl px-4 py-2.5 text-sm outline-none">
                      {field.opts.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
                <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-primary transition-colors">upload_file</span>
                  <p className="text-xs text-on-surface-variant mt-2">Drop your catalog file here or <span className="text-primary font-bold">browse</span></p>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest font-headline">
                  Initiate Sync
                </button>
              </div>
            </div>

            {/* Stock Alert */}
            <div className="bg-error-container p-6 rounded-xl flex items-start gap-4">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <p className="font-bold text-error text-sm font-headline">Critical Stock Alert</p>
                <p className="text-xs text-on-error-container mt-1">ICU Patient Monitor (SKU-99034) is out of stock. 2 active government orders are pending fulfillment.</p>
                <button className="mt-3 text-[10px] font-bold text-error uppercase tracking-widest hover:underline">
                  Resolve Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

import DashboardLayout from "@/components/layout/DashboardLayout";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard/seller" },
  { label: "My Products", icon: "storefront", href: "/dashboard/seller/products" },
  { label: "Active Bids", icon: "gavel", href: "/dashboard/seller/bids" },
  { label: "Orders", icon: "inventory_2", href: "/dashboard/seller/orders" },
  { label: "Analytics", icon: "monitoring", href: "/dashboard/seller/analytics" },
  { label: "Settings", icon: "settings", href: "/dashboard/seller/settings" },
];

const stats = [
  { label: "Total Revenue", value: "$1.248M", sub: "+18.4% QoQ", icon: "payments", color: "text-on-tertiary-fixed-variant" },
  { label: "Bids Won", value: "42", sub: "of 58 submitted", icon: "emoji_events", color: "text-secondary" },
  { label: "Active Orders", value: "18", sub: "3 urgent", icon: "local_shipping", color: "text-secondary" },
];

const inventory = [
  { sku: "SKU-77291", name: "Dell PowerEdge R750 Rack Server", price: "₹4,20,000", stock: 48, status: "In Stock", statusColor: "bg-tertiary-fixed text-on-tertiary-fixed" },
  { sku: "SKU-88102", name: "Cisco Catalyst 9300 Switch (24P)", price: "₹2,10,000", stock: 12, status: "Low Stock", statusColor: "bg-secondary-fixed text-on-secondary-fixed" },
  { sku: "SKU-99034", name: "ICU Multi-Parameter Monitor", price: "₹3,50,000", stock: 0, status: "Out of Stock", statusColor: "bg-error-container text-on-error-container" },
];

const activeTenders = [
  { id: "TR-99421", title: "Infrastructure Cloud Expansion", budget: "$420,000", deadline: "Jan 28, 2025", location: "New Delhi", category: "IT Hardware" },
  { id: "TR-77081", title: "State-Wide Broadband Infrastructure", budget: "$6.2M", deadline: "Feb 9, 2025", location: "Pan India", category: "Logistics" },
  { id: "TR-55512", title: "Municipal CCTV Surveillance Network", budget: "$890,000", deadline: "Jan 31, 2025", location: "Mumbai", category: "IT Hardware" },
];

export default function SellerDashboard() {
  return (
    <DashboardLayout
      navItems={navItems}
      role="Authorized Vendor"
      department="GovSeller"
      ctaLabel="Submit New Bid"
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-black text-primary tracking-tight font-headline">Vendor Operations</h2>
          <p className="text-on-surface-variant font-body">Quarter Q3 · Vendor Performance Hub</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest font-headline">{stat.label}</p>
                <span className="material-symbols-outlined text-primary/40">{stat.icon}</span>
              </div>
              <p className="text-4xl font-black text-on-surface font-headline">{stat.value}</p>
              <p className={`text-xs font-bold mt-1 ${stat.color}`}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Inventory */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined">inventory</span> Inventory Assets
              </h3>
              <button className="text-xs font-bold text-primary uppercase tracking-wider hover:underline">Manage Catalog</button>
            </div>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
              <table className="w-full border-separate border-spacing-y-2 p-4">
                <thead>
                  <tr className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {["SKU", "Product Name", "Unit Price", "Stock", "Status"].map((h) => (
                      <th key={h} className="text-left pb-3 px-3 font-headline">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item) => (
                    <tr key={item.sku} className="bg-surface-container-low hover:shadow-md transition-all">
                      <td className="px-3 py-3 rounded-l-xl text-[10px] font-mono text-on-surface-variant">{item.sku}</td>
                      <td className="px-3 py-3 font-bold text-on-surface text-sm">{item.name}</td>
                      <td className="px-3 py-3 font-black text-primary text-sm font-headline">{item.price}</td>
                      <td className="px-3 py-3 text-sm text-on-surface-variant">{item.stock} units</td>
                      <td className="px-3 py-3 rounded-r-xl">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Active Tenders */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined">gavel</span> Open Tenders
              </h3>
              <div className="flex gap-2">
                {["All", "IT", "Logistics"].map((f) => (
                  <button
                    key={f}
                    className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                      f === "All" ? "bg-primary text-white" : "bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-white transition-colors"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {activeTenders.map((tender) => (
                <div key={tender.id} className="bg-surface-container-lowest p-5 rounded-xl hover:shadow-lg hover:shadow-primary/5 transition-all group">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{tender.category}</span>
                      <h4 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors font-headline">{tender.title}</h4>
                      <div className="flex items-center gap-3 text-[11px] text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">location_on</span>
                          {tender.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">schedule</span>
                          Due {tender.deadline}
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-lg font-black text-primary font-headline">{tender.budget}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 text-[10px] font-bold text-primary border border-primary/20 py-2 rounded-lg uppercase tracking-widest hover:bg-primary-container hover:text-white transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 text-[10px] font-bold text-white bg-secondary-container py-2 rounded-lg uppercase tracking-widest hover:opacity-90 transition-opacity">
                      Place Bid
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 h-16 w-16 bg-secondary-container rounded-full flex items-center justify-center shadow-2xl shadow-secondary/30 hover:scale-110 transition-transform z-50">
        <span className="material-symbols-outlined text-white text-2xl">add</span>
      </button>
    </DashboardLayout>
  );
}

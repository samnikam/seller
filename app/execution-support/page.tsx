import Link from "next/link";
import PublicNav from "@/components/layout/PublicNav";

const services = [
  { icon: "inventory_2", title: "Product Sourcing Assistance", desc: "Find the exact products required for your tender — matched to specifications, compliance standards, and budget.", color: "from-[#4285f4] to-[#1a73e8]" },
  { icon: "factory", title: "OEM & Vendor Connection", desc: "Get connected with verified OEMs and vendors who can supply materials with proper authorization.", color: "from-[#34a853] to-[#1e8e3e]" },
  { icon: "verified", title: "Authorization Support", desc: "Obtain OEM authorization letters, dealership certificates, and compliance documents for execution.", color: "from-[#fbbc04] to-[#f9a825]" },
  { icon: "shopping_cart", title: "Bulk Procurement & Pricing", desc: "Leverage our network for competitive bulk pricing, negotiate with multiple suppliers, and reduce costs.", color: "from-[#ea4335] to-[#c62828]" },
  { icon: "local_shipping", title: "Logistics & Delivery Guidance", desc: "Plan delivery routes, coordinate shipments across locations, and ensure timely delivery.", color: "from-[#7c3aed] to-[#5b21b6]" },
];

const steps = [
  { num: "01", icon: "upload_file", title: "Upload Tender", desc: "Share your tender document and requirements with us." },
  { num: "02", icon: "analytics", title: "Requirement Analysis", desc: "We analyze products, quantities, and specifications needed." },
  { num: "03", icon: "handshake", title: "OEM / Vendor Matching", desc: "We match you with verified OEMs and suppliers." },
  { num: "04", icon: "payments", title: "Pricing & Finalization", desc: "Get competitive quotes, compare, and finalize." },
  { num: "05", icon: "engineering", title: "Project Execution", desc: "We support delivery, installation, and completion." },
];

const whyUs = [
  { icon: "person_pin", title: "Seller-Focused", desc: "Built specifically for government sellers, not buyers." },
  { icon: "schedule", title: "Saves Time", desc: "Skip weeks of vendor hunting — we do it for you." },
  { icon: "verified_user", title: "Verified Suppliers", desc: "Every OEM and vendor is vetted and certified." },
  { icon: "support_agent", title: "Expert Support", desc: "Dedicated team for every step of execution." },
  { icon: "all_inclusive", title: "End-to-End", desc: "From sourcing to delivery — one platform." },
];

const stats = [
  { value: "500+", label: "Projects Executed" },
  { value: "120+", label: "Verified OEMs" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "₹200Cr+", label: "Procurement Value" },
];

export default function ExecutionSupportPage() {
  return (
    <div className="bg-surface text-on-background min-h-screen">
      <PublicNav activePage="Post Tender Support" />

      {/* ── Hero ── */}
      <section className="bg-primary py-10 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <span className="material-symbols-outlined text-[40rem] absolute -right-32 -top-32 rotate-12">engineering</span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <p className="text-secondary-container text-xs font-medium uppercase tracking-widest">Post-Tender Execution</p>
          <h1 className="text-2xl md:text-3xl font-medium text-white font-headline">
            Post-Tender Support for Government Sellers
          </h1>
          <p className="text-on-primary-container text-sm max-w-2xl mx-auto">
            Won a tender? We help you source products, connect with OEMs, and execute your project smoothly.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/#requirement-form" className="px-8 py-3 bg-secondary text-white text-sm font-medium rounded-xl hover:bg-secondary-container transition-colors">
              Request Assistance
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-outline-variant/10">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-primary font-headline">{s.value}</p>
                <p className="text-[11px] text-on-surface-variant uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-8">

        {/* ── What We Do ── */}
        <section className="py-14">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-xl font-medium text-primary font-headline">What happens after you win a tender?</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Winning a government tender is just the beginning. The real challenge starts with sourcing the right products,
                finding authorized OEMs, managing documentation, arranging logistics, and delivering on time.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                That&apos;s where we come in. Our platform is built to support sellers through every step of post-tender execution.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { icon: "inventory_2", text: "Product sourcing matched to tender specifications", color: "bg-[#4285f4]" },
                { icon: "factory", text: "OEM and vendor connections with verified partners", color: "bg-[#34a853]" },
                { icon: "verified", text: "Authorization and compliance document support", color: "bg-[#fbbc04]" },
                { icon: "engineering", text: "End-to-end execution guidance and tracking", color: "bg-[#ea4335]" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="material-symbols-outlined text-white text-lg">{item.icon}</span>
                  </div>
                  <span className="text-sm text-on-surface">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-14 border-t border-outline-variant/10">
          <div className="text-center mb-10">
            <h2 className="text-xl font-medium text-primary font-headline">Our Services</h2>
            <p className="text-sm text-on-surface-variant mt-2">Everything you need to execute your government project successfully.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group bg-white rounded-2xl border border-outline-variant/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`h-2 bg-gradient-to-r ${s.color}`} />
                <div className="p-6 space-y-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="material-symbols-outlined text-white text-2xl">{s.icon}</span>
                  </div>
                  <p className="text-sm font-medium text-on-surface font-headline">{s.title}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-14 border-t border-outline-variant/10">
          <div className="text-center mb-10">
            <h2 className="text-xl font-medium text-primary font-headline">How It Works</h2>
            <p className="text-sm text-on-surface-variant mt-2">Five simple steps from tender to project completion.</p>
          </div>
          {/* Desktop */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-outline-variant/20" />
            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20 relative z-10">
                    <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-4">Step {step.num}</span>
                  <p className="text-xs font-medium text-on-surface font-headline mt-1">{step.title}</p>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden space-y-3">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-4 bg-white rounded-xl border border-outline-variant/10 p-4 shadow-sm">
                <div className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-lg">{step.icon}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">Step {step.num}</span>
                  <p className="text-sm font-medium text-on-surface font-headline">{step.title}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-14 border-t border-outline-variant/10">
          <div className="text-center mb-10">
            <h2 className="text-xl font-medium text-primary font-headline">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl border border-outline-variant/10 p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-primary/5 group-hover:bg-primary/10 rounded-xl flex items-center justify-center mx-auto transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">{w.icon}</span>
                </div>
                <p className="text-xs font-medium text-on-surface font-headline mt-3">{w.title}</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed mt-1">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-container to-primary" />
        <div className="absolute inset-0 opacity-5">
          <span className="material-symbols-outlined text-[30rem] absolute right-0 top-1/2 -translate-y-1/2">engineering</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-8 py-14 text-center space-y-5">
          <h2 className="text-xl font-medium text-white font-headline">Need Help with Your Tender Execution?</h2>
          <p className="text-sm text-on-primary-container max-w-lg mx-auto">
            Our team is ready to help you source products, connect with OEMs, and deliver your government project on time.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/#requirement-form" className="px-8 py-3 bg-gradient-to-r from-secondary to-secondary-container text-white text-sm font-medium rounded-xl shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
              Submit Requirement
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-surface-container-low py-8 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest">© 2025 GovSeller · Post Tender Support</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Support"].map((link) => (
              <a key={link} href="#" className="text-[10px] text-on-surface-variant/60 hover:text-primary uppercase tracking-widest transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

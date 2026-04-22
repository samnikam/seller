import Link from "next/link";
import PublicNav from "@/components/layout/PublicNav";
import BuyerRequirementForm from "@/components/BuyerRequirementForm";

export default function LandingPage() {
  return (
    <div className="bg-background text-on-background antialiased">
      <PublicNav activePage="Marketplace" />

      <main>
        {/* ── Hero ── */}
        <section className="relative flex items-center overflow-hidden py-14">
          <div className="absolute inset-0 bg-primary-container z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          </div>
          <div className="relative z-10 container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
                <span className="material-symbols-outlined text-secondary mr-2 text-sm">verified</span>
                <span className="text-secondary font-bold text-xs tracking-widest uppercase">
                  Official Government Portal
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-medium text-white leading-snug tracking-tight font-headline">
                The Architecture <br />
                <span className="text-secondary-container">of Modern Commerce</span>
              </h1>
              <p className="text-xl text-on-primary-container max-w-xl leading-relaxed">
                Secure, transparent, and high-efficiency procurement for the government.
                Streamlining the acquisition of essential goods and enterprise services through
                verified digital governance.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/login"
                  className="px-8 py-4 bg-gradient-to-r from-secondary to-secondary-container text-white font-bold rounded-xl shadow-lg shadow-secondary/20 hover:scale-105 transition-transform"
                >
                  Register Organization
                </Link>
                <Link
                  href="/login"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  Partner Login
                </Link>
              </div>
            </div>

            {/* Live market activity card */}
            <div className="hidden lg:block">
              <div className="bg-surface-container-low/20 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-20">
                  <span className="material-symbols-outlined text-white text-9xl">shield_with_heart</span>
                </div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white text-lg font-medium font-headline">Live Market Activity</h3>
                  <div className="space-y-4">
                    {[
                      { ref: "Tender #A94-02", desc: "Medical Supply Infrastructure", amount: "$4.2M", bg: "bg-tertiary-fixed" },
                      { ref: "Contract #B12-88", desc: "Highway Logistics Expansion", amount: "$12.8M", bg: "bg-secondary-fixed" },
                    ].map((item) => (
                      <div
                        key={item.ref}
                        className="bg-white/5 p-4 rounded-xl flex items-center justify-between border border-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center`}>
                            <span className="material-symbols-outlined text-primary">gavel</span>
                          </div>
                          <div>
                            <p className="text-white font-bold text-sm">{item.ref}</p>
                            <p className="text-white/60 text-xs">{item.desc}</p>
                          </div>
                        </div>
                        <span className="text-tertiary-fixed font-bold text-sm">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-4 bg-surface">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "12,400+", label: "Verified Vendors" },
                { value: "85,000+", label: "Products Listed" },
                { value: "320+", label: "Cities Covered" },
                { value: "₹500Cr+", label: "Transactions Processed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center space-y-2 p-6 bg-primary/5 rounded-2xl">
                  <p className="text-xl md:text-2xl font-semibold text-primary font-headline">{stat.value}</p>
                  <p className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Post Your Requirement (Buyer → Vendor) ── */}
        <section id="requirement-form" className="py-10 bg-surface">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8 lg:sticky lg:top-28">
                <div className="space-y-5">
                  <div className="inline-flex items-center bg-secondary/10 px-4 py-2 rounded-full">
                    <span className="material-symbols-outlined text-secondary mr-2 text-sm">connect_without_contact</span>
                    <span className="text-secondary font-medium text-xs tracking-widest uppercase">Buyer → Vendor</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium text-primary leading-snug font-headline">
                    Tell us what you need
                  </h2>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    Submit your material requirement and we&apos;ll match you with verified vendors
                    who can fulfill your order. No more endless searching — the right seller
                    comes to you.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: "edit_note", text: "Fill in your requirement details" },
                    { icon: "hub", text: "We match you with the best vendors" },
                    { icon: "handshake", text: "Vendor connects with you directly" },
                  ].map((step, i) => (
                    <div key={step.text} className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-lg">{step.icon}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-on-surface-variant/50">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-sm text-on-surface">{step.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <BuyerRequirementForm />
            </div>
          </div>
        </section>



        {/* ── Popular Product Categories ── */}
        <section className="py-10 bg-surface-container-low/50">
          <div className="container mx-auto px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl md:text-3xl font-medium text-primary font-headline">Popular product categories</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Oxygen Gas & Accessories",
                  img: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/oxygen-v2_1619619912.jpg",
                  links: [
                    "Oxygen Concentrator",
                    "Oxygen Flow Meter",
                    "Compressed Oxygen IS:309",
                    "O2 Gas Cylinders - Steel",
                    "HF Nasal O2 Therapy Unit",
                  ],
                  highlight: true,
                },
                {
                  title: "Medical",
                  img: "https://assets-bg.gem.gov.in/resources/images/new3.png",
                  links: [
                    "Hand Sanitizer",
                    "Air Pollution Mask",
                    "Surgical Gloves",
                    "Covid-19 Sample Kit",
                  ],
                },
                {
                  title: "SARAS Collection",
                  img: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/sarar_1682716359.png",
                  links: [
                    "Handicrafts",
                    "Handloom Textiles",
                    "Personal Care",
                    "Office Accessories",
                  ],
                },
                {
                  title: "Furniture",
                  img: "https://assets-bg.gem.gov.in/resources/images/image-88.png",
                  links: [
                    "Office Chair",
                    "Computer Desk",
                    "Lounge Chair",
                    "Storage Rack",
                  ],
                },
                {
                  title: "Fire Safety",
                  img: "https://assets-bg.gem.gov.in/resources/images/new2.png",
                  links: [
                    "Fire Extinguishers",
                    "Sprinklers Smoke",
                    "Detectors Fire",
                    "Alarms",
                  ],
                },
                {
                  title: "Computers",
                  img: "https://assets-bg.gem.gov.in/resources/images/new4.png",
                  links: [
                    "Desktop Computer",
                    "Computer Monitor",
                    "PC Software",
                    "Computer Printer",
                  ],
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className={`bg-surface-container-lowest rounded-2xl p-6 flex gap-5 items-start border ${
                    cat.highlight
                      ? "border-secondary shadow-lg shadow-secondary/10"
                      : "border-outline-variant/15 shadow-md shadow-primary/5"
                  } hover:shadow-xl hover:-translate-y-1 transition-all`}
                >
                  <div className="flex-1 space-y-3">
                    <h3 className={`text-sm font-medium font-headline ${
                      cat.highlight ? "text-secondary" : "text-primary"
                    }`}>
                      {cat.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {cat.links.map((link) => (
                        <li key={link}>
                          <Link
                            href="/marketplace"
                            className="text-on-surface-variant text-xs hover:text-primary transition-colors"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0 w-24 h-32 flex items-center justify-center">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-container transition-colors"
              >
                Explore the Market
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>



        {/* ── 5. Why Choose Us ── */}
        <section className="py-10 bg-surface-container-low">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-medium text-primary leading-snug font-headline">
                  Why Choose Our Platform?
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  We&apos;re built to make government procurement simple, transparent, and efficient.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: "verified_user", title: "Verified Vendors", desc: "Every supplier is vetted and authenticated." },
                  { icon: "speed", title: "Faster Procurement", desc: "Cut sourcing time by up to 70%." },
                  { icon: "payments", title: "Transparent Pricing", desc: "No hidden costs, clear comparisons." },
                  { icon: "forum", title: "Easy Communication", desc: "Direct vendor messaging built in." },
                  { icon: "schedule", title: "Time-Saving Process", desc: "Streamlined workflows for efficiency." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-surface-container-lowest p-6 rounded-2xl shadow-md shadow-primary/5 flex gap-4 items-start border border-outline-variant/10"
                  >
                    <div className="w-10 h-10 bg-tertiary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-tertiary">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-primary font-headline">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ── 7. Testimonials & Trust Indicators ── */}
        <section className="py-10 bg-surface">
          <div className="container mx-auto px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-primary font-headline">Trusted by Thousands</h2>
              <p className="text-on-surface-variant text-lg">See what our users have to say.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  quote: "This platform helped us source materials 3x faster. The vendor verification gives us complete confidence.",
                  author: "Rajesh Kumar",
                  role: "Contractor, Infrastructure Project",
                },
                {
                  quote: "We reduced our procurement cycle from weeks to days. The category browsing is incredibly intuitive.",
                  author: "Priya Sharma",
                  role: "Procurement Officer, State PWD",
                },
                {
                  quote: "As a vendor, this platform doubled our government contract wins within the first quarter.",
                  author: "Amit Patel",
                  role: "Director, Steel Supply Co.",
                },
              ].map((t) => (
                <div
                  key={t.author}
                  className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/10 space-y-6"
                >
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-secondary text-xl">star</span>
                    ))}
                  </div>
                  <p className="text-on-surface italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-medium text-primary font-headline">{t.author}</p>
                    <p className="text-on-surface-variant text-sm">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── For Vendors (Last Section) ── */}
        <section className="py-10 bg-tertiary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <span className="material-symbols-outlined text-[40rem] absolute -left-40 -bottom-40 -rotate-12">store</span>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                <span className="material-symbols-outlined mr-2">storefront</span>
                <span className="font-bold text-xs tracking-widest uppercase">For Suppliers</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium leading-snug font-headline">
                Are You a Supplier?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
                Join our platform to connect with government contractors and grow your business.
                Reach thousands of buyers actively looking for your products.
              </p>
              <Link
                href="/login"
                className="inline-block px-10 py-4 bg-white text-tertiary font-black rounded-xl shadow-lg hover:scale-105 transition-transform text-lg"
              >
                Register as Vendor
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-surface-container-low pt-12 pb-8">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 space-y-6">
              <span className="text-2xl font-black tracking-tight text-primary uppercase font-headline">
                GovSeller
              </span>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                The central authority for government procurement, facilitating secure and
                transparent trade between public institutions and verified enterprise partners.
              </p>
            </div>
            {[
              {
                heading: "Marketplace",
                links: ["Search All Tenders", "Forward Auctions", "Reverse Tenders", "Category Browse"],
              },
              {
                heading: "Participants",
                links: ["Register Vendor", "KYC Process", "OEM Partners", "Investor Portal"],
              },
              {
                heading: "Governance",
                links: ["Procurement Policy", "Audit Reports", "Dispute Resolution", "Compliance"],
              },
            ].map((col) => (
              <div key={col.heading} className="space-y-6">
                <h5 className="font-black text-primary uppercase tracking-widest text-xs font-headline">
                  {col.heading}
                </h5>
                <ul className="space-y-4 text-on-surface-variant text-sm font-medium">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest">
              © 2025 GovSeller. All rights reserved. ISO 27001 | SOC2 Type II
            </p>
            <div className="flex gap-6">
              {["Privacy Charter", "Terms of Trade", "Support Desk"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[10px] font-headline font-bold text-on-surface-variant/60 hover:text-primary uppercase tracking-widest transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";
import PublicNav from "@/components/layout/PublicNav";
import BuyerRequirementForm from "@/components/BuyerRequirementForm";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="bg-background text-on-background antialiased">
      <PublicNav activePage="Home" />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001845] via-primary to-primary-container z-0" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

          <div className="relative z-10 container mx-auto px-4 md:px-8 text-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight font-headline">
              Government Procurement
              <br />
              <span className="text-[#7eda9a]">Made Simple</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              One platform connecting buyers, sellers, OEMs, and investors for transparent and efficient government procurement.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Link
                href="/login"
                className="px-8 py-3.5 bg-white text-primary font-bold text-sm rounded-xl hover:bg-white/90 transition-colors shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/marketplace"
                className="px-8 py-3.5 bg-white/10 text-white font-bold text-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore Marketplace
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-8 bg-surface">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {[
                { value: "12,400+", label: "Verified OEMs", color: "border-[#4285f4]", accent: "text-[#4285f4]" },
                { value: "8,500+", label: "Live Tenders", color: "border-[#34a853]", accent: "text-[#34a853]" },
                { value: "2,000+", label: "Projects Supported", color: "border-[#fbbc04]", accent: "text-[#fbbc04]" },
                { value: "95%", label: "Faster Authorization", color: "border-[#7c3aed]", accent: "text-[#7c3aed]" },
              ].map((stat) => (
                <div key={stat.label} className={`bg-white rounded-xl p-5 md:p-6 text-center border-t-4 ${stat.color} shadow-sm hover:shadow-md transition-shadow`}>
                  <p className={`text-2xl md:text-3xl font-bold ${stat.accent} font-headline`}>{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-on-surface-variant uppercase tracking-wider mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── Post Your Product Requirement ── */}
        <section id="requirement-form" className="py-16 bg-gradient-to-b from-surface via-surface to-surface-container-low/30 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[80px]" />

          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              {/* Left — Content */}
              <div className="space-y-8 lg:sticky lg:top-28">
                <div className="space-y-5">
                  <div className="inline-flex items-center bg-secondary/10 px-4 py-2 rounded-full">
                    <span className="material-symbols-outlined text-secondary mr-2 text-sm">storefront</span>
                    <span className="text-secondary font-medium text-xs tracking-widest uppercase">Marketplace Requirement</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium text-primary leading-snug font-headline">
                    Post Your Product Requirement
                    <span className="block w-24 h-1 bg-gradient-to-r from-secondary to-secondary-container rounded-full mt-3" />
                  </h2>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    Submit your requirement and get connected with verified sellers, OEMs, and suppliers
                    who can fulfill your business needs quickly and efficiently.
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-3">
                  {[
                    { icon: "edit_note", text: "Submit your requirement details", color: "bg-blue-50 text-blue-600" },
                    { icon: "hub", text: "Get matched with verified sellers and OEMs", color: "bg-emerald-50 text-emerald-600" },
                    { icon: "request_quote", text: "Receive quotes and connect directly", color: "bg-amber-50 text-amber-600" },
                  ].map((step, i) => (
                    <div key={step.text} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 rounded-xl ${step.color.split(' ')[0]} flex items-center justify-center flex-shrink-0`}>
                        <span className={`material-symbols-outlined ${step.color.split(' ')[1]} text-lg`}>{step.icon}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-white bg-primary w-6 h-6 rounded-full flex items-center justify-center">{i + 1}</span>
                        <span className="text-sm text-on-surface font-medium">{step.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tender CTA Box */}
                <div className="relative bg-gradient-to-br from-[#001845] to-primary rounded-2xl p-6 space-y-3 overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-5">
                    <span className="material-symbols-outlined text-white text-[10rem]">gavel</span>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-tertiary-fixed">gavel</span>
                      </div>
                      <h4 className="text-sm font-bold text-white font-headline">Looking for Government Opportunities?</h4>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      If you are a seller looking to work with government departments, explore live tenders and start bidding.
                    </p>
                    <Link
                      href="/bids"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary text-sm font-bold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
                    >
                      <span className="material-symbols-outlined text-base">explore</span>
                      Explore Tenders
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 rounded-3xl blur-xl" />
                <div className="relative">
                  <BuyerRequirementForm />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ── Popular Product Categories ── */}
        <section className="py-10 bg-surface-container-low/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <h2 className="text-2xl md:text-3xl font-medium text-primary font-headline">Popular product categories<span className="block w-24 h-1 bg-gradient-to-r from-secondary to-secondary-container rounded-full mt-3 mx-auto" /></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Oxygen Gas & Accessories",
                  img: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/oxygen-v2_1619619912.jpg",
                  links: ["Oxygen Concentrator", "Oxygen Flow Meter", "Compressed Oxygen IS:309", "O2 Gas Cylinders - Steel", "HF Nasal O2 Therapy Unit"],
                  highlight: true,
                },
                {
                  title: "Medical",
                  img: "https://assets-bg.gem.gov.in/resources/images/new3.png",
                  links: ["Hand Sanitizer", "Air Pollution Mask", "Surgical Gloves", "Covid-19 Sample Kit"],
                },
                {
                  title: "SARAS Collection",
                  img: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/sarar_1682716359.png",
                  links: ["Handicrafts", "Handloom Textiles", "Personal Care", "Office Accessories"],
                },
                {
                  title: "Furniture",
                  img: "https://assets-bg.gem.gov.in/resources/images/image-88.png",
                  links: ["Office Chair", "Computer Desk", "Lounge Chair", "Storage Rack"],
                },
                {
                  title: "Fire Safety",
                  img: "https://assets-bg.gem.gov.in/resources/images/new2.png",
                  links: ["Fire Extinguishers", "Sprinklers Smoke", "Detectors Fire", "Alarms"],
                },
                {
                  title: "Computers",
                  img: "https://assets-bg.gem.gov.in/resources/images/new4.png",
                  links: ["Desktop Computer", "Computer Monitor", "PC Software", "Computer Printer"],
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
                          <Link href="/marketplace" className="text-on-surface-variant text-xs hover:text-primary transition-colors">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0 w-24 h-32 flex items-center justify-center">
                    <img src={cat.img} alt={cat.title} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/marketplace" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-container transition-colors">
                Explore the Market
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. Why Choose Us ── */}
        <section className="py-12 bg-surface-container-low">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <h2 className="text-2xl md:text-3xl font-medium text-primary leading-snug font-headline">
                Why Choose Our Platform?
                <span className="block w-24 h-1 bg-gradient-to-r from-secondary to-secondary-container rounded-full mt-3 mx-auto" />
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Built to make government procurement simple, transparent, and efficient.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: "Verified Vendors", desc: "Every supplier is vetted and authenticated through rigorous KYC checks.", accent: "border-t-[#4285f4]" },
                { title: "Faster Procurement", desc: "Cut sourcing time by up to 70% with smart matching and instant quotes.", accent: "border-t-[#34a853]" },
                { title: "Transparent Pricing", desc: "No hidden costs. Compare prices from multiple verified sellers easily.", accent: "border-t-[#fbbc04]" },
                { title: "Easy Communication", desc: "Direct messaging with vendors, OEMs, and support teams built right in.", accent: "border-t-[#ea4335]" },
                { title: "Time-Saving Process", desc: "Streamlined workflows from requirement posting to order fulfillment.", accent: "border-t-[#7c3aed]" },
                { title: "End-to-End Support", desc: "From tender discovery to project execution — we’ve got you covered.", accent: "border-t-[#e91e63]" },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`bg-white p-6 rounded-xl border-t-4 ${item.accent} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all`}
                >
                  <h4 className="text-sm font-semibold text-on-surface font-headline mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── 7. Testimonials & Trust Indicators ── */}
        <section className="py-10 bg-surface">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-primary font-headline">Trusted by Thousands<span className="block w-24 h-1 bg-gradient-to-r from-secondary to-secondary-container rounded-full mt-3 mx-auto" /></h2>
              <p className="text-on-surface-variant text-lg">See what our users have to say.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  quote: "This platform helped us source materials 3x faster. The vendor verification gives us complete confidence.",
                  author: "Rajesh Kumar",
                  role: "Contractor, Infrastructure Project",
                  bg: "bg-blue-50",
                },
                {
                  quote: "We reduced our procurement cycle from weeks to days. The category browsing is incredibly intuitive.",
                  author: "Priya Sharma",
                  role: "Procurement Officer, State PWD",
                  bg: "bg-emerald-50",
                },
                {
                  quote: "As a vendor, this platform doubled our government contract wins within the first quarter.",
                  author: "Amit Patel",
                  role: "Director, Steel Supply Co.",
                  bg: "bg-amber-50",
                },
              ].map((t) => (
                <div
                  key={t.author}
                  className={`${t.bg} p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-primary/20 space-y-6`}
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

      </main>

      <Footer />
    </div>
  );
}




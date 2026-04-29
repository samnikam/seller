import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001233]">
      <div className="h-1 bg-gradient-to-r from-[#4285f4] via-[#ff6a00] to-[#7c3aed]" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-6 md:pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-3 md:space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-white/15 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-base md:text-lg">account_balance</span>
              </div>
              <span className="text-lg md:text-xl font-black tracking-tight text-white uppercase font-headline">GovSeller</span>
            </Link>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed">
              India&apos;s trusted government procurement platform connecting buyers, sellers, OEMs, and investors.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-2 md:space-y-4">
            <h5 className="text-xs md:text-sm font-bold text-white">Platform</h5>
            <ul className="space-y-1.5 md:space-y-3">
              {[{ label: "Marketplace", href: "/marketplace" }, { label: "Tenders (Bids)", href: "/bids" }, { label: "OEM Directory", href: "/products-oem" }, { label: "Seller Services", href: "/seller-services" }].map((l) => (
                <li key={l.label}><Link href={l.href} className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-2 md:space-y-4">
            <h5 className="text-xs md:text-sm font-bold text-white">Support</h5>
            <ul className="space-y-1.5 md:space-y-3">
              {[{ label: "Help Center", href: "#" }, { label: "Post Requirement", href: "/#requirement-form" }, { label: "Contact Us", href: "#" }, { label: "FAQs", href: "#" }].map((l) => (
                <li key={l.label}><Link href={l.href} className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2 md:space-y-4">
            <h5 className="text-xs md:text-sm font-bold text-white">Legal</h5>
            <ul className="space-y-1.5 md:space-y-3">
              {["Privacy Policy", "Terms of Service", "Refund Policy", "Compliance"].map((l) => (
                <li key={l}><a href="#" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[10px] text-white/30">© 2025 GovSeller. All rights reserved.</p>
          <p className="text-[10px] text-white/30">Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}

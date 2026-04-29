"use client";

import { useState } from "react";
import PublicNav from "@/components/layout/PublicNav";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

const oemCategories = ["All", "Electronics & IT", "Construction", "Furniture", "Medical", "Vehicles", "Machinery"];

const oems = [
  { id: 1, name: "Bharat Electronics Ltd (BEL)", category: "Electronics & IT", location: "Bangalore", certs: ["ISO 9001", "ISO 14001", "CMMI Level 5"], products: ["CCTV Camera", "Radar Systems", "Communication Equipment"], projects: 120, verified: true },
  { id: 2, name: "Larsen & Toubro (L&T)", category: "Construction", location: "Mumbai", certs: ["ISO 9001", "ISO 45001", "SA 8000"], products: ["Precast Structures", "Steel Fabrication", "Heavy Equipment"], projects: 340, verified: true },
  { id: 3, name: "Godrej Interio", category: "Furniture", location: "Mumbai", certs: ["ISO 9001", "ISO 14001", "GreenPro"], products: ["Office Chairs", "Modular Furniture", "Steel Almirahs"], projects: 85, verified: true },
  { id: 4, name: "BPL Medical Technologies", category: "Medical", location: "Bangalore", certs: ["ISO 13485", "CE Marking", "FDA"], products: ["Patient Monitors", "Defibrillators", "ECG Machines"], projects: 65, verified: true },
  { id: 5, name: "Tata Motors Commercial", category: "Vehicles", location: "Pune", certs: ["ISO 9001", "IATF 16949", "ISO 14001"], products: ["Buses", "Ambulances", "Utility Vehicles"], projects: 210, verified: true },
  { id: 6, name: "Jyoti CNC Automation", category: "Machinery", location: "Rajkot", certs: ["ISO 9001", "CE Marking"], products: ["CNC Lathe", "VMC Machines", "Turn Mill Centers"], projects: 48, verified: true },
  { id: 7, name: "Dell Technologies India", category: "Electronics & IT", location: "Hyderabad", certs: ["ISO 9001", "ISO 27001", "EPEAT Gold"], products: ["Desktops", "Laptops", "Servers"], projects: 180, verified: true },
  { id: 8, name: "UltraTech Cement", category: "Construction", location: "Mumbai", certs: ["ISO 9001", "ISO 14001", "BIS"], products: ["OPC Cement", "PPC Cement", "Ready Mix Concrete"], projects: 420, verified: true },
  { id: 9, name: "Philips Healthcare India", category: "Medical", location: "Pune", certs: ["ISO 13485", "CE Marking", "FDA"], products: ["MRI Machines", "CT Scanners", "Ventilators"], projects: 95, verified: true },
  { id: 10, name: "Featherlite Office Systems", category: "Furniture", location: "Bangalore", certs: ["ISO 9001", "ISO 14001", "BIFMA"], products: ["Executive Chairs", "Workstations", "Conference Tables"], projects: 72, verified: true },
  { id: 11, name: "Ashok Leyland", category: "Vehicles", location: "Chennai", certs: ["ISO 9001", "IATF 16949"], products: ["Trucks", "Buses", "Defence Vehicles"], projects: 190, verified: true },
  { id: 12, name: "ACE Designers Ltd", category: "Machinery", location: "Bangalore", certs: ["ISO 9001", "CE Marking"], products: ["CNC Turning Centers", "Machining Centers"], projects: 55, verified: true },
];

const supplyMap = [
  { product: "CCTV Camera", oems: ["Bharat Electronics Ltd (BEL)", "Hikvision India", "CP Plus"] },
  { product: "Office Chair", oems: ["Godrej Interio", "Featherlite Office Systems", "Durian Furniture"] },
  { product: "Patient Monitor", oems: ["BPL Medical Technologies", "Philips Healthcare India", "Schiller India"] },
  { product: "Desktop Computer", oems: ["Dell Technologies India", "HP India", "Lenovo India"] },
  { product: "Cement OPC 53", oems: ["UltraTech Cement", "ACC Ltd", "Ambuja Cements"] },
  { product: "Electric Bus", oems: ["Tata Motors Commercial", "Ashok Leyland", "Olectra-BYD"] },
];

export default function ProductsOemPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedOem, setSelectedOem] = useState<typeof oems[0] | null>(null);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authStatus, setAuthStatus] = useState<string | null>(null);

  const filteredOems = activeCategory === "All" ? oems : oems.filter((o) => o.category === activeCategory);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthStatus("Pending");
    setShowAuthForm(false);
  };

  return (
    <div className="bg-[#f5f5f5] text-[#333] min-h-screen">
      <PublicNav activePage="OEM / Supply Chain" />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/oem.jpg" alt="OEM Supply Chain" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-8 text-center max-w-3xl space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-headline">
            Find OEMs & Build Your <span className="text-[#7eda9a]">Supply Chain</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed">
            Connect with verified manufacturers, explore supply capabilities, and get authorized to fulfill government tenders.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 py-10 space-y-14">

        {/* Category Browsing */}
        <section id="oem-directory">
          <div className="flex flex-wrap gap-3 mb-8">
            {oemCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${activeCategory === cat ? "bg-[#002869] text-white border-[#002869] shadow-md" : "bg-white text-[#555] border-[#ddd] hover:border-[#002869] hover:text-[#002869]"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* OEM Directory */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredOems.map((oem) => (
              <div key={oem.id} className="bg-white rounded-xl border border-[#e8e8e8] p-5 hover:shadow-lg transition-shadow space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-[#002869]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[#002869]">domain</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#333]">{oem.name}</h3>
                      <p className="text-[10px] text-[#888]">{oem.category}</p>
                    </div>
                  </div>
                  {oem.verified && (
                    <span className="flex items-center gap-1 bg-[#e8f5e9] text-[#2e7d32] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-xs">verified</span>Verified
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs text-[#666]">
                  <span className="material-symbols-outlined text-xs">location_on</span>{oem.location}
                  <span className="mx-2 text-[#ddd]">|</span>
                  <span className="material-symbols-outlined text-xs">assignment</span>{oem.projects} Projects
                </div>

                <div className="flex flex-wrap gap-1">
                  {oem.certs.slice(0, 3).map((c) => (
                    <span key={c} className="px-2 py-0.5 bg-[#f5f5f5] text-[10px] text-[#666] rounded">{c}</span>
                  ))}
                </div>

                <div className="flex gap-2 pt-1">
                  <button onClick={() => setSelectedOem(oem)} className="flex-1 py-2 text-xs font-bold text-[#002869] border border-[#002869]/20 rounded-lg hover:bg-[#002869]/5 transition-colors">View Profile</button>
                  <button onClick={() => setShowAuthForm(true)} className="flex-1 py-2 text-xs font-bold text-white bg-[#008080] rounded-lg hover:bg-[#006666] transition-colors">Request Auth</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12">
          <h2 className="text-xl font-bold text-[#333] text-center mb-10">Why Trust Our OEM Network?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "verified_user", title: "100% Verified", desc: "Every OEM undergoes rigorous KYC and quality verification.", color: "text-blue-600", line: "bg-blue-600" },
              { icon: "workspace_premium", title: "Certified Partners", desc: "ISO, CE, BIS, and industry-specific certifications.", color: "text-emerald-600", line: "bg-emerald-600" },
              { icon: "handshake", title: "Direct Authorization", desc: "Get authorized directly from manufacturers.", color: "text-amber-600", line: "bg-amber-600" },
              { icon: "trending_up", title: "Proven Track Record", desc: "OEMs with 50+ government projects completed.", color: "text-violet-600", line: "bg-violet-600" },
            ].map((t) => (
              <div key={t.title} className="text-center space-y-3">
                <span className={`material-symbols-outlined ${t.color} text-4xl`}>{t.icon}</span>
                <div className={`w-10 h-0.5 ${t.line} mx-auto rounded-full`} />
                <h4 className="text-sm font-bold text-[#333]">{t.title}</h4>
                <p className="text-xs text-[#888] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#001845] to-[#002869] rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl font-bold text-white">Can&apos;t find the right OEM?</h2>
          <p className="text-white/70 text-sm">Submit your requirement and we&apos;ll match you with the best manufacturers.</p>
          <Link href="/#requirement-form" className="inline-block px-6 py-3 bg-white text-[#002869] font-bold text-sm rounded-xl hover:bg-white/90 transition-colors">
            Submit Requirement
          </Link>
        </section>
      </div>

      <Footer />

      {/* OEM Profile Modal */}
      {selectedOem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedOem(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#002869]/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#002869] text-xl">domain</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#333]">{selectedOem.name}</h3>
                  <p className="text-xs text-[#888]">{selectedOem.category} · {selectedOem.location}</p>
                </div>
              </div>
              <button onClick={() => setSelectedOem(null)} className="p-1 hover:bg-[#f5f5f5] rounded-lg">
                <span className="material-symbols-outlined text-[#888]">close</span>
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-bold text-[#333] mb-1">Products Supplied</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedOem.products.map((p) => <span key={p} className="px-2 py-1 bg-[#f5f5f5] text-xs text-[#555] rounded">{p}</span>)}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#333] mb-1">Certifications</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedOem.certs.map((c) => <span key={c} className="px-2 py-1 bg-[#e8f5e9] text-xs text-[#2e7d32] rounded">{c}</span>)}
                </div>
              </div>
              <div className="flex justify-between text-xs border-t border-[#eee] pt-3">
                <span className="text-[#888]">Projects Completed</span>
                <span className="font-bold text-[#333]">{selectedOem.projects}+</span>
              </div>
            </div>

            <button onClick={() => { setSelectedOem(null); setShowAuthForm(true); }} className="w-full py-2.5 bg-[#008080] text-white text-sm font-bold rounded-lg hover:bg-[#006666] transition-colors">
              Request Authorization
            </button>
          </div>
        </div>
      )}

      {/* Authorization Form Modal */}
      {showAuthForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowAuthForm(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#333]">Request OEM Authorization</h3>
              <button onClick={() => setShowAuthForm(false)} className="p-1 hover:bg-[#f5f5f5] rounded-lg">
                <span className="material-symbols-outlined text-[#888]">close</span>
              </button>
            </div>

            {authStatus ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[#2e7d32] text-3xl">check_circle</span>
                </div>
                <p className="text-sm font-bold text-[#333]">Request Submitted!</p>
                <p className="text-xs text-[#888]">Status: <span className="text-[#f59e0b] font-bold">Pending</span></p>
                <button onClick={() => { setAuthStatus(null); setShowAuthForm(false); }} className="text-sm text-[#002869] font-medium hover:underline">Close</button>
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="space-y-3">
                <input type="text" required placeholder="Company / Seller Name" className="w-full px-3 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869]" />
                <input type="text" required placeholder="Tender / Project Details" className="w-full px-3 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869]" />
                <input type="text" required placeholder="Product Requirement" className="w-full px-3 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869]" />
                <select required className="w-full px-3 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869]">
                  <option value="" disabled selected>Select OEM (optional)</option>
                  {oems.map((o) => <option key={o.id} value={o.name}>{o.name}</option>)}
                </select>
                <textarea placeholder="Additional details..." rows={3} className="w-full px-3 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869] resize-none" />
                <button type="submit" className="w-full py-2.5 bg-[#008080] text-white text-sm font-bold rounded-lg hover:bg-[#006666] transition-colors">Submit Request</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import PublicNav from "@/components/layout/PublicNav";

/* ── Dummy Data ── */

const featuredTenders = [
  { id: "GEM/2026/T/901234", title: "Supply of 500 LED Street Lights — Smart City Phase III", dept: "Ministry of Urban Development", location: "New Delhi", value: "₹1.85 Cr", deadline: "28 Apr 2026", tag: "Recommended" },
  { id: "GEM/2026/T/901456", title: "IT Infrastructure Setup — 14 District Offices", dept: "Ministry of Electronics & IT", location: "Pan India", value: "₹6.20 Cr", deadline: "05 May 2026", tag: "High Value" },
  { id: "GEM/2026/T/901789", title: "Medical Equipment for 12 PHCs — Ventilators & Monitors", dept: "Ministry of Health & Family Welfare", location: "Maharashtra", value: "₹3.40 Cr", deadline: "02 May 2026", tag: "Closing Soon" },
];

const tenders = [
  { id: "GEM/2026/T/902001", title: "Office Furniture Supply — Central Secretariat", dept: "Ministry of Home Affairs", category: "Furniture", location: "New Delhi", value: "₹48 Lakh", emd: "₹96,000", deadline: "30 Apr 2026", desc: "Supply and installation of modular office furniture including workstations, chairs, and storage units." },
  { id: "GEM/2026/T/902134", title: "CCTV Surveillance System — Railway Stations", dept: "Ministry of Railways", category: "Security & Safety", location: "Pan India (12 stations)", value: "₹2.10 Cr", emd: "₹4,20,000", deadline: "10 May 2026", desc: "Installation of IP-based CCTV surveillance with NVR, analytics, and 3-year AMC." },
  { id: "GEM/2026/T/902267", title: "Solar Panel Installation — Government Schools", dept: "Ministry of New & Renewable Energy", category: "Electrical", location: "Rajasthan", value: "₹1.25 Cr", emd: "₹2,50,000", deadline: "15 May 2026", desc: "Supply, installation, and commissioning of rooftop solar panels across 45 government schools." },
  { id: "GEM/2026/T/902390", title: "Desktop Computers & Printers — District Courts", dept: "Ministry of Law & Justice", category: "IT & Computers", location: "Uttar Pradesh", value: "₹72 Lakh", emd: "₹1,44,000", deadline: "22 May 2026", desc: "Supply of 340 desktop computers (i5, 8GB) and 85 laser printers with 3-year warranty." },
  { id: "GEM/2026/T/902512", title: "Precast Concrete Pipes — Highway Drainage", dept: "Ministry of Road Transport", category: "Construction", location: "Gujarat", value: "₹95 Lakh", emd: "₹1,90,000", deadline: "18 May 2026", desc: "Supply of NP3 precast concrete pipes (600mm) for highway drainage across 4 national highway stretches." },
  { id: "GEM/2026/T/902645", title: "Patient Monitors & Defibrillators — District Hospitals", dept: "Ministry of Health", category: "Medical", location: "Madhya Pradesh", value: "₹1.60 Cr", emd: "₹3,20,000", deadline: "25 May 2026", desc: "Supply of 5-para patient monitors and biphasic defibrillators to 18 district hospitals." },
];

const insightProducts = [
  { name: "LED Street Light 150W IP66", oem: "Havells India", match: "95%" },
  { name: "Smart Pole Controller", oem: "Siemens India", match: "88%" },
  { name: "Underground Cable 4-core", oem: "Polycab", match: "82%" },
];

const myBids = [
  { id: "GEM/2026/T/901234", title: "LED Street Lights — Smart City Phase III", status: "Active", submitted: "15 Apr 2026", amount: "₹1.72 Cr" },
  { id: "GEM/2026/T/900812", title: "Computer Lab Setup — KV Schools", status: "Submitted", submitted: "10 Apr 2026", amount: "₹58 Lakh" },
  { id: "GEM/2026/T/900456", title: "Fire Safety Equipment — Govt Buildings", status: "Draft", submitted: "—", amount: "₹32 Lakh" },
];

export default function TendersPage() {
  const [search, setSearch] = useState("");
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSet, setAlertSet] = useState(false);

  return (
    <div className="bg-surface text-on-background min-h-screen">
      <PublicNav activePage="Tenders & Opportunities" />

      {/* ── 1. Hero ── */}
      <section className="bg-primary py-14 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <span className="material-symbols-outlined text-[40rem] absolute -right-32 -top-32 rotate-12">gavel</span>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-5">
          <p className="text-secondary-container text-xs font-medium uppercase tracking-widest">Seller-Focused Tender Discovery</p>
          <h1 className="text-2xl md:text-3xl font-medium text-white font-headline">
            Discover Government Tenders & Opportunities
          </h1>
          <p className="text-on-primary-container text-sm max-w-2xl mx-auto">
            Find relevant tenders, analyze requirements, identify products & OEMs needed,
            and start your bid — all from one intelligent platform.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg mt-6">
            <span className="material-symbols-outlined text-on-surface-variant text-xl pl-4">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by tender title, department, product, location..."
              className="flex-1 px-4 py-3.5 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/50"
            />
            <button type="submit" className="bg-secondary text-white px-6 py-3.5 text-sm font-medium hover:bg-secondary-container transition-colors">
              Search
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["All", "Electrical", "IT", "Construction", "Medical", "Furniture", "Security", "High Value", "Closing Soon"].map((f) => (
              <button key={f} className="px-3 py-1.5 text-xs text-white/80 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-8">

        {/* ── 2. Quick Actions ── */}
        <section className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "list_alt", label: "Browse All Tenders", desc: "Explore open opportunities", color: "bg-[#4285f4]" },
              { icon: "how_to_vote", label: "My Bids", desc: "Track your submissions", color: "bg-[#34a853]" },
              { icon: "notifications_active", label: "Tender Alerts", desc: "Get notified instantly", color: "bg-[#fbbc04]" },
              { icon: "bookmark", label: "Saved Opportunities", desc: "Your shortlisted tenders", color: "bg-[#ea4335]" },
            ].map((a) => (
              <button key={a.label} className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-left border border-outline-variant/10">
                <div className={`w-10 h-10 ${a.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="material-symbols-outlined text-white text-lg">{a.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-on-surface font-headline">{a.label}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{a.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ── 3. Featured Tenders ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-primary font-headline">Recommended for You</h2>
            <Link href="#" className="text-xs text-secondary font-medium hover:underline flex items-center gap-1">
              View All <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredTenders.map((t) => (
              <div key={t.id} className="bg-white rounded-xl border border-outline-variant/10 overflow-hidden hover:shadow-lg transition-all">
                <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    t.tag === "Recommended" ? "bg-[#4285f4]/10 text-[#4285f4]" :
                    t.tag === "High Value" ? "bg-[#fbbc04]/10 text-[#b8860b]" :
                    "bg-[#ea4335]/10 text-[#ea4335]"
                  }`}>{t.tag}</span>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">bookmark_border</span>
                  </button>
                </div>
                <div className="px-5 pb-5 space-y-3">
                  <p className="text-[10px] font-mono text-on-surface-variant">{t.id}</p>
                  <p className="text-sm font-medium text-on-surface font-headline leading-snug">{t.title}</p>
                  <div className="space-y-1 text-xs text-on-surface-variant">
                    <p className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">account_balance</span>{t.dept}</p>
                    <p className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">location_on</span>{t.location}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="font-semibold text-primary">{t.value}</span>
                    <span className="text-[#ea4335] font-medium">Deadline: {t.deadline}</span>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button className="flex-1 py-2 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-container transition-colors">View Details</button>
                    <button className="flex-1 py-2 text-xs font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">Analyze</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Tender Listings ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-primary font-headline">All Open Tenders</h2>
            <select className="border border-outline-variant/20 rounded-lg px-3 py-1.5 text-xs bg-white text-on-surface outline-none">
              <option>Sort: Deadline (Soonest)</option>
              <option>Sort: Value (Highest)</option>
              <option>Sort: Newest First</option>
            </select>
          </div>
          <div className="space-y-4">
            {tenders.map((t) => (
              <div key={t.id} className="bg-white rounded-xl border border-outline-variant/10 hover:shadow-lg transition-all">
                {/* Header */}
                <div className="px-5 py-3 border-b border-outline-variant/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#fafafa] rounded-t-xl">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] font-mono text-on-surface-variant">{t.id}</span>
                    <span className="text-[10px] font-medium text-secondary uppercase tracking-wider bg-secondary/10 px-2 py-0.5 rounded">{t.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">bookmark_border</span>
                    </button>
                  </div>
                </div>
                {/* Body */}
                <div className="px-5 py-4 space-y-3">
                  <p className="text-sm font-medium text-on-surface font-headline">{t.title}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{t.desc}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs pt-1">
                    <div>
                      <p className="text-on-surface-variant">Department</p>
                      <p className="font-medium text-on-surface mt-0.5">{t.dept}</p>
                    </div>
                    <div>
                      <p className="text-on-surface-variant">Location</p>
                      <p className="font-medium text-on-surface mt-0.5">{t.location}</p>
                    </div>
                    <div>
                      <p className="text-on-surface-variant">Estimated Value</p>
                      <p className="font-semibold text-primary mt-0.5">{t.value}</p>
                    </div>
                    <div>
                      <p className="text-on-surface-variant">EMD</p>
                      <p className="font-medium text-on-surface mt-0.5">{t.emd}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10">
                    <span className="text-xs text-[#ea4335] font-medium">Deadline: {t.deadline}</span>
                    <div className="flex gap-2">
                      <button className="py-1.5 px-3 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-container transition-colors">View Details</button>
                      <button className="py-1.5 px-3 text-xs font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">Download Docs</button>
                      <button className="py-1.5 px-3 text-xs font-medium text-white bg-secondary rounded-lg hover:bg-secondary-container transition-colors">Apply / Bid</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Smart Insights ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <h2 className="text-lg font-medium text-primary font-headline mb-2">Smart Tender Insights</h2>
          <p className="text-xs text-on-surface-variant mb-6">AI-powered analysis for the selected tender — products needed, suggested OEMs, and risk assessment.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Products Required */}
            <div className="bg-white rounded-xl border border-outline-variant/10 p-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4285f4]">inventory_2</span>
                <p className="text-sm font-medium text-on-surface font-headline">Products Required</p>
              </div>
              <div className="space-y-2">
                {insightProducts.map((p) => (
                  <div key={p.name} className="flex items-center justify-between text-xs bg-surface-container rounded-lg px-3 py-2">
                    <div>
                      <p className="font-medium text-on-surface">{p.name}</p>
                      <p className="text-on-surface-variant">OEM: {p.oem}</p>
                    </div>
                    <span className="text-[#34a853] font-bold">{p.match}</span>
                  </div>
                ))}
              </div>
              <Link href="/products-oem" className="text-xs text-secondary font-medium hover:underline flex items-center gap-1">
                Find in OEM Directory <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>

            {/* Execution Complexity */}
            <div className="bg-white rounded-xl border border-outline-variant/10 p-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#fbbc04]">analytics</span>
                <p className="text-sm font-medium text-on-surface font-headline">Execution Analysis</p>
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between"><span className="text-on-surface-variant">Complexity</span><span className="font-medium text-[#fbbc04]">Medium</span></div>
                <div className="flex justify-between"><span className="text-on-surface-variant">Estimated Cost</span><span className="font-medium text-on-surface">₹1.45 — 1.65 Cr</span></div>
                <div className="flex justify-between"><span className="text-on-surface-variant">Timeline</span><span className="font-medium text-on-surface">8 — 12 weeks</span></div>
                <div className="flex justify-between"><span className="text-on-surface-variant">Suppliers Needed</span><span className="font-medium text-on-surface">3 — 4 OEMs</span></div>
                <div className="flex justify-between"><span className="text-on-surface-variant">Documentation</span><span className="font-medium text-on-surface">12 documents</span></div>
              </div>
            </div>

            {/* Risk Indicator */}
            <div className="bg-white rounded-xl border border-outline-variant/10 p-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ea4335]">shield</span>
                <p className="text-sm font-medium text-on-surface font-headline">Risk Assessment</p>
              </div>
              <div className="space-y-3 text-xs">
                {[
                  { label: "Competition Level", value: "High", color: "text-[#ea4335]" },
                  { label: "Compliance Risk", value: "Low", color: "text-[#34a853]" },
                  { label: "Delivery Risk", value: "Medium", color: "text-[#fbbc04]" },
                  { label: "Payment Terms", value: "Standard (30 days)", color: "text-on-surface" },
                  { label: "OEM Auth Required", value: "Yes — 2 products", color: "text-[#4285f4]" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between">
                    <span className="text-on-surface-variant">{r.label}</span>
                    <span className={`font-medium ${r.color}`}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. Tender Alerts ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-primary font-headline">Tender Alerts</h2>
              <p className="text-sm text-on-surface-variant">
                Never miss a relevant tender. Subscribe to alerts filtered by your preferred categories and locations.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Electrical", "IT", "Construction", "Medical", "Pan India", "Maharashtra", "Delhi"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs border border-outline-variant/20 rounded-full text-on-surface-variant hover:bg-primary/5 hover:text-primary cursor-pointer transition-colors">{tag}</span>
                ))}
              </div>
            </div>
            {alertSet ? (
              <div className="bg-white rounded-xl p-6 border border-outline-variant/10 shadow-md text-center space-y-2">
                <span className="material-symbols-outlined text-[#34a853] text-3xl">notifications_active</span>
                <p className="text-sm font-medium text-primary font-headline">Alert Set!</p>
                <p className="text-xs text-on-surface-variant">You&apos;ll receive tender notifications at your email.</p>
                <button onClick={() => setAlertSet(false)} className="text-xs text-secondary hover:underline">Change preferences</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setAlertSet(true); }} className="bg-white rounded-xl p-6 border border-outline-variant/10 shadow-md space-y-3">
                <input required type="email" value={alertEmail} onChange={(e) => setAlertEmail(e.target.value)} placeholder="Enter your email" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <select className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none">
                  <option>All Categories</option>
                  <option>Electrical</option>
                  <option>IT & Computers</option>
                  <option>Construction</option>
                  <option>Medical</option>
                </select>
                <select className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none">
                  <option>All Locations</option>
                  <option>Pan India</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                </select>
                <button type="submit" className="w-full py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-container transition-colors">
                  Set Alert
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── 9. My Bids ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <h2 className="text-lg font-medium text-primary font-headline mb-6">My Bids</h2>
          <div className="bg-white rounded-xl border border-outline-variant/10 overflow-hidden">
            <div className="grid grid-cols-5 gap-4 px-5 py-3 bg-[#fafafa] text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/10">
              <span>Tender ID</span>
              <span className="col-span-2">Title</span>
              <span>Status</span>
              <span>Bid Amount</span>
            </div>
            {myBids.map((b) => (
              <div key={b.id} className="grid grid-cols-5 gap-4 px-5 py-3.5 text-xs border-b border-outline-variant/5 hover:bg-surface-container/50 transition-colors items-center">
                <span className="font-mono text-on-surface-variant">{b.id.split("/").slice(-1)}</span>
                <span className="col-span-2 font-medium text-on-surface">{b.title}</span>
                <span className={`inline-flex items-center gap-1 font-medium ${
                  b.status === "Active" ? "text-[#4285f4]" :
                  b.status === "Submitted" ? "text-[#34a853]" : "text-[#fbbc04]"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {b.status}
                </span>
                <span className="font-medium text-on-surface">{b.amount}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-on-surface-variant mt-3">* Login required to view full bid history and manage submissions.</p>
        </section>
      </main>

      {/* ── 10. CTA ── */}
      <section className="bg-primary py-12 px-8 mt-6">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-xl font-medium text-white font-headline">Start Your Tender Journey Today</h2>
          <p className="text-sm text-on-primary-container">
            Discover tenders, analyze requirements, source products from verified OEMs, and submit winning bids.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="#" className="px-8 py-3 bg-secondary text-white text-sm font-medium rounded-xl hover:bg-secondary-container transition-colors">
              Explore Tenders
            </Link>
            <Link href="#" className="px-8 py-3 bg-white/10 text-white text-sm font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              Get Support
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-surface-container-low py-8 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest">© 2025 GovSeller · Tenders & Opportunities</p>
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

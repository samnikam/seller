"use client";

import { useState } from "react";
import Link from "next/link";
import PublicNav from "@/components/layout/PublicNav";
import Footer from "@/components/layout/Footer";

/* ── Dummy Data ── */

const services = [
  { icon: "notifications_active", title: "Tender Discovery & Alerts", desc: "Help sellers find relevant government tenders with smart filtering based on category, budget, and location. Get real-time updates and alerts.", color: "from-[#4285f4] to-[#1a73e8]" },
  { icon: "description", title: "Bid Preparation Assistance", desc: "Guidance on how to apply for tenders, help in pricing strategy (L1 concept), and complete documentation support.", color: "from-[#34a853] to-[#1e8e3e]" },
  { icon: "factory", title: "OEM & Product Sourcing Support", desc: "Connect sellers with verified OEMs, help in getting authorization from brands, and product sourcing assistance.", color: "from-[#fbbc04] to-[#f9a825]" },
  { icon: "account_balance", title: "Investment & Funding Support", desc: "Connect sellers with investors, help in arranging capital for large projects, and showcase funding opportunities.", color: "from-[#ea4335] to-[#c62828]" },
  { icon: "local_shipping", title: "Order Execution & Supply Chain Support", desc: "Track order progress, logistics and delivery coordination, and ensure timely project completion.", color: "from-[#7c3aed] to-[#5b21b6]" },
  { icon: "fact_check", title: "Documentation & Compliance Support", desc: "Help with required government documents, GST, certifications, approvals, and reduce rejection chances.", color: "from-[#0891b2] to-[#0e7490]" },
];

const workflowSteps = [
  { icon: "emoji_events", label: "Win Tender" },
  { icon: "factory", label: "Find OEM" },
  { icon: "verified", label: "Get Authorization" },
  { icon: "account_balance", label: "Arrange Funding" },
  { icon: "engineering", label: "Execute Project" },
  { icon: "payments", label: "Track Payment" },
];

const serviceRequests = [
  { id: "SR-4021", service: "OEM Authorization", project: "LED Street Lights — Smart City", status: "In Progress", team: "Auth Team A", updated: "16 Apr 2026" },
  { id: "SR-4018", service: "Funding Support", project: "IT Infra — District Offices", status: "Pending", team: "—", updated: "14 Apr 2026" },
  { id: "SR-4009", service: "Logistics", project: "Furniture — Central Secretariat", status: "Completed", team: "Logistics B", updated: "10 Apr 2026" },
];

const trustPoints = [
  { icon: "verified_user", title: "Verified Network", desc: "Access a trusted network of OEMs, logistics partners, and financial institutions." },
  { icon: "speed", title: "Faster Execution", desc: "Reduce project timelines with coordinated support across all stages." },
  { icon: "support_agent", title: "Expert Assistance", desc: "Dedicated support teams for authorization, funding, and compliance." },
  { icon: "all_inclusive", title: "End-to-End Support", desc: "From winning the tender to receiving payment — we cover every step." },
];

const serviceOptions = [
  "OEM Authorization Support",
  "Investment & Funding Support",
  "Logistics & Delivery Support",
  "Documentation & Compliance",
  "Project Execution Support",
  "Other",
];

export default function SellerServicesPage() {
  const [form, setForm] = useState({ service: "", project: "", description: "", budget: "", timeline: "", name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-surface text-on-background min-h-screen">
      <PublicNav activePage="Seller Services" />

      {/* ── 1. Hero ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/seller.jpg" alt="Support for Government Sellers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-5 px-4 md:px-8">
          <p className="text-secondary-container text-xs font-medium uppercase tracking-widest">Full Lifecycle Seller Support</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-headline">
            End-to-End Support for <span className="text-[#7eda9a]">Government Sellers</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
            From OEM authorization to project execution and payment tracking — get the support you need
            to deliver on your government tenders successfully.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href="/#requirement-form" className="px-8 py-3 bg-secondary text-white font-bold text-sm rounded-xl hover:bg-secondary-container transition-colors">Request Support</a>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-8">

        {/* ── 2. Problem → Solution ── */}
        <section className="py-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Problems */}
            <div className="bg-white rounded-xl border border-outline-variant/10 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ea4335]">warning</span>
                <p className="text-sm font-medium text-[#ea4335] font-headline">Common Seller Challenges</p>
              </div>
              {[
                { icon: "block", text: "Difficulty getting OEM authorization on time" },
                { icon: "money_off", text: "Lack of working capital and funding access" },
                { icon: "local_shipping", text: "Logistics coordination across multiple locations" },
                { icon: "description", text: "Complex documentation and compliance requirements" },
                { icon: "schedule", text: "Tight deadlines with no execution support" },
              ].map((p) => (
                <div key={p.text} className="flex items-start gap-3 text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[#ea4335]/60 text-base mt-0.5">{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
            {/* Solutions */}
            <div className="bg-white rounded-xl border border-outline-variant/10 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#34a853]">lightbulb</span>
                <p className="text-sm font-medium text-[#34a853] font-headline">How We Solve Them</p>
              </div>
              {[
                { icon: "verified", text: "Verified OEM network with fast authorization process" },
                { icon: "account_balance", text: "Funding support through partner banks and investors" },
                { icon: "route", text: "Logistics planning and real-time shipment tracking" },
                { icon: "task", text: "Documentation assistance and compliance checks" },
                { icon: "engineering", text: "Dedicated project execution and team coordination" },
              ].map((s) => (
                <div key={s.text} className="flex items-start gap-3 text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[#34a853]/60 text-base mt-0.5">{s.icon}</span>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Core Services ── */}
        <section id="services" className="py-14 border-t border-outline-variant/10">
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

      </main>

      {/* ── How It Works ── */}
      <section className="max-w-6xl mx-auto px-8 py-14 border-t border-outline-variant/10">
        <div className="text-center mb-10">
          <h2 className="text-xl font-medium text-primary font-headline">How It Works</h2>
        </div>
        {/* Desktop */}
        <div className="hidden md:block relative">
          <div className="absolute top-7 left-[5%] right-[5%] h-0.5 bg-outline-variant/20" />
          <div className="grid grid-cols-7 gap-2 relative">
            {[
              { num: "01", icon: "person_add", title: "Register as Seller" },
              { num: "02", icon: "search", title: "Explore Tenders" },
              { num: "03", icon: "gavel", title: "Apply Bids" },
              { num: "04", icon: "emoji_events", title: "Win Tender" },
              { num: "05", icon: "factory", title: "Find OEM" },
              { num: "06", icon: "verified", title: "Get Authorization" },
              { num: "07", icon: "account_balance", title: "Arrange Funding" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20 relative z-10">
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-4">Step {step.num}</span>
                <p className="text-xs font-medium text-on-surface font-headline mt-1">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden space-y-3">
          {[
            { num: "01", icon: "person_add", title: "Register as Seller" },
            { num: "02", icon: "search", title: "Explore Tenders" },
            { num: "03", icon: "gavel", title: "Apply Bids" },
            { num: "04", icon: "emoji_events", title: "Win Tender" },
            { num: "05", icon: "factory", title: "Find OEM" },
            { num: "06", icon: "verified", title: "Get Authorization" },
            { num: "07", icon: "account_balance", title: "Arrange Funding" },
          ].map((step) => (
            <div key={step.num} className="flex items-center gap-4">
              <div className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="material-symbols-outlined text-lg">{step.icon}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">Step {step.num}</span>
                <p className="text-sm font-medium text-on-surface font-headline">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

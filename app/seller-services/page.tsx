"use client";

import { useState } from "react";
import Link from "next/link";
import PublicNav from "@/components/layout/PublicNav";

/* ── Dummy Data ── */

const services = [
  { icon: "description", title: "OEM Authorization Support", desc: "Connect with verified OEMs, request authorization letters, and track approval status for tender compliance.", actions: ["Request Authorization", "Track Status"] },
  { icon: "account_balance", title: "Investment & Funding Support", desc: "Get loan assistance, connect with investors, and arrange working capital for your government projects.", actions: ["Apply for Funding", "Talk to Advisor"] },
  { icon: "local_shipping", title: "Logistics & Delivery Support", desc: "Plan transport routes, coordinate shipments, and track deliveries to meet tender deadlines.", actions: ["Plan Logistics", "Track Shipment"] },
  { icon: "fact_check", title: "Documentation & Compliance", desc: "Get help with tender documents, legal compliance, certifications, and bid preparation.", actions: ["Request Help", "Check Compliance"] },
  { icon: "engineering", title: "Project Execution Support", desc: "Task tracking, team coordination, milestone management, and on-ground execution assistance.", actions: ["Start Project", "Assign Team"] },
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
      <section className="bg-primary py-14 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <span className="material-symbols-outlined text-[40rem] absolute -right-32 -top-32 rotate-12">support_agent</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-5">
          <p className="text-secondary-container text-xs font-medium uppercase tracking-widest">Full Lifecycle Seller Support</p>
          <h1 className="text-2xl md:text-3xl font-medium text-white font-headline">
            End-to-End Support for Government Sellers
          </h1>
          <p className="text-on-primary-container text-sm max-w-2xl mx-auto">
            From OEM authorization to project execution and payment tracking — get the support you need
            to deliver on your government tenders successfully.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href="#services" className="px-8 py-3 bg-secondary text-white text-sm font-medium rounded-xl hover:bg-secondary-container transition-colors">
              Explore Services
            </a>
            <a href="#request" className="px-8 py-3 bg-white/10 text-white text-sm font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              Request Support
            </a>
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
        <section id="services" className="py-10 border-t border-outline-variant/10">
          <h2 className="text-lg font-medium text-primary font-headline mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-outline-variant/10 p-5 hover:shadow-lg transition-all space-y-3">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">{s.icon}</span>
                </div>
                <p className="text-sm font-medium text-on-surface font-headline">{s.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{s.desc}</p>
                <div className="flex gap-2 pt-1">
                  {s.actions.map((a, i) => (
                    <button key={a} className={`py-1.5 px-3 text-xs font-medium rounded-lg transition-colors ${
                      i === 0
                        ? "text-white bg-primary hover:bg-primary-container"
                        : "text-primary border border-primary/20 hover:bg-primary/5"
                    }`}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Service Workflow ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <h2 className="text-lg font-medium text-primary font-headline text-center mb-8">Your Seller Journey</h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {workflowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-2 w-24">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl">{step.icon}</span>
                  </div>
                  <span className="text-[10px] font-medium text-on-surface text-center leading-tight">{step.label}</span>
                </div>
                {i < workflowSteps.length - 1 && (
                  <span className="material-symbols-outlined text-outline-variant text-lg mb-4">arrow_forward</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Request Support Form ── */}
        <section id="request" className="py-10 border-t border-outline-variant/10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-primary font-headline">Request Support</h2>
              <p className="text-sm text-on-surface-variant">
                Tell us what you need and our team will get back to you within 24 hours with a tailored support plan.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  { icon: "send", text: "Submit your service request" },
                  { icon: "group", text: "Get assigned a dedicated support team" },
                  { icon: "track_changes", text: "Track progress in real-time" },
                  { icon: "check_circle", text: "Complete your project successfully" },
                ].map((s) => (
                  <div key={s.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-base">{s.icon}</span>
                    </div>
                    <span className="text-sm text-on-surface">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {submitted ? (
              <div className="bg-white rounded-xl p-8 border border-outline-variant/10 shadow-md text-center space-y-3">
                <div className="w-14 h-14 bg-[#34a853]/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[#34a853] text-3xl">check_circle</span>
                </div>
                <p className="text-sm font-medium text-primary font-headline">Request Submitted!</p>
                <p className="text-xs text-on-surface-variant">Our support team will contact you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ service: "", project: "", description: "", budget: "", timeline: "", name: "", email: "", phone: "" }); }} className="text-xs text-secondary font-medium hover:underline">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-xl p-6 border border-outline-variant/10 shadow-md space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-on-surface-variant">Service Required</label>
                  <select name="service" required value={form.service} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-on-surface-variant">Project / Tender Name</label>
                    <input name="project" required value={form.project} onChange={handleChange} placeholder="e.g. LED Lights — Smart City" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-on-surface-variant">Timeline</label>
                    <input name="timeline" required value={form.timeline} onChange={handleChange} placeholder="e.g. 4 weeks" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-on-surface-variant">Description</label>
                  <textarea name="description" required rows={3} value={form.description} onChange={handleChange} placeholder="Describe what support you need..." className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-on-surface-variant">Budget (optional)</label>
                    <input name="budget" value={form.budget} onChange={handleChange} placeholder="₹" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-on-surface-variant">Your Name</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Full name" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-on-surface-variant">Phone</label>
                    <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-on-surface-variant">Email</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <button type="submit" className="w-full py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">send</span>
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── 6. Service Dashboard ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <h2 className="text-lg font-medium text-primary font-headline mb-6">My Service Requests</h2>
          <div className="bg-white rounded-xl border border-outline-variant/10 overflow-hidden">
            <div className="grid grid-cols-6 gap-4 px-5 py-3 bg-[#fafafa] text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/10">
              <span>Request ID</span>
              <span>Service</span>
              <span className="col-span-2">Project</span>
              <span>Status</span>
              <span>Updated</span>
            </div>
            {serviceRequests.map((r) => (
              <div key={r.id} className="grid grid-cols-6 gap-4 px-5 py-3.5 text-xs border-b border-outline-variant/5 hover:bg-surface-container/50 transition-colors items-center">
                <span className="font-mono text-on-surface-variant">{r.id}</span>
                <span className="font-medium text-on-surface">{r.service}</span>
                <span className="col-span-2 text-on-surface-variant">{r.project}</span>
                <span className={`inline-flex items-center gap-1 font-medium ${
                  r.status === "In Progress" ? "text-[#4285f4]" :
                  r.status === "Completed" ? "text-[#34a853]" : "text-[#fbbc04]"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {r.status}
                </span>
                <span className="text-on-surface-variant">{r.updated}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-on-surface-variant mt-3">* Login required to view full service history and communicate with support teams.</p>
        </section>

        {/* ── 7. Trust Section ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <h2 className="text-lg font-medium text-primary font-headline text-center mb-8">Why Sellers Trust Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustPoints.map((tp) => (
              <div key={tp.title} className="bg-white rounded-xl p-5 border border-outline-variant/10 space-y-2 text-center">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-primary text-xl">{tp.icon}</span>
                </div>
                <p className="text-sm font-medium text-on-surface font-headline">{tp.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── 8. CTA ── */}
      <section className="bg-primary py-12 px-8 mt-6">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-xl font-medium text-white font-headline">Get the Support You Need to Execute Your Tender Successfully</h2>
          <p className="text-sm text-on-primary-container">
            OEM authorization, funding, logistics, documentation — we handle it all so you can focus on delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href="#request" className="px-8 py-3 bg-secondary text-white text-sm font-medium rounded-xl hover:bg-secondary-container transition-colors">
              Request Service
            </a>
            <Link href="#" className="px-8 py-3 bg-white/10 text-white text-sm font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-surface-container-low py-8 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest">© 2025 GovSeller · Seller Services</p>
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

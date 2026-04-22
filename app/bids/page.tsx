"use client";

import { useState } from "react";
import Link from "next/link";
import PublicNav from "@/components/layout/PublicNav";

/* ── Dummy Data ── */

const summaryCards = [
  { label: "Total Bids Submitted", value: "24", icon: "how_to_vote", color: "bg-[#4285f4]" },
  { label: "Active Bids", value: "8", icon: "pending_actions", color: "bg-[#fbbc04]" },
  { label: "Won Bids", value: "12", icon: "emoji_events", color: "bg-[#34a853]" },
  { label: "Lost Bids", value: "4", icon: "cancel", color: "bg-[#ea4335]" },
];

const bids = [
  { id: "GEM/2026/T/901234", title: "LED Street Lights — Smart City Phase III", dept: "Ministry of Urban Development", amount: "₹1.72 Cr", submitted: "15 Apr 2026", status: "Won", l1: "₹1.72 Cr" },
  { id: "GEM/2026/T/902134", title: "CCTV Surveillance — Railway Stations", dept: "Ministry of Railways", amount: "₹1.95 Cr", submitted: "12 Apr 2026", status: "Active", l1: "—" },
  { id: "GEM/2026/T/902267", title: "Solar Panels — Government Schools", dept: "Ministry of New & Renewable Energy", amount: "₹1.18 Cr", submitted: "10 Apr 2026", status: "Shortlisted", l1: "₹1.12 Cr" },
  { id: "GEM/2026/T/902390", title: "Desktop Computers — District Courts", dept: "Ministry of Law & Justice", amount: "₹68 Lakh", submitted: "08 Apr 2026", status: "Active", l1: "—" },
  { id: "GEM/2026/T/900812", title: "Office Furniture — Central Secretariat", dept: "Ministry of Home Affairs", amount: "₹45 Lakh", submitted: "01 Apr 2026", status: "Won", l1: "₹45 Lakh" },
  { id: "GEM/2026/T/902512", title: "Precast Concrete Pipes — Highway Drainage", dept: "Ministry of Road Transport", amount: "₹88 Lakh", submitted: "28 Mar 2026", status: "Rejected", l1: "₹82 Lakh" },
  { id: "GEM/2026/T/902645", title: "Patient Monitors — District Hospitals", dept: "Ministry of Health", amount: "₹1.48 Cr", submitted: "25 Mar 2026", status: "Won", l1: "₹1.48 Cr" },
  { id: "GEM/2026/T/903001", title: "Fire Safety Equipment — Govt Buildings", dept: "Ministry of Home Affairs", amount: "₹32 Lakh", submitted: "20 Mar 2026", status: "Rejected", l1: "₹28 Lakh" },
];

const statusColor: Record<string, string> = {
  "Active": "bg-[#4285f4]/10 text-[#4285f4]",
  "Shortlisted": "bg-[#fbbc04]/10 text-[#b8860b]",
  "Won": "bg-[#34a853]/10 text-[#34a853]",
  "Rejected": "bg-[#ea4335]/10 text-[#ea4335]",
};

const recommendedTenders = [
  { id: "GEM/2026/T/904001", title: "UPS Systems — State Data Centers", dept: "Ministry of IT", value: "₹2.40 Cr", deadline: "30 May 2026" },
  { id: "GEM/2026/T/904112", title: "Network Switches — District Offices", dept: "Ministry of Electronics", value: "₹1.10 Cr", deadline: "05 Jun 2026" },
  { id: "GEM/2026/T/904223", title: "Medical Beds — PHC Upgradation", dept: "Ministry of Health", value: "₹85 Lakh", deadline: "12 Jun 2026" },
];

const filters = ["All", "Active", "Shortlisted", "Won", "Rejected"];

export default function MyBidsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredBids = bids.filter((b) => {
    const matchesFilter = activeFilter === "All" || b.status === activeFilter;
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-surface text-on-background min-h-screen">
      <PublicNav activePage="Bids" />

      <main className="max-w-6xl mx-auto px-8 py-8">

        {/* ── 1. Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-xl font-medium text-on-surface font-headline">My Bids</h1>
            <p className="text-sm text-on-surface-variant mt-1">Track, manage, and monitor all your tender applications in one place.</p>
          </div>
          <div className="flex gap-2">
            <Link href="/tenders" className="inline-flex items-center gap-2 px-4 py-2.5 border border-primary/20 text-primary text-sm font-medium rounded-xl hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-lg">explore</span>
              Explore Tenders
            </Link>
            <Link href="/tenders" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-lg">add</span>
              Apply New Bid
            </Link>
          </div>
        </div>

        {/* ── 2. Summary Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {summaryCards.map((c) => (
            <div key={c.label} className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-md border border-outline-variant/10">
              <div className={`w-10 h-10 ${c.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined text-white text-lg">{c.icon}</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-on-surface font-headline">{c.value}</p>
                <p className="text-[11px] text-on-surface-variant uppercase tracking-wider">{c.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. Filters & Search ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${
                  activeFilter === f
                    ? "bg-primary text-white"
                    : "bg-white text-on-surface-variant border border-outline-variant/20 hover:bg-primary/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center bg-white border border-outline-variant/20 rounded-lg px-3 py-2 gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by tender ID or name..."
              className="bg-transparent text-sm w-56 outline-none placeholder:text-on-surface-variant/50"
            />
          </div>
        </div>

        {/* ── 4. Bid List ── */}
        <div className="space-y-3">
          {filteredBids.length === 0 && (
            <div className="bg-white rounded-xl p-12 text-center border border-outline-variant/10">
              <span className="material-symbols-outlined text-4xl text-outline-variant mb-3 block">search_off</span>
              <p className="text-sm text-on-surface-variant">No bids found matching your criteria.</p>
            </div>
          )}
          {filteredBids.map((bid) => (
            <div key={bid.id} className="bg-white rounded-xl border border-outline-variant/10 overflow-hidden hover:shadow-lg transition-all">
              {/* Bid Row */}
              <div className="px-5 py-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${statusColor[bid.status]}`}>{bid.status}</span>
                      <span className="text-[10px] font-mono text-on-surface-variant">{bid.id}</span>
                    </div>
                    <p className="text-sm font-medium text-on-surface font-headline">{bid.title}</p>
                    <p className="text-xs text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">account_balance</span>{bid.dept}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-6 text-xs flex-shrink-0">
                    <div>
                      <p className="text-on-surface-variant">Bid Amount</p>
                      <p className="font-semibold text-primary">{bid.amount}</p>
                    </div>
                    <div>
                      <p className="text-on-surface-variant">Submitted</p>
                      <p className="font-medium text-on-surface">{bid.submitted}</p>
                    </div>
                    <div>
                      <p className="text-on-surface-variant">L1 Bid</p>
                      <p className="font-medium text-on-surface">{bid.l1}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-outline-variant/10">
                  <button
                    onClick={() => setExpandedId(expandedId === bid.id ? null : bid.id)}
                    className="py-1.5 px-3 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-container transition-colors"
                  >
                    {expandedId === bid.id ? "Hide Details" : "View Details"}
                  </button>
                  {bid.status === "Active" && (
                    <button className="py-1.5 px-3 text-xs font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">edit</span>Edit Bid
                    </button>
                  )}
                  {bid.status === "Active" && (
                    <button className="py-1.5 px-3 text-xs font-medium text-[#ea4335] border border-[#ea4335]/20 rounded-lg hover:bg-[#ea4335]/5 transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">close</span>Withdraw
                    </button>
                  )}
                  {(bid.status === "Won" || bid.status === "Rejected") && (
                    <button className="py-1.5 px-3 text-xs font-medium text-on-surface-variant border border-outline-variant/20 rounded-lg hover:bg-surface-container transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">visibility</span>View Result
                    </button>
                  )}
                  {bid.status === "Won" && (
                    <Link href="/execution-support" className="py-1.5 px-3 text-xs font-medium text-white bg-[#34a853] rounded-lg hover:bg-[#2e9549] transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">rocket_launch</span>Proceed to Execution
                    </Link>
                  )}
                </div>
              </div>

              {/* ── Expanded Details ── */}
              {expandedId === bid.id && (
                <div className="border-t border-outline-variant/10 bg-[#fafafa]">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    {/* Tender Info */}
                    <div className="bg-white rounded-lg border border-outline-variant/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#4285f4] text-base">description</span>
                        <p className="text-xs font-medium text-on-surface font-headline">Tender Information</p>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between"><span className="text-on-surface-variant">Tender ID</span><span className="font-mono text-on-surface">{bid.id}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Department</span><span className="font-medium text-on-surface">{bid.dept}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Category</span><span className="font-medium text-on-surface">IT / Electrical</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Deadline</span><span className="font-medium text-on-surface">30 Apr 2026</span></div>
                      </div>
                    </div>

                    {/* Bid Details */}
                    <div className="bg-white rounded-lg border border-outline-variant/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#34a853] text-base">gavel</span>
                        <p className="text-xs font-medium text-on-surface font-headline">Your Bid</p>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between"><span className="text-on-surface-variant">Bid Amount</span><span className="font-semibold text-primary">{bid.amount}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Submitted On</span><span className="font-medium text-on-surface">{bid.submitted}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Documents</span><span className="font-medium text-on-surface">3 uploaded</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">EMD Paid</span><span className="font-medium text-[#34a853]">Yes</span></div>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="bg-white rounded-lg border border-outline-variant/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-base ${bid.status === "Won" ? "text-[#34a853]" : bid.status === "Rejected" ? "text-[#ea4335]" : "text-[#fbbc04]"}`}>
                          {bid.status === "Won" ? "emoji_events" : bid.status === "Rejected" ? "cancel" : "hourglass_top"}
                        </span>
                        <p className="text-xs font-medium text-on-surface font-headline">Result</p>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-on-surface-variant">Status</span>
                          <span className={`font-bold ${bid.status === "Won" ? "text-[#34a853]" : bid.status === "Rejected" ? "text-[#ea4335]" : "text-[#fbbc04]"}`}>{bid.status}</span>
                        </div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">L1 Bid</span><span className="font-medium text-on-surface">{bid.l1}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Total Bidders</span><span className="font-medium text-on-surface">{Math.floor(Math.random() * 15) + 5}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Your Rank</span><span className="font-medium text-on-surface">{bid.status === "Won" ? "L1" : bid.status === "Shortlisted" ? "L2" : bid.status === "Active" ? "Pending" : "L4"}</span></div>
                      </div>
                      {bid.status === "Won" && (
                        <Link href="/execution-support" className="block w-full py-2 mt-2 text-xs font-medium text-white bg-[#34a853] rounded-lg hover:bg-[#2e9549] transition-colors text-center">
                          Proceed to Execution Support →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── 5. Recommended Tenders ── */}
        <section className="mt-10 pt-8 border-t border-outline-variant/10">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-medium text-primary font-headline">Recommended Tenders</h2>
              <p className="text-xs text-on-surface-variant mt-1">Based on your bidding history and profile.</p>
            </div>
            <Link href="/tenders" className="text-xs text-secondary font-medium hover:underline flex items-center gap-1">
              View All <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {recommendedTenders.map((t) => (
              <div key={t.id} className="bg-white rounded-xl border border-outline-variant/10 p-5 hover:shadow-lg transition-all space-y-3">
                <span className="text-[10px] font-mono text-on-surface-variant">{t.id}</span>
                <p className="text-sm font-medium text-on-surface font-headline">{t.title}</p>
                <p className="text-xs text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">account_balance</span>{t.dept}
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-outline-variant/10">
                  <span className="font-semibold text-primary">{t.value}</span>
                  <span className="text-[#ea4335] font-medium">Deadline: {t.deadline}</span>
                </div>
                <button className="w-full py-2 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-container transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <p className="text-[10px] text-on-surface-variant mt-8">* Login required to manage bids, upload documents, and track results.</p>
      </main>
    </div>
  );
}

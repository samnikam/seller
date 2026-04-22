"use client";

import { useState } from "react";
import PublicNav from "@/components/layout/PublicNav";

/* ── Dummy Data ── */

const summaryCards = [
  { label: "Total Active Projects", value: "12", icon: "folder_open", color: "bg-[#4285f4]" },
  { label: "In Progress", value: "7", icon: "autorenew", color: "bg-[#34a853]" },
  { label: "Pending Actions", value: "3", icon: "pending_actions", color: "bg-[#fbbc04]" },
  { label: "Completed", value: "2", icon: "check_circle", color: "bg-[#ea4335]" },
];

const projects = [
  {
    id: "GEM/2026/T/901234",
    name: "LED Street Lights — Smart City Phase III",
    dept: "Ministry of Urban Development",
    value: "₹1.85 Cr",
    start: "01 Mar 2026",
    end: "30 Jun 2026",
    status: "In Progress",
    progress: 62,
    procurement: { sourced: 3, pending: 1, vendors: ["Havells India", "Polycab"] },
    payment: { paid: "₹74 Lakh", pending: "₹1.11 Cr", invoices: 2 },
    docs: ["Tender Document.pdf", "OEM Authorization — Havells.pdf", "Purchase Order.pdf"],
  },
  {
    id: "GEM/2026/T/902134",
    name: "CCTV Surveillance — Railway Stations",
    dept: "Ministry of Railways",
    value: "₹2.10 Cr",
    start: "15 Mar 2026",
    end: "15 Aug 2026",
    status: "In Progress",
    progress: 35,
    procurement: { sourced: 2, pending: 3, vendors: ["BEL", "Hikvision India"] },
    payment: { paid: "₹42 Lakh", pending: "₹1.68 Cr", invoices: 1 },
    docs: ["Tender Document.pdf", "Site Survey Report.pdf"],
  },
  {
    id: "GEM/2026/T/902267",
    name: "Solar Panels — Government Schools",
    dept: "Ministry of New & Renewable Energy",
    value: "₹1.25 Cr",
    start: "10 Feb 2026",
    end: "10 May 2026",
    status: "Delayed",
    progress: 48,
    procurement: { sourced: 2, pending: 2, vendors: ["Tata Power Solar"] },
    payment: { paid: "₹50 Lakh", pending: "₹75 Lakh", invoices: 3 },
    docs: ["Tender Document.pdf", "OEM Auth — Tata.pdf", "Delivery Challan.pdf"],
  },
  {
    id: "GEM/2026/T/902390",
    name: "Desktop Computers — District Courts",
    dept: "Ministry of Law & Justice",
    value: "₹72 Lakh",
    start: "20 Mar 2026",
    end: "20 May 2026",
    status: "Pending",
    progress: 15,
    procurement: { sourced: 0, pending: 2, vendors: [] },
    payment: { paid: "₹0", pending: "₹72 Lakh", invoices: 0 },
    docs: ["Tender Document.pdf"],
  },
  {
    id: "GEM/2026/T/900812",
    name: "Office Furniture — Central Secretariat",
    dept: "Ministry of Home Affairs",
    value: "₹48 Lakh",
    start: "01 Jan 2026",
    end: "28 Feb 2026",
    status: "Completed",
    progress: 100,
    procurement: { sourced: 4, pending: 0, vendors: ["Godrej & Boyce"] },
    payment: { paid: "₹48 Lakh", pending: "₹0", invoices: 4 },
    docs: ["Tender Document.pdf", "Completion Certificate.pdf", "Final Invoice.pdf"],
  },
];

const statusColor: Record<string, string> = {
  "In Progress": "bg-[#4285f4]/10 text-[#4285f4]",
  "Pending": "bg-[#fbbc04]/10 text-[#b8860b]",
  "Completed": "bg-[#34a853]/10 text-[#34a853]",
  "Delayed": "bg-[#ea4335]/10 text-[#ea4335]",
};

const progressColor: Record<string, string> = {
  "In Progress": "bg-[#4285f4]",
  "Pending": "bg-[#fbbc04]",
  "Completed": "bg-[#34a853]",
  "Delayed": "bg-[#ea4335]",
};

const supportOptions = [
  { icon: "inventory_2", label: "Product sourcing" },
  { icon: "factory", label: "OEM connection" },
  { icon: "payments", label: "Pricing help" },
  { icon: "local_shipping", label: "Logistics support" },
];

export default function ActiveProjectsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [supportOpen, setSupportOpen] = useState<string | null>(null);

  return (
    <div className="bg-surface text-on-background min-h-screen">
      <PublicNav activePage="Active Projects" />

      <main className="max-w-6xl mx-auto px-8 py-8">

        {/* ── 1. Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-xl font-medium text-on-surface font-headline">My Active Projects</h1>
            <p className="text-sm text-on-surface-variant mt-1">Track and manage all your ongoing tender projects in one place.</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-lg">add</span>
            Add New Project
          </button>
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

        {/* ── 3. Project List ── */}
        <div className="space-y-4">
          {projects.map((p) => (
            <div key={p.id} className="bg-white rounded-xl border border-outline-variant/10 overflow-hidden hover:shadow-lg transition-all">
              {/* Project Row */}
              <div className="px-5 py-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${statusColor[p.status]}`}>{p.status}</span>
                      <span className="text-[10px] font-mono text-on-surface-variant">{p.id}</span>
                    </div>
                    <p className="text-sm font-medium text-on-surface font-headline">{p.name}</p>
                    <p className="text-xs text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">account_balance</span>{p.dept}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-6 text-xs flex-shrink-0">
                    <div>
                      <p className="text-on-surface-variant">Value</p>
                      <p className="font-semibold text-primary">{p.value}</p>
                    </div>
                    <div>
                      <p className="text-on-surface-variant">Timeline</p>
                      <p className="font-medium text-on-surface">{p.start} — {p.end}</p>
                    </div>
                    <div>
                      <p className="text-on-surface-variant">Progress</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${progressColor[p.status]}`} style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="font-bold text-on-surface">{p.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-outline-variant/10">
                  <button
                    onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                    className="py-1.5 px-3 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-container transition-colors"
                  >
                    {expandedId === p.id ? "Hide Details" : "View Details"}
                  </button>
                  <button className="py-1.5 px-3 text-xs font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">upload_file</span>Upload Documents
                  </button>
                  <button
                    onClick={() => setSupportOpen(supportOpen === p.id ? null : p.id)}
                    className="py-1.5 px-3 text-xs font-medium text-secondary border border-secondary/20 rounded-lg hover:bg-secondary/5 transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">support_agent</span>Need Help?
                  </button>
                  <button className="py-1.5 px-3 text-xs font-medium text-on-surface-variant border border-outline-variant/20 rounded-lg hover:bg-surface-container transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">factory</span>Contact OEM
                  </button>
                </div>

                {/* Support Options */}
                {supportOpen === p.id && (
                  <div className="mt-3 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                    <p className="text-xs font-medium text-secondary mb-3">What do you need help with?</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {supportOptions.map((opt) => (
                        <button key={opt.label} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-outline-variant/10 text-xs text-on-surface hover:border-secondary hover:shadow-md transition-all">
                          <span className="material-symbols-outlined text-secondary text-base">{opt.icon}</span>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ── 4. Expanded Details ── */}
              {expandedId === p.id && (
                <div className="border-t border-outline-variant/10 bg-[#fafafa]">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
                    {/* Procurement Status */}
                    <div className="bg-white rounded-lg border border-outline-variant/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#4285f4] text-base">inventory_2</span>
                        <p className="text-xs font-medium text-on-surface font-headline">Procurement</p>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between"><span className="text-on-surface-variant">Products Sourced</span><span className="font-medium text-[#34a853]">{p.procurement.sourced}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Pending Items</span><span className="font-medium text-[#ea4335]">{p.procurement.pending}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Vendors</span><span className="font-medium text-on-surface">{p.procurement.vendors.length || "—"}</span></div>
                      </div>
                      {p.procurement.vendors.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {p.procurement.vendors.map((v) => (
                            <span key={v} className="text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded">{v}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Payment Status */}
                    <div className="bg-white rounded-lg border border-outline-variant/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#34a853] text-base">payments</span>
                        <p className="text-xs font-medium text-on-surface font-headline">Payment</p>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between"><span className="text-on-surface-variant">Paid</span><span className="font-medium text-[#34a853]">{p.payment.paid}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Pending</span><span className="font-medium text-[#ea4335]">{p.payment.pending}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Invoices</span><span className="font-medium text-on-surface">{p.payment.invoices}</span></div>
                      </div>
                    </div>

                    {/* Documents */}
                    <div className="bg-white rounded-lg border border-outline-variant/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#fbbc04] text-base">description</span>
                        <p className="text-xs font-medium text-on-surface font-headline">Documents</p>
                      </div>
                      <div className="space-y-1.5">
                        {p.docs.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                            <span className="material-symbols-outlined text-xs">attach_file</span>
                            <span className="truncate">{d}</span>
                          </div>
                        ))}
                      </div>
                      <button className="text-[10px] text-secondary font-medium hover:underline flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">upload</span>Upload New
                      </button>
                    </div>

                    {/* Execution Tracking */}
                    <div className="bg-white rounded-lg border border-outline-variant/10 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#ea4335] text-base">track_changes</span>
                        <p className="text-xs font-medium text-on-surface font-headline">Execution</p>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between"><span className="text-on-surface-variant">Overall Progress</span><span className="font-bold text-on-surface">{p.progress}%</span></div>
                        <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${progressColor[p.status]}`} style={{ width: `${p.progress}%` }} />
                        </div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Status</span><span className={`font-medium ${p.status === "Completed" ? "text-[#34a853]" : p.status === "Delayed" ? "text-[#ea4335]" : "text-[#4285f4]"}`}>{p.status}</span></div>
                        <div className="flex justify-between"><span className="text-on-surface-variant">Deadline</span><span className="font-medium text-on-surface">{p.end}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-[10px] text-on-surface-variant mt-6">* Login required to manage projects, upload documents, and track payments.</p>
      </main>
    </div>
  );
}

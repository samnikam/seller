"use client";

import { useState } from "react";
import PublicNav from "@/components/layout/PublicNav";
import Link from "next/link";

const categories = [
  { label: "Electronics & IT Equipment", count: 2480 },
  { label: "Machinery & Industrial Tools", count: 1350 },
  { label: "Vehicles & Transport", count: 620 },
  { label: "Office Supplies", count: 4120, checked: true },
  { label: "Construction Materials", count: 1890 },
  { label: "Medical Equipment", count: 970 },
];

const products = [
  {
    id: 1,
    category: "IT Hardware",
    title: "Dell PowerEdge R750 Server Rack (48-Unit)",
    desc: "High-performance rack servers configured for enterprise workloads with redundant power and RAID storage.",
    price: "₹4,20,000",
    unit: "per unit",
    rating: "4.8",
    badge: "Verified OEM",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  {
    id: 2,
    category: "Office Supplies",
    title: "Executive Ergonomic Chair (100-Unit Lot)",
    desc: "Government-grade ergonomic seating with lumbar support, certified for 8-hour operational use.",
    price: "₹12,500",
    unit: "per unit",
    rating: "4.6",
    badge: "Authority Guaranteed",
    badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
  },
  {
    id: 3,
    category: "Logistics",
    title: "Containerized Cold-Chain Transport (Monthly)",
    desc: "Temperature-controlled freight services for pharmaceutical and perishable government inventory.",
    price: "₹1,85,000",
    unit: "per month",
    rating: "4.9",
    badge: "Verified OEM",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  {
    id: 4,
    category: "IT Hardware",
    title: "Cisco Catalyst 9300 Network Switch (24-port)",
    desc: "Enterprise-grade managed network switches for secure government LAN infrastructure.",
    price: "₹2,10,000",
    unit: "per unit",
    rating: "4.7",
    badge: "Verified OEM",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  {
    id: 5,
    category: "Healthcare",
    title: "ICU Patient Monitor (Bedside Unit)",
    desc: "Multi-parameter patient monitoring system with integrated alarm management for critical care wards.",
    price: "₹3,50,000",
    unit: "per unit",
    rating: "4.9",
    badge: "Authority Guaranteed",
    badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
  },
  {
    id: 6,
    category: "Maintenance",
    title: "Industrial Generator (250 KVA, Diesel)",
    desc: "Heavy-duty standby power solutions for government buildings, substations, and critical infrastructure.",
    price: "₹8,75,000",
    unit: "per unit",
    rating: "4.5",
    badge: "Verified OEM",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-surface text-on-background min-h-screen">
      <PublicNav activePage="Marketplace" />

      {/* ── Search Bar ── */}
      <div className="bg-surface-container-low/50 border-b border-outline-variant/15 py-4">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="flex items-center bg-white rounded-xl shadow-md shadow-primary/5 border border-outline-variant/15 px-5 py-3 gap-3 max-w-2xl mx-auto">
            <span className="material-symbols-outlined text-on-surface-variant">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, categories, suppliers..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-on-surface placeholder:text-on-surface-variant/50"
            />
            <button className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-container transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <main className="flex max-w-[1920px] mx-auto px-8 py-8 gap-12">
        {/* ── Filter Sidebar ── */}
        <aside className="w-72 hidden xl:flex flex-col gap-10 flex-shrink-0">
          {/* Categories */}
          <section>
            <h3 className="text-primary font-headline font-bold text-lg mb-6 uppercase tracking-wider">
              Categories
            </h3>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <label
                  key={cat.label}
                  className="flex items-center gap-3 px-4 py-2 bg-surface-container-lowest rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors group"
                >
                  <input
                    type="checkbox"
                    defaultChecked={cat.checked}
                    className="rounded text-primary focus:ring-primary border-outline-variant"
                  />
                  <span className="text-sm font-medium text-on-surface">{cat.label}</span>
                  <span className="ml-auto text-xs text-outline group-hover:text-primary">
                    {cat.count}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Price range */}
          <section>
            <h3 className="text-primary font-headline font-bold text-lg mb-6 uppercase tracking-wider">
              Price Range
            </h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="10000000"
                defaultValue="5000000"
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-on-surface-variant font-medium">
                <span>₹0</span>
                <span>₹50L+</span>
              </div>
            </div>
          </section>

          {/* Vendor status */}
          <section>
            <h3 className="text-primary font-headline font-bold text-lg mb-6 uppercase tracking-wider">
              Vendor Status
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Authority Guaranteed", checked: true },
                { label: "KYC Verified", checked: true },
                { label: "OEM Certified" },
                { label: "MSME Registered" },
              ].map((opt) => (
                <label
                  key={opt.label}
                  className="flex items-center gap-3 px-4 py-2 bg-surface-container-lowest rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors"
                >
                  <input
                    type="checkbox"
                    defaultChecked={opt.checked}
                    className="rounded text-primary focus:ring-primary border-outline-variant"
                  />
                  <span className="text-sm font-medium text-on-surface">{opt.label}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Authority promo */}
          <div className="bg-primary p-6 rounded-xl text-white space-y-3">
            <span className="material-symbols-outlined text-tertiary-fixed">shield</span>
            <h4 className="font-headline font-bold text-sm">Authority Guaranteed</h4>
            <p className="text-[11px] text-on-primary-container/80 leading-relaxed">
              All products carry a government-backed quality assurance and on-time delivery
              commitment.
            </p>
            <a href="#" className="text-tertiary-fixed text-xs font-bold hover:underline">
              Learn More →
            </a>
          </div>
        </aside>

        {/* ── Product Grid ── */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-black text-primary font-headline">All Products</h1>
              <p className="text-sm text-on-surface-variant mt-1">
                Showing 6 of 428 verified products
              </p>
            </div>
            <div className="flex items-center gap-4">
              <select className="bg-surface-container-low border-none rounded-xl px-4 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary outline-none">
                <option>Sort: Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              <button className="p-2 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-primary">grid_view</span>
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-0.5 transition-all group"
              >
                {/* Image placeholder */}
                <div className="h-40 bg-surface-container-high relative flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-primary/20 text-7xl group-hover:scale-110 transition-transform duration-500">
                    inventory_2
                  </span>
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold ${product.badgeColor}`}>
                    {product.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-secondary-container">
                      <span className="material-symbols-outlined text-sm">star</span>
                      <span className="text-xs font-bold text-on-surface-variant">{product.rating}</span>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-primary leading-snug font-headline">
                    {product.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                    {product.desc}
                  </p>
                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="text-xl font-black text-primary font-headline">{product.price}</span>
                    <span className="text-xs text-outline">{product.unit}</span>
                  </div>
                  <Link
                    href="/login"
                    className="block w-full py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-container transition-colors text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_left</span>
            </button>
            {[1, 2, 3, "...", 42].map((page, i) => (
              <button
                key={i}
                className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                  page === 1
                    ? "bg-primary text-white"
                    : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 h-16 w-16 bg-secondary-container rounded-full flex items-center justify-center shadow-2xl shadow-secondary/30 hover:scale-110 transition-transform z-50">
        <span className="material-symbols-outlined text-white text-2xl">shopping_cart</span>
      </button>

      {/* Footer */}
      <footer className="mt-16 bg-surface-container-low py-8 px-8">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest">
            © 2025 GovSeller · All procurement subject to GFR 2017
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Support", "Accessibility"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] text-on-surface-variant/60 hover:text-primary uppercase tracking-widest transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

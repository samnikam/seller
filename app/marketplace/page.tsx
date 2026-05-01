"use client";

import { useState } from "react";
import PublicNav from "@/components/layout/PublicNav";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

const categoryList = [
  "Electronics & IT Equipment",
  "Machinery & Industrial Tools",
  "Vehicles & Transport",
  "Office Supplies",
  "Construction Materials",
  "Medical Equipment",
];

const products = [
  // Electronics & IT Equipment
  { id: 1, name: "Desktop Computer", category: "Electronics & IT Equipment", img: "/desktop.jpg", slug: "desktop-computer" },
  { id: 2, name: "Laptop", category: "Electronics & IT Equipment", img: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg", slug: "laptop" },
  { id: 3, name: "Network Switch 24-Port", category: "Electronics & IT Equipment", img: "/switch.jpg", slug: "network-switch" },
  { id: 4, name: "Computer Printer", category: "Electronics & IT Equipment", img: "/printer.jpg", slug: "printer" },

  // Machinery & Industrial Tools
  { id: 5, name: "CNC Lathe Machine", category: "Machinery & Industrial Tools", img: "/cnc.jpg", slug: "cnc-lathe-machine" },
  { id: 6, name: "Hydraulic Press", category: "Machinery & Industrial Tools", img: "https://5.imimg.com/data5/SELLER/Default/2022/12/BI/QR/LR/2702488/hydraulic-press-machine-500x500.jpg", slug: "hydraulic-press" },
  { id: 7, name: "Welding Machine", category: "Machinery & Industrial Tools", img: "https://m.media-amazon.com/images/I/71Yt8Z5HKWL._SL1500_.jpg", slug: "welding-machine" },

  // Vehicles & Transport
  { id: 8, name: "Passenger Car Sedan", category: "Vehicles & Transport", img: "https://m.media-amazon.com/images/I/61YPYKTyBEL._SL1500_.jpg", slug: "passenger-car" },
  { id: 9, name: "Electric Bus", category: "Vehicles & Transport", img: "https://5.imimg.com/data5/SELLER/Default/2023/6/316889556/YN/KV/BI/2836751/electric-bus-500x500.png", slug: "electric-bus" },
  { id: 10, name: "Ambulance Vehicle", category: "Vehicles & Transport", img: "https://5.imimg.com/data5/SELLER/Default/2021/1/GI/YN/QE/2836751/ambulance-500x500.jpg", slug: "ambulance" },

  // Office Supplies
  { id: 11, name: "Executive Office Chair", category: "Office Supplies", img: "https://m.media-amazon.com/images/I/71Xr-FtEajL._SL1500_.jpg", slug: "office-chair" },
  { id: 12, name: "Steel Filing Cabinet", category: "Office Supplies", img: "https://m.media-amazon.com/images/I/71Yt8Z5HKWL._SL1500_.jpg", slug: "filing-cabinet" },
  { id: 13, name: "Whiteboard 4x3 ft", category: "Office Supplies", img: "https://m.media-amazon.com/images/I/61QGMX0Qy0L._SL1500_.jpg", slug: "whiteboard" },

  // Construction Materials
  { id: 14, name: "Portland Cement OPC 53", category: "Construction Materials", img: "https://5.imimg.com/data5/SELLER/Default/2021/4/FP/HQ/YN/6aboratories-500x500.jpg", slug: "cement-bags" },
  { id: 15, name: "TMT Steel Bars", category: "Construction Materials", img: "https://5.imimg.com/data5/SELLER/Default/2022/7/BI/QR/LR/2702488/tmt-steel-bars-500x500.jpg", slug: "steel-tmt-bars" },
  { id: 16, name: "PVC Pipes", category: "Construction Materials", img: "https://5.imimg.com/data5/SELLER/Default/2022/12/BI/QR/LR/2702488/pvc-pipes-500x500.jpg", slug: "pvc-pipes" },

  // Medical Equipment
  { id: 17, name: "Patient Monitor ICU", category: "Medical Equipment", img: "https://m.media-amazon.com/images/I/61DYiMzmYOL._SL1500_.jpg", slug: "patient-monitor" },
  { id: 18, name: "Oxygen Concentrator", category: "Medical Equipment", img: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SL1500_.jpg", slug: "oxygen-concentrator" },
  { id: 19, name: "Wheelchair Foldable", category: "Medical Equipment", img: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg", slug: "wheelchair" },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

  const handleCategoryChange = (cat: string, checked: boolean) => {
    const next = new Set(selectedCategories);
    if (checked) next.add(cat); else next.delete(cat);
    setSelectedCategories(next);
  };

  const filteredProducts = products.filter((p) => {
    if (selectedCategories.size > 0 && !selectedCategories.has(p.category)) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="bg-surface text-on-background min-h-screen">
      <PublicNav activePage="Marketplace" />

      {/* Search Bar */}
      <div className="bg-surface-container-low/50 border-b border-outline-variant/15 py-4">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="flex items-center bg-white rounded-xl shadow-md shadow-primary/5 border border-outline-variant/15 px-5 py-3 gap-3 max-w-2xl mx-auto">
            <span className="material-symbols-outlined text-on-surface-variant">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, categories..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-on-surface placeholder:text-on-surface-variant/50"
            />
            <button className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-container transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <main className="flex max-w-[1920px] mx-auto px-8 py-8 gap-12">
        {/* Sidebar */}
        <aside className="w-72 hidden xl:flex flex-col gap-10 flex-shrink-0">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-primary font-headline font-bold text-lg uppercase tracking-wider">Categories</h3>
              {selectedCategories.size > 0 && (
                <button onClick={() => setSelectedCategories(new Set())} className="text-xs text-secondary font-medium hover:underline">Clear</button>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {categoryList.map((cat) => {
                const count = products.filter((p) => p.category === cat).length;
                return (
                  <label
                    key={cat}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-colors group ${
                      selectedCategories.has(cat) ? "bg-primary/5 border border-primary/20" : "bg-surface-container-lowest hover:bg-surface-container-low"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.has(cat)}
                      onChange={(e) => handleCategoryChange(cat, e.target.checked)}
                      className="rounded text-primary focus:ring-primary border-outline-variant"
                    />
                    <span className="text-sm font-medium text-on-surface">{cat}</span>
                    <span className="ml-auto text-xs text-outline group-hover:text-primary">{count}</span>
                  </label>
                );
              })}
            </div>
          </section>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-primary font-headline">All Products<span className="block w-24 h-1 bg-gradient-to-r from-secondary to-secondary-container rounded-full mt-2" /></h1>
              <p className="text-sm text-on-surface-variant mt-1">
                Showing {filteredProducts.length} of {products.length} products
                {selectedCategories.size > 0 && (
                  <span className="ml-1 text-primary">in {Array.from(selectedCategories).join(", ")}</span>
                )}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-16 space-y-3">
                <span className="material-symbols-outlined text-on-surface-variant/30 text-6xl">search_off</span>
                <p className="text-on-surface-variant text-sm">No products found</p>
                <button onClick={() => { setSearch(""); setSelectedCategories(new Set()); }} className="text-primary text-sm font-bold hover:underline">Clear all filters</button>
              </div>
            )}
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/marketplace/${(product as any).slug}`}
                className="bg-white rounded-xl border border-outline-variant/15 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="h-44 bg-surface-container-high flex items-center justify-center overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-on-surface font-headline truncate">{product.name}</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">{product.category}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_left</span>
            </button>
            {[1, 2, 3, "...", 10].map((page, i) => (
              <button
                key={i}
                className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                  page === 1 ? "bg-primary text-white" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"
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

      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import PublicNav from "@/components/layout/PublicNav";
import Footer from "@/components/layout/Footer";

type ProductRow = { name: string; seller: string; oem: string; catalog: string; valueLast: string; valueCurr: string; volLast: string; volCurr: string; link: string };
type ServiceRow = { name: string; provider: string; catalog: string; valueLast: string; valueCurr: string; volLast: string; volCurr: string };

export default function BusinessOpportunityPage() {
  const [tab, setTab] = useState<"products" | "services">("products");
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState("Category Name");
  const [rangeFilter, setRangeFilter] = useState("");

  const productSearchFields = [
    "Category Name",
    "Order Value(Current FY)",
    "Order Volume(Current FY)",
    "Order Value(Last FY)",
    "Order Volume(Last FY)",
    "Seller/Service Provider count",
    "Catalog count",
    "OEM count",
  ];

  const serviceSearchFields = [
    "Category Name",
    "Order Value(Current FY)",
    "Order Volume(Current FY)",
    "Order Value(Last FY)",
    "Order Volume(Last FY)",
    "Seller/Service Provider count",
    "Catalog count",
  ];

  const searchFields = tab === "products" ? productSearchFields : serviceSearchFields;

  const valueRanges = [
    { label: "< 50 Lacs", min: 0, max: 5000000 },
    { label: "50 Lacs to 1 Cr", min: 5000000, max: 10000000 },
    { label: "1 Cr to 5 Cr", min: 10000000, max: 50000000 },
    { label: "5 Cr and above", min: 50000000, max: Infinity },
  ];

  const volumeRanges = [
    { label: "< 10", min: 0, max: 10 },
    { label: "10 to 100", min: 10, max: 100 },
    { label: "100 to 1000", min: 100, max: 1000 },
    { label: "1000 to 10000", min: 1000, max: 10000 },
    { label: "10000 and above", min: 10000, max: Infinity },
  ];

  const countRangesSmall = [
    { label: "0", min: 0, max: 1 },
    { label: "1-3", min: 1, max: 4 },
    { label: "4-10", min: 4, max: 11 },
    { label: "more than 10", min: 11, max: Infinity },
  ];

  const countRangesLarge = [
    { label: "0", min: 0, max: 1 },
    { label: "1-3", min: 1, max: 4 },
    { label: "4-10", min: 4, max: 11 },
    { label: "11 to 100", min: 11, max: 101 },
    { label: "more than 100", min: 101, max: Infinity },
  ];

  const isValueField = searchField.startsWith("Order Value");
  const isVolumeField = searchField.startsWith("Order Volume");
  const isOemCount = searchField === "OEM count";
  const isSellerCount = searchField === "Seller/Service Provider count";
  const isCatalogCount = searchField === "Catalog count";
  const isCountField = isOemCount || isSellerCount || isCatalogCount;
  const showRangeDropdown = isValueField || isVolumeField || isCountField;
  const activeRanges = isValueField ? valueRanges : isVolumeField ? volumeRanges : isOemCount ? countRangesSmall : countRangesLarge;

  const parseNum = (s: string) => {
    const n = Number(s.replace(/,/g, ""));
    return isNaN(n) ? 0 : n;
  };
  const [productData, setProductData] = useState<ProductRow[]>([]);
  const [serviceData, setServiceData] = useState<ServiceRow[]>([]);
  const [loading, setLoading] = useState(true);

  const [productPage, setProductPage] = useState(1);
  const [servicePage, setServicePage] = useState(1);
  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    Promise.all([
      fetch("/product-catalog.tsv").then((r) => r.text()),
      fetch("/service-catalog.tsv").then((r) => r.text()).catch(() => ""),
    ]).then(([prodText, servText]) => {
      // Parse products
      const prodLines = prodText.split("\n").filter((l) => l.trim());
      const prodRows: ProductRow[] = [];
      for (let i = 1; i < prodLines.length; i++) {
        const cols = prodLines[i].split("\t");
        if (cols[0]?.trim()) {
          prodRows.push({
            name: cols[0]?.trim() || "",
            seller: cols[1]?.trim() || "0",
            oem: cols[2]?.trim() || "0",
            catalog: cols[3]?.trim() || "0",
            valueLast: cols[4]?.trim() || "0",
            valueCurr: cols[5]?.trim() || "0",
            volLast: cols[6]?.trim() || "0",
            volCurr: cols[7]?.trim() || "0",
            link: cols[8]?.trim() || "#",
          });
        }
      }
      setProductData(prodRows);

      // Parse services
      if (servText) {
        const servLines = servText.split("\n").filter((l) => l.trim());
        const servRows: ServiceRow[] = [];
        for (let i = 1; i < servLines.length; i++) {
          const cols = servLines[i].split("\t");
          if (cols[0]?.trim()) {
            servRows.push({
              name: cols[0]?.trim() || "",
              provider: cols[1]?.trim() || "0",
              catalog: cols[2]?.trim() || "0",
              valueLast: cols[3]?.trim() || "0",
              valueCurr: cols[4]?.trim() || "0",
              volLast: cols[5]?.trim() || "0",
              volCurr: cols[6]?.trim() || "0",
            });
          }
        }
        setServiceData(servRows);
      }
      setLoading(false);
    });
  }, []);

  const getFieldValue = (row: ProductRow | ServiceRow, field: string): string => {
    switch (field) {
      case "Order Value(Current FY)": return row.valueCurr;
      case "Order Volume(Current FY)": return row.volCurr;
      case "Order Value(Last FY)": return row.valueLast;
      case "Order Volume(Last FY)": return row.volLast;
      case "Seller/Service Provider count": return "seller" in row ? row.seller : (row as ServiceRow).provider;
      case "Catalog count": return row.catalog;
      case "OEM count": return "oem" in row ? (row as ProductRow).oem : "0";
      default: return row.name;
    }
  };

  const matchRow = (row: ProductRow | ServiceRow) => {
    // Range filter
    if (showRangeDropdown && rangeFilter) {
      const range = activeRanges.find((r) => r.label === rangeFilter);
      if (range) {
        const val = parseNum(getFieldValue(row, searchField));
        if (val < range.min || val >= range.max) return false;
      }
    }
    // Text search
    if (search.trim()) {
      if (searchField === "Category Name") {
        return row.name.toLowerCase().includes(search.toLowerCase());
      }
      return getFieldValue(row, searchField).includes(search.trim());
    }
    return true;
  };

  const filteredProducts = productData.filter((p) => matchRow(p));
  const totalProductPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((productPage - 1) * ITEMS_PER_PAGE, productPage * ITEMS_PER_PAGE);

  const filteredServices = serviceData.filter((s) => matchRow(s));
  const totalServicePages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = filteredServices.slice((servicePage - 1) * ITEMS_PER_PAGE, servicePage * ITEMS_PER_PAGE);

  const getPageNumbers = (current: number, total: number) => {
    const pages: (number | string)[] = [];
    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      if (current > 3) pages.push("...");
      for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
      if (current < total - 2) pages.push("...");
      pages.push(total);
    }
    return pages;
  };

  return (
    <div className="bg-[#f0f6ff] text-[#333] min-h-screen">
      <PublicNav activePage="Investment & Opportunities" />

      <div className="max-w-[1500px] mx-auto px-4 md:px-8 py-6">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
          <div className="flex gap-0">
            <button onClick={() => { setTab("products"); setSearch(""); setRangeFilter(""); setSearchField("Category Name"); setProductPage(1); }} className={`px-6 py-3 text-sm font-medium transition-colors ${tab === "products" ? "text-[#002869] border-b-[3px] border-[#002869]" : "text-[#666] border-b-[3px] border-transparent hover:text-[#333]"}`}>Products</button>
            <button onClick={() => { setTab("services"); setSearch(""); setRangeFilter(""); setSearchField("Category Name"); setServicePage(1); }} className={`px-6 py-3 text-sm font-medium transition-colors ${tab === "services" ? "text-[#002869] border-b-[3px] border-[#002869]" : "text-[#666] border-b-[3px] border-transparent hover:text-[#333]"}`}>Services</button>
          </div>
          <div className="flex items-center gap-2">
            <select value={searchField} onChange={(e) => { setSearchField(e.target.value); setSearch(""); setRangeFilter(""); setProductPage(1); setServicePage(1); }} className="border border-[#ccc] rounded px-3 py-2 text-sm bg-white outline-none">
              {searchFields.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            {showRangeDropdown ? (
              <select value={rangeFilter} onChange={(e) => { setRangeFilter(e.target.value); setProductPage(1); setServicePage(1); }} className="border border-[#f90] rounded px-3 py-2 text-sm bg-white outline-none min-w-[180px] text-[#f90] font-medium">
                <option value="">All</option>
                {activeRanges.map((r) => (
                  <option key={r.label} value={r.label}>{r.label}</option>
                ))}
              </select>
            ) : (
              <div className="flex">
                <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setProductPage(1); setServicePage(1); }} placeholder="Search" className="border border-[#ccc] rounded-l px-3 py-2 text-sm w-48 md:w-64 outline-none" />
                <button className="border border-l-0 border-[#ccc] px-3 py-2 rounded-r hover:bg-[#f5f5f5]">
                  <span className="material-symbols-outlined text-[#666] text-lg">search</span>
                </button>
              </div>
            )}
            <button className="border border-[#ccc] px-3 py-2 rounded hover:bg-[#f5f5f5]">
              <span className="material-symbols-outlined text-[#666] text-lg">sync</span>
            </button>
          </div>
        </div>


        {loading ? (
          <div className="text-center py-20 text-[#999]">Loading data...</div>
        ) : (
          <>
            {/* Products Table */}
            {tab === "products" && (
              <div className="overflow-x-auto border border-[#e0e0e0] rounded">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8f8f8] border-b border-[#e0e0e0]">
                      <th className="text-left px-4 py-3 font-medium text-[#333] min-w-[300px]">Category Name <span className="material-symbols-outlined text-[#ccc] text-xs align-middle ml-1">swap_vert</span></th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Seller</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">OEM</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Catalog</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Order Value (Last FY) ₹ <span className="material-symbols-outlined text-[#4285f4] text-xs align-middle ml-1">arrow_downward</span></th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Order Value (Current FY) ₹</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Order Volume (Last FY)</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Order Volume (Current FY)</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">List of Brands</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedProducts.map((row, i) => (
                      <tr key={i} className={`border-b border-[#eee] hover:bg-[#f5f8ff] transition-colors ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                        <td className="px-4 py-3 text-[#333]">{row.name}</td>
                        <td className="px-4 py-3 text-[#333]">{row.seller}</td>
                        <td className="px-4 py-3 text-[#333]">{row.oem}</td>
                        <td className="px-4 py-3 text-[#333]">{row.catalog}</td>
                        <td className="px-4 py-3 text-[#333]">{row.valueLast}</td>
                        <td className="px-4 py-3 text-[#333]">{row.valueCurr}</td>
                        <td className="px-4 py-3 text-[#333]">{row.volLast}</td>
                        <td className="px-4 py-3 text-[#333]">{row.volCurr}</td>
                        <td className="px-4 py-3">
                          <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-[#4285f4] font-medium hover:underline whitespace-nowrap">VIEW BRANDS</a>
                        </td>
                      </tr>
                    ))}
                    {filteredProducts.length === 0 && (
                      <tr><td colSpan={9} className="px-4 py-8 text-center text-[#999]">No products found{search && <> matching &ldquo;{search}&rdquo;</>}</td></tr>
                    )}
                  </tbody>
                </table>
                <div className="px-4 py-2 bg-[#f8f8f8] text-xs text-[#999] border-t border-[#e0e0e0] flex items-center justify-between">
                  <span>Showing {(productPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(productPage * ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} categories</span>
                </div>
                {/* Pagination */}
                {totalProductPages > 1 && (
                  <div className="flex items-center justify-center gap-1 py-4 bg-[#f8f8f8] border-t border-[#e0e0e0]">
                    <button onClick={() => setProductPage(Math.max(1, productPage - 1))} disabled={productPage === 1} className="px-3 py-1.5 text-sm border border-[#ccc] rounded hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed">&laquo; Prev</button>
                    {getPageNumbers(productPage, totalProductPages).map((p, i) => (
                      typeof p === "string" ? (
                        <span key={i} className="px-2 py-1.5 text-sm text-[#999]">...</span>
                      ) : (
                        <button key={i} onClick={() => setProductPage(p)} className={`px-3 py-1.5 text-sm border rounded transition-colors ${productPage === p ? "bg-[#002869] text-white border-[#002869]" : "border-[#ccc] text-[#333] hover:bg-white"}`}>{p}</button>
                      )
                    ))}
                    <button onClick={() => setProductPage(Math.min(totalProductPages, productPage + 1))} disabled={productPage === totalProductPages} className="px-3 py-1.5 text-sm border border-[#ccc] rounded hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed">Next &raquo;</button>
                  </div>
                )}
              </div>
            )}

            {/* Services Table */}
            {tab === "services" && (
              <div className="overflow-x-auto border border-[#e0e0e0] rounded">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8f8f8] border-b border-[#e0e0e0]">
                      <th className="text-left px-4 py-3 font-medium text-[#333] min-w-[300px]">Category Name <span className="material-symbols-outlined text-[#ccc] text-xs align-middle ml-1">swap_vert</span></th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Service Provider</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Catalog</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Order Value (Last FY) ₹ <span className="material-symbols-outlined text-[#4285f4] text-xs align-middle ml-1">arrow_downward</span></th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Order Value (Current FY) ₹</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Order Volume (Last FY)</th>
                      <th className="text-left px-4 py-3 font-medium text-[#333]">Order Volume (Current FY)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedServices.map((row, i) => (
                      <tr key={i} className={`border-b border-[#eee] hover:bg-[#f5f8ff] transition-colors ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                        <td className="px-4 py-3 text-[#333]">{row.name}</td>
                        <td className="px-4 py-3 text-[#333]">{row.provider}</td>
                        <td className="px-4 py-3 text-[#333]">{row.catalog}</td>
                        <td className="px-4 py-3 text-[#333]">{row.valueLast}</td>
                        <td className="px-4 py-3 text-[#333]">{row.valueCurr}</td>
                        <td className="px-4 py-3 text-[#333]">{row.volLast}</td>
                        <td className="px-4 py-3 text-[#333]">{row.volCurr}</td>
                      </tr>
                    ))}
                    {filteredServices.length === 0 && (
                      <tr><td colSpan={7} className="px-4 py-8 text-center text-[#999]">No services found{search && <> matching &ldquo;{search}&rdquo;</>}</td></tr>
                    )}
                  </tbody>
                </table>
                <div className="px-4 py-2 bg-[#f8f8f8] text-xs text-[#999] border-t border-[#e0e0e0] flex items-center justify-between">
                  <span>Showing {(servicePage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(servicePage * ITEMS_PER_PAGE, filteredServices.length)} of {filteredServices.length} categories</span>
                </div>
                {/* Pagination */}
                {totalServicePages > 1 && (
                  <div className="flex items-center justify-center gap-1 py-4 bg-[#f8f8f8] border-t border-[#e0e0e0]">
                    <button onClick={() => setServicePage(Math.max(1, servicePage - 1))} disabled={servicePage === 1} className="px-3 py-1.5 text-sm border border-[#ccc] rounded hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed">&laquo; Prev</button>
                    {getPageNumbers(servicePage, totalServicePages).map((p, i) => (
                      typeof p === "string" ? (
                        <span key={i} className="px-2 py-1.5 text-sm text-[#999]">...</span>
                      ) : (
                        <button key={i} onClick={() => setServicePage(p)} className={`px-3 py-1.5 text-sm border rounded transition-colors ${servicePage === p ? "bg-[#002869] text-white border-[#002869]" : "border-[#ccc] text-[#333] hover:bg-white"}`}>{p}</button>
                      )
                    ))}
                    <button onClick={() => setServicePage(Math.min(totalServicePages, servicePage + 1))} disabled={servicePage === totalServicePages} className="px-3 py-1.5 text-sm border border-[#ccc] rounded hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed">Next &raquo;</button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import PublicNav from "@/components/layout/PublicNav";
import Footer from "@/components/layout/Footer";

const bids = [
  {
    bidNo: "GEM/2026/B/7414818",
    raNo: "GEM/2026/R/659300",
    items: "Goods Transport Service – Per ...",
    quantity: "111597",
    department: "Ministry of Defence",
    subDept: "Department of Military Affairs",
    startDate: "23-04-2026 12:00 PM",
    endDate: "24-04-2026 12:14 PM",
    bidType: "Service Bid/RAs",
    highValue: true,
  },
  {
    bidNo: "GEM/2026/B/7416066",
    raNo: "GEM/2026/R/659230",
    items: "Professional Painting Service ...",
    quantity: "1",
    department: "Health Department Haryana",
    subDept: "",
    startDate: "23-04-2026 11:00 AM",
    endDate: "24-04-2026 12:17 PM",
    bidType: "Service Bid/RAs",
    highValue: false,
  },
  {
    bidNo: "GEM/2025/B/6999851",
    raNo: "GEM/2026/R/659065",
    items: "CNC TRAIN MASTER LATHE MACHINE",
    quantity: "1",
    department: "Ministry of Defence",
    subDept: "Department of Military Affairs",
    startDate: "22-04-2026 4:00 PM",
    endDate: "24-04-2026 12:19 PM",
    bidType: "Product Bid/RAs",
    highValue: true,
  },
  {
    bidNo: "GEM/2026/B/7117528",
    raNo: "GEM/2026/R/659281",
    items: "Gel Documentation System",
    quantity: "1",
    department: "PMO",
    subDept: "Department of Atomic Energy",
    startDate: "23-04-2026 12:00 PM",
    endDate: "24-04-2026 12:21 PM",
    bidType: "Product Bid/RAs",
    highValue: false,
  },
  {
    bidNo: "GEM/2026/B/7418902",
    raNo: "GEM/2026/R/659410",
    items: "Office Furniture Supply",
    quantity: "250",
    department: "Ministry of Home Affairs",
    subDept: "Central Secretariat",
    startDate: "23-04-2026 10:00 AM",
    endDate: "25-04-2026 11:00 AM",
    bidType: "Product Custom Bid/RAs",
    highValue: false,
  },
  {
    bidNo: "GEM/2026/B/7420115",
    raNo: "GEM/2026/R/659520",
    items: "Desktop Computer All-in-One",
    quantity: "500",
    department: "Ministry of Law & Justice",
    subDept: "Department of Legal Affairs",
    startDate: "22-04-2026 2:00 PM",
    endDate: "25-04-2026 3:00 PM",
    bidType: "BOQ Bids",
    highValue: true,
  },
  {
    bidNo: "GEM/2026/B/7421200",
    raNo: "GEM/2026/R/659600",
    items: "Solar Panel Installation Service",
    quantity: "100",
    department: "Ministry of New & Renewable Energy",
    subDept: "",
    startDate: "21-04-2026 9:00 AM",
    endDate: "26-04-2026 5:00 PM",
    bidType: "Global Tender",
    highValue: true,
  },
  {
    bidNo: "GEM/2026/B/7421350",
    raNo: "GEM/2026/R/659650",
    items: "Medical Equipment - Ventilators",
    quantity: "50",
    department: "Ministry of Health",
    subDept: "AIIMS Delhi",
    startDate: "22-04-2026 10:00 AM",
    endDate: "26-04-2026 12:00 PM",
    bidType: "Limited Tender",
    highValue: true,
  },
];

const bidTypeLabels = [
  "All Bid/RAs",
  "Product Bid/RAs",
  "Service Bid/RAs",
  "Bid To RAs",
  "Product Custom Bid/RAs",
  "BOQ Bids",
  "Rate Contract Bids",
  "Global Tender",
  "Limited Tender",
  "Single Tender",
];

function parseDate(dateStr: string): Date {
  const [datePart, timePart, ampm] = dateStr.split(" ");
  const [day, month, year] = datePart.split("-").map(Number);
  let [hours, minutes] = timePart.split(":").map(Number);
  if (ampm === "PM" && hours !== 12) hours += 12;
  if (ampm === "AM" && hours === 12) hours = 0;
  return new Date(year, month - 1, day, hours, minutes);
}

export default function BidListingPage() {
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [searchMode, setSearchMode] = useState("Contains");
  const [ongoingChecked, setOngoingChecked] = useState(true);
  const [bidRaStatusChecked, setBidRaStatusChecked] = useState(false);
  const [highValueChecked, setHighValueChecked] = useState(false);
  const [selectedBidTypes, setSelectedBidTypes] = useState<Set<string>>(new Set(["All Bid/RAs"]));
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortBy, setSortBy] = useState("Bid End Date: Oldest First");

  const handleSearch = () => setActiveSearch(search.trim());
  const handleClearSearch = () => { setSearch(""); setActiveSearch(""); };

  const handleBidTypeChange = (label: string, checked: boolean) => {
    const next = new Set(selectedBidTypes);
    if (label === "All Bid/RAs") {
      if (checked) {
        next.clear();
        next.add("All Bid/RAs");
      } else {
        next.delete("All Bid/RAs");
      }
    } else {
      next.delete("All Bid/RAs");
      if (checked) {
        next.add(label);
      } else {
        next.delete(label);
      }
      if (next.size === 0) {
        next.add("All Bid/RAs");
      }
    }
    setSelectedBidTypes(next);
  };

  const handleReset = () => {
    setOngoingChecked(true);
    setBidRaStatusChecked(false);
    setHighValueChecked(false);
    setSelectedBidTypes(new Set(["All Bid/RAs"]));
    setDateFrom("");
    setDateTo("");
    setSearch("");
    setActiveSearch("");
  };

  const filteredBids = bids.filter((b) => {
    // Search filter
    if (activeSearch) {
      const q = activeSearch.toLowerCase();
      const fields = [b.bidNo, b.raNo, b.items, b.department, b.subDept, b.quantity];
      const match = searchMode === "Contains"
        ? fields.some((f) => f.toLowerCase().includes(q))
        : fields.some((f) => f.toLowerCase().startsWith(q));
      if (!match) return false;
    }

    // Bid type filter
    if (!selectedBidTypes.has("All Bid/RAs")) {
      if (!selectedBidTypes.has(b.bidType)) return false;
    }

    // High value filter
    if (highValueChecked && !b.highValue) return false;

    // Date range filter
    if (dateFrom) {
      const endDate = parseDate(b.endDate);
      const from = new Date(dateFrom);
      if (endDate < from) return false;
    }
    if (dateTo) {
      const endDate = parseDate(b.endDate);
      const to = new Date(dateTo);
      to.setHours(23, 59, 59);
      if (endDate > to) return false;
    }

    return true;
  });

  // Sort
  const sortedBids = [...filteredBids].sort((a, b) => {
    const aEnd = parseDate(a.endDate).getTime();
    const bEnd = parseDate(b.endDate).getTime();
    const aStart = parseDate(a.startDate).getTime();
    const bStart = parseDate(b.startDate).getTime();
    switch (sortBy) {
      case "Bid End Date: Newest First": return bEnd - aEnd;
      case "Start Date: Newest First": return bStart - aStart;
      case "Start Date: Oldest First": return aStart - bStart;
      default: return aEnd - bEnd;
    }
  });

  return (
    <div className="bg-[#f5f5f5] text-[#333] min-h-screen">
      <PublicNav activePage="Tenders (Bids)" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#333]">Bid Listing</h1>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex items-center gap-0 w-full md:w-auto">
            <span className="material-symbols-outlined text-[#666] mr-2 text-lg cursor-help hidden sm:block">info</span>
            <select value={searchMode} onChange={(e) => setSearchMode(e.target.value)} className="border border-[#ccc] rounded-l-md px-2 md:px-3 py-2 text-xs md:text-sm bg-white outline-none">
              <option>Contains</option>
              <option>Starts With</option>
            </select>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter Keyword" className="border-t border-b border-[#ccc] px-2 md:px-3 py-2 text-xs md:text-sm flex-1 md:w-64 outline-none min-w-0" />
            {search && (
              <button type="button" onClick={handleClearSearch} className="border-t border-b border-[#ccc] px-2 py-2 text-[#999] hover:text-[#333] transition-colors">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
            <button type="submit" className="bg-[#002869] text-white px-4 py-2 rounded-r-md hover:bg-[#0b3d91] transition-colors">
              <span className="material-symbols-outlined text-lg">search</span>
            </button>
          </form>
        </div>

        {/* Info Banner */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#002869] px-4 md:px-5 py-3 rounded-md text-xs md:text-sm mb-4 md:mb-6">
          It may take up to 15 mins to reflect newly published bids or any modification in bids to show up in search results.
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Sidebar Filters */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-md border border-[#ddd] p-5">
              <div className="flex items-center justify-between mb-4 border-b border-[#ddd] pb-3">
                <h3 className="text-lg font-bold text-[#002869] flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">filter_alt</span>
                  Filters
                </h3>
                <button onClick={handleReset} className="text-[#002869] text-sm hover:underline">Reset</button>
              </div>

              {/* Status */}
              <div className="space-y-2 mb-5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={ongoingChecked} onChange={(e) => setOngoingChecked(e.target.checked)} className="accent-[#002869]" />
                  <span className="text-sm text-[#333]">Ongoing Bids/RA</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={bidRaStatusChecked} onChange={(e) => setBidRaStatusChecked(e.target.checked)} className="accent-[#002869]" />
                  <span className="text-sm text-[#333]">Bid/RA Status</span>
                </label>
              </div>

              {/* By Bid Type */}
              <h4 className="text-sm font-bold text-[#002869] mb-3">By Bid Type:</h4>
              <div className="space-y-2 mb-5">
                {bidTypeLabels.map((label) => (
                  <label key={label} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBidTypes.has(label)}
                      onChange={(e) => handleBidTypeChange(label, e.target.checked)}
                      className="accent-[#002869]"
                    />
                    <span className="text-sm text-[#333]">{label}</span>
                  </label>
                ))}
              </div>

              {/* By Bid Value */}
              <h4 className="text-sm font-bold text-[#002869] mb-3">By Bid Value:</h4>
              <div className="space-y-2 mb-5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={highValueChecked} onChange={(e) => setHighValueChecked(e.target.checked)} className="accent-[#002869]" />
                  <span className="text-sm text-[#333]">High Value Bids</span>
                  <span className="material-symbols-outlined text-[#999] text-sm cursor-help">info</span>
                </label>
              </div>

              {/* Bid End Date From */}
              <h4 className="text-sm font-bold text-[#002869] mb-2">Bid End Date (From):</h4>
              <div className="flex items-center gap-1 mb-5">
                <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="border border-[#ccc] rounded-md px-3 py-1.5 text-sm w-full outline-none" />
              </div>

              {/* Bid End Date To */}
              <h4 className="text-sm font-bold text-[#002869] mb-2">Bid End Date (To):</h4>
              <div className="flex items-center gap-1">
                <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="border border-[#ccc] rounded-md px-3 py-1.5 text-sm w-full outline-none" />
              </div>
            </div>
          </aside>

          {/* Bid Cards */}
          <div className="flex-1 min-w-0">
            {/* Results header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <p className="text-sm text-[#002869] font-medium italic">
                Showing 1 - {sortedBids.length} records of {bids.length} records
                {activeSearch && (
                  <span className="ml-2">for &ldquo;{activeSearch}&rdquo;
                    <button onClick={handleClearSearch} className="ml-1 hover:underline">(clear)</button>
                  </span>
                )}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#333] font-medium">Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-[#ccc] rounded-md px-3 py-1.5 text-sm bg-white outline-none">
                  <option>Bid End Date: Oldest First</option>
                  <option>Bid End Date: Newest First</option>
                  <option>Start Date: Newest First</option>
                  <option>Start Date: Oldest First</option>
                </select>
              </div>
            </div>

            {/* Bid list */}
            <div className="space-y-4">
              {sortedBids.length === 0 && (
                <div className="bg-white rounded-md border border-[#ddd] p-12 text-center">
                  <span className="material-symbols-outlined text-4xl text-[#ccc] block mb-2">search_off</span>
                  <p className="text-sm text-[#666]">No bids found matching your filters{activeSearch && <> and keyword &ldquo;{activeSearch}&rdquo;</>}</p>
                  <button onClick={handleReset} className="text-[#002869] text-sm mt-2 hover:underline">Reset all filters</button>
                </div>
              )}
              {sortedBids.map((bid) => (
                <div key={bid.bidNo} className="bg-white rounded-md border overflow-hidden border-l-4 border-l-[#d4a017] border-[#ddd]">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3 md:px-5 py-2 md:py-3 bg-[#f9f9f9] border-b border-[#eee]">
                    <div className="flex items-center gap-1 md:gap-2 flex-wrap text-xs md:text-sm">
                      <span className="text-[#333] font-medium">Bid No.:</span>
                      <a href="#" className="text-[#002869] font-bold hover:underline">{bid.bidNo}</a>
                      <span className="material-symbols-outlined text-[#333] text-base">arrow_forward</span>
                      <span className="text-[#333] font-medium">RA NO:</span>
                      <a href="#" className="text-[#002869] font-bold hover:underline">{bid.raNo}</a>
                    </div>
                    <a href="#" className="text-[#002869] text-xs md:text-sm hover:underline flex items-center gap-1 mt-2 sm:mt-0">
                      <span className="material-symbols-outlined text-sm">add_circle</span>
                      View Corrigendum/Representation
                    </a>
                  </div>

                  {/* Bottom row */}
                  <div className="px-3 md:px-5 py-3 md:py-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    <div className="space-y-1">
                      <p className="text-xs md:text-sm">
                        <span className="text-[#333] font-medium">Items: </span>
                        <a href="#" className="text-[#002869] hover:underline">{bid.items}</a>
                      </p>
                      <p className="text-sm">
                        <span className="text-[#333] font-medium">Quantity: </span>
                        <span className="text-[#333]">{bid.quantity}</span>
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-[#333]">Department Name And Address:</p>
                      <p className="text-sm text-[#333]">{bid.department}</p>
                      {bid.subDept && <p className="text-sm text-[#333]">{bid.subDept}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="text-[#333] font-medium">Start Date: </span>
                        <span className="text-[#002869] font-medium">{bid.startDate}</span>
                      </p>
                      <p>
                        <span className="text-[#333] font-medium">End Date: </span>
                        <span className="text-[#c0392b] font-medium">{bid.endDate}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

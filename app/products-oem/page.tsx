"use client";

import { useState } from "react";
import Link from "next/link";
import PublicNav from "@/components/layout/PublicNav";

/* ── Dummy Data ── */

const categories = [
  { icon: "electrical_services", name: "Electrical", count: 342 },
  { icon: "devices", name: "IT & Computers", count: 518 },
  { icon: "construction", name: "Construction", count: 276 },
  { icon: "chair", name: "Furniture", count: 189 },
  { icon: "local_hospital", name: "Medical", count: 421 },
  { icon: "shield", name: "Security & Safety", count: 154 },
];

const oems = [
  { name: "Havells India Ltd.", industry: "Electrical & Switchgear", location: "Noida, UP", verified: true, products: 84 },
  { name: "HP India Pvt. Ltd.", industry: "IT Hardware & Peripherals", location: "Bengaluru, KA", verified: true, products: 126 },
  { name: "Godrej & Boyce", industry: "Furniture & Security", location: "Mumbai, MH", verified: true, products: 67 },
  { name: "Larsen & Toubro", industry: "Construction & Infra", location: "Chennai, TN", verified: true, products: 203 },
  { name: "Siemens India", industry: "Electrical & Automation", location: "Mumbai, MH", verified: true, products: 158 },
  { name: "BEL (Bharat Electronics)", industry: "Defence & Electronics", location: "Bengaluru, KA", verified: true, products: 92 },
];

const products = [
  { name: "LED Street Light 150W", category: "Electrical", specs: "IP66, 150W, 18000 Lumens", oem: "Havells India Ltd.", oemVerified: true },
  { name: "Desktop Computer i5 11th Gen", category: "IT & Computers", specs: "i5-11400, 8GB RAM, 512GB SSD", oem: "HP India Pvt. Ltd.", oemVerified: true },
  { name: "Steel Almirah 6ft", category: "Furniture", specs: "Powder Coated, 4 Shelves, IS:3312", oem: "Godrej & Boyce", oemVerified: true },
  { name: "CCTV Camera 5MP Dome", category: "Security & Safety", specs: "5MP, IR 30m, IP67, PoE", oem: "BEL", oemVerified: true },
  { name: "Precast Concrete Pipe 600mm", category: "Construction", specs: "NP3, 600mm dia, IS:458", oem: "Larsen & Toubro", oemVerified: true },
  { name: "Patient Monitor 5-Para", category: "Medical", specs: "ECG, SpO2, NIBP, Temp, Resp", oem: "Siemens India", oemVerified: true },
];

const trustPoints = [
  { icon: "verified_user", title: "Verified OEMs Only", desc: "Every manufacturer is vetted with valid certifications and government registrations." },
  { icon: "speed", title: "Faster Authorization", desc: "Get OEM authorization letters quickly to meet tender compliance deadlines." },
  { icon: "gavel", title: "Tender-Focused Sourcing", desc: "Products and OEMs mapped to government tender categories and specifications." },
  { icon: "handshake", title: "Direct OEM Connect", desc: "No middlemen — connect directly with manufacturers for best pricing and support." },
];

export default function ProductsOEMPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [reqForm, setReqForm] = useState({ product: "", quantity: "", location: "", deadline: "", description: "" });
  const [reqSubmitted, setReqSubmitted] = useState(false);
  const [showDemand, setShowDemand] = useState(false);
  const [demandTab, setDemandTab] = useState<"product" | "service">("product");

  return (
    <div className="bg-surface text-on-background min-h-screen">
      <PublicNav activePage="Product & OEM Directory" />

      {/* ── 1. Hero Section ── */}
      <section className="bg-primary py-14 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <span className="material-symbols-outlined text-[40rem] absolute -right-32 -top-32 rotate-12">factory</span>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-5">
          <p className="text-secondary-container text-xs font-medium uppercase tracking-widest">Seller-Focused Sourcing Platform</p>
          <h1 className="text-2xl md:text-3xl font-medium text-white font-headline">
            Find OEMs & Products for Your Government Projects
          </h1>
          <p className="text-on-primary-container text-sm max-w-2xl mx-auto">
            Won a tender? Source products, connect with verified manufacturers, get OEM authorization,
            and execute your government project — all from one platform.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className="flex items-center max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg mt-6"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-xl pl-4">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product, OEM, or category..."
              className="flex-1 px-4 py-3.5 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/50"
            />
            <button type="submit" className="bg-secondary text-white px-6 py-3.5 text-sm font-medium hover:bg-secondary-container transition-colors">
              Search
            </button>
          </form>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["All Categories", "Verified OEMs", "Electrical", "IT", "Construction", "Medical"].map((f) => (
              <button key={f} className="px-3 py-1.5 text-xs text-white/80 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-8">

        {/* ── Tender Based Product Demand ── */}
        <section className="py-6">
          <button
            onClick={() => setShowDemand(!showDemand)}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-xl border-2 transition-all ${
              showDemand
                ? "bg-secondary/5 border-secondary shadow-lg shadow-secondary/10"
                : "bg-white border-secondary/30 hover:border-secondary hover:shadow-md"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">trending_up</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-on-surface font-headline">Tender Based Product Demand</p>
                <p className="text-xs text-on-surface-variant">Products currently in high demand across active government tenders</p>
              </div>
            </div>
            <span className={`material-symbols-outlined text-secondary text-xl transition-transform ${showDemand ? "rotate-180" : ""}`}>expand_more</span>
          </button>

          {showDemand && (
            <div className="mt-3 bg-white rounded-xl border border-outline-variant/10 shadow-md overflow-hidden">
              {/* Product / Service Tabs */}
              <div className="flex border-b border-outline-variant/10">
                <button
                  onClick={() => setDemandTab("product")}
                  className={`flex-1 py-3 text-xs font-medium text-center transition-colors ${
                    demandTab === "product"
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-on-surface-variant hover:bg-surface-container/50"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm align-middle mr-1">inventory_2</span>
                  Product Demand
                </button>
                <button
                  onClick={() => setDemandTab("service")}
                  className={`flex-1 py-3 text-xs font-medium text-center transition-colors ${
                    demandTab === "service"
                      ? "text-secondary border-b-2 border-secondary bg-secondary/5"
                      : "text-on-surface-variant hover:bg-surface-container/50"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm align-middle mr-1">engineering</span>
                  Service Demand
                </button>
              </div>

              {demandTab === "product" && (
              <>
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-2 px-5 py-3 bg-secondary/5 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/10">
                <span className="col-span-4">Category Name</span>
                <span className="col-span-1 text-right">Sellers</span>
                <span className="col-span-1 text-right">OEM</span>
                <span className="col-span-1 text-right">Catalog</span>
                <span className="col-span-2 text-right">Order Value (Last FY)</span>
                <span className="col-span-1 text-right">Vol (Last)</span>
                <span className="col-span-1 text-right">Vol (Curr)</span>
                <span className="col-span-1"></span>
              </div>
              <div className="max-h-[500px] overflow-y-auto">
              {[
                { name: "Automotive Diesel Fuel Conforming To Is 1460", seller: "3", oem: "3", catalog: "3", value: "₹5,584 Cr", volLast: "49", volCurr: "2", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_fuel_fuel_petr_auto" },
                { name: "Marine Fuels (Class F) Conforming To Is 16731", seller: "2", oem: "2", catalog: "3", value: "₹3,359 Cr", volLast: "80", volCurr: "1", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_fuel_fuel_petr_mari" },
                { name: "Passenger Car", seller: "10", oem: "10", catalog: "330", value: "₹2,922 Cr", volLast: "6,882", volCurr: "186", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_ve66014551_moto_pass_pass" },
                { name: "Entry And Mid Level Desktop Computer", seller: "5,025", oem: "49", catalog: "27,361", value: "₹1,814 Cr", volLast: "23,191", volCurr: "301", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_comp_entr" },
                { name: "Coke - Blast Furnace (Rinl)", seller: "46", oem: "0", catalog: "2", value: "₹1,759 Cr", volLast: "55", volCurr: "1", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_fuel_fuel_soli_co87523226" },
                { name: "All In One Pc (V2)", seller: "5,132", oem: "34", catalog: "20,802", value: "₹1,285 Cr", volLast: "26,746", volCurr: "399", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_comp_al55870105" },
                { name: "Buses (V2)", seller: "6", oem: "5", catalog: "229", value: "₹1,115 Cr", volLast: "795", volCurr: "8", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_ve66014551_moto_pass_buse" },
                { name: "High End Desktop Computer", seller: "4,405", oem: "48", catalog: "37,591", value: "₹1,040 Cr", volLast: "12,961", volCurr: "218", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_comp_mida" },
                { name: "Toner Cartridges / Ink Cartridges", seller: "4,257", oem: "36", catalog: "4,879", value: "₹839 Cr", volLast: "2,30,803", volCurr: "5,675", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_offi_offi_prin_tone" },
                { name: "Interactive Panels With Cpu", seller: "3,283", oem: "66", catalog: "10,293", value: "₹787 Cr", volLast: "7,862", volCurr: "129", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_co36451542_in13781702" },
                { name: "Troop Carrier Police Vehicles (V2)", seller: "6", oem: "5", catalog: "26", value: "₹689 Cr", volLast: "122", volCurr: "1", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_ve66014551_moto_safe_troo" },
                { name: "HDPE/PP Woven Sacks For Food Grains", seller: "66", oem: "65", catalog: "103", value: "₹680 Cr", volLast: "26", volCurr: "10", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_mate_cont_bags_hd03836060" },
                { name: "Printing Maplitho Paper (V3)", seller: "86", oem: "34", catalog: "370", value: "₹677 Cr", volLast: "106", volCurr: "4", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_pape_pape_prin_pr88328442" },
                { name: "Distribution Transformer 3 Phase", seller: "41", oem: "33", catalog: "105", value: "₹595 Cr", volLast: "154", volCurr: "1", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_el63626345_el78566335_powe_di85635414" },
                { name: "Fixed Computer Workstation", seller: "1,902", oem: "27", catalog: "5,882", value: "₹533 Cr", volLast: "11,121", volCurr: "169", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_comp_fixe" },
                { name: "Entry And Mid Level Laptop", seller: "2,478", oem: "13", catalog: "271", value: "₹508 Cr", volLast: "9,150", volCurr: "108", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_comp_en14305462" },
                { name: "Plain Copier Paper (V3)", seller: "39,604", oem: "27", catalog: "335", value: "₹474 Cr", volLast: "1,68,936", volCurr: "2,676", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_pape_pape_prin_plai" },
                { name: "XLPE Cable Up To 1.1 KV", seller: "2,262", oem: "142", catalog: "38,901", value: "₹468 Cr", volLast: "9,445", volCurr: "232", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_powe_elec_elec_xl32325872" },
                { name: "High End Laptop - Notebook", seller: "3,443", oem: "14", catalog: "281", value: "₹435 Cr", volLast: "12,101", volCurr: "210", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_comp_hi86310775" },
                { name: "Diesel Power Generator (Up To 900 KVA)", seller: "1,081", oem: "47", catalog: "14,422", value: "₹364 Cr", volLast: "2,065", volCurr: "36", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_powe_batt_powe_po74542428" },
                { name: "High Mast Lighting Tower With LED", seller: "830", oem: "11", catalog: "952", value: "₹334 Cr", volLast: "1,975", volCurr: "72", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_el63626345_ligh_exte_hi10587672" },
                { name: "Portland Pozzolana Cement (Fly Ash)", seller: "43", oem: "9", catalog: "52", value: "₹319 Cr", volLast: "164", volCurr: "8", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_stru_conc_ceme_po48372183" },
                { name: "Hopper Tipper Dumper For Garbage", seller: "361", oem: "55", catalog: "1,838", value: "₹311 Cr", volLast: "609", volCurr: "34", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_ve66014551_moto_spec_hopp" },
                { name: "Desk And Bench Set For Classroom", seller: "1,041", oem: "384", catalog: "5,352", value: "₹293 Cr", volLast: "3,120", volCurr: "69", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_fu14684684_clas_gene_desk" },
                { name: "Revolving Chair (V5)", seller: "3,530", oem: "583", catalog: "49,814", value: "₹203 Cr", volLast: "31,220", volCurr: "886", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_fu14684684_acco_fu82806882_re71201828" },
                { name: "Camera For CCTV System (V3)", seller: "128", oem: "4", catalog: "276", value: "₹242 Cr", volLast: "9,298", volCurr: "126", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_lawe_secu_surv_ca82087436" },
                { name: "Ordinary Portland Cement (V3)", seller: "1,440", oem: "17", catalog: "83", value: "₹237 Cr", volLast: "2,759", volCurr: "86", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_stru_conc_ceme_or02882125" },
                { name: "Modular Table / Meeting Table (V2)", seller: "2,268", oem: "461", catalog: "23,882", value: "₹231 Cr", volLast: "18,533", volCurr: "331", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_fu14684684_acco_offi_mo51130563" },
                { name: "Tablet Computer (V2)", seller: "753", oem: "9", catalog: "304", value: "₹208 Cr", volLast: "2,695", volCurr: "42", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_comp_ta70423077" },
                { name: "Steel Almirah / Cabinets (V4)", seller: "1,337", oem: "334", catalog: "46,680", value: "₹139 Cr", volLast: "17,304", volCurr: "218", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_fu14684684_acco_fu82806882_st05844582" },
                { name: "Computer Printer (V2)", seller: "2,715", oem: "11", catalog: "226", value: "₹161 Cr", volLast: "19,379", volCurr: "277", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_co66467174_comp" },
                { name: "Servers (V2)", seller: "676", oem: "19", catalog: "2,959", value: "₹118 Cr", volLast: "278", volCurr: "16", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_info_comp_comp_se77371828" },
                { name: "Chair For General Purpose", seller: "2,638", oem: "527", catalog: "11,415", value: "₹103 Cr", volLast: "12,842", volCurr: "369", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_fu14684684_acco_fu82806882_fixe" },
                { name: "Multimedia Projector (MMP)", seller: "1,583", oem: "10", catalog: "412", value: "₹103 Cr", volLast: "4,903", volCurr: "57", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_prin_audi_proj_2805" },
                { name: "ICU Ventilators (V2)", seller: "246", oem: "30", catalog: "597", value: "₹91 Cr", volLast: "95", volCurr: "5", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_medi_resp_posi_ic30503835" },
                { name: "Split Air Conditioner Wall Mount (V3)", seller: "1,521", oem: "15", catalog: "159", value: "₹91 Cr", volLast: "7,461", volCurr: "723", link: "https://mkp.gem.gov.in/browse_nodes/browse_list#!/brands?bnId=home_dist_heat_cool_sp78454375" },
              ].map((item) => (
                <div key={item.name} className="grid grid-cols-12 gap-2 px-5 py-2.5 text-xs border-b border-outline-variant/5 hover:bg-surface-container/50 transition-colors items-center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="col-span-4 font-medium text-[#0d6efd] hover:underline truncate" title={item.name}>{item.name}</a>
                  <span className="col-span-1 text-right text-on-surface">{item.seller}</span>
                  <span className="col-span-1 text-right text-on-surface">{item.oem}</span>
                  <span className="col-span-1 text-right text-on-surface">{item.catalog}</span>
                  <span className="col-span-2 text-right font-semibold text-primary">{item.value}</span>
                  <span className="col-span-1 text-right text-on-surface-variant">{item.volLast}</span>
                  <span className="col-span-1 text-right text-on-surface-variant">{item.volCurr}</span>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="col-span-1 text-right">
                    <span className="material-symbols-outlined text-secondary text-sm">open_in_new</span>
                  </a>
                </div>
              ))}
              </div>
              <div className="px-5 py-3 bg-[#fafafa] flex items-center justify-between">
                <p className="text-[10px] text-on-surface-variant">Source: GeM Catalog Data · 21 Apr 2026 · Showing top 35 categories by order value</p>
                <Link href="/tenders" className="text-xs text-secondary font-medium hover:underline flex items-center gap-1">
                  View All Tenders <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
              </>
              )}

              {demandTab === "service" && (
              <>
              {/* Service Table Header */}
              <div className="grid grid-cols-12 gap-2 px-5 py-3 bg-secondary/5 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/10">
                <span className="col-span-4">Service Category</span>
                <span className="col-span-1 text-right">Providers</span>
                <span className="col-span-1 text-right">Catalog</span>
                <span className="col-span-2 text-right">Order Value (Last FY)</span>
                <span className="col-span-1 text-right">Vol (Last)</span>
                <span className="col-span-1 text-right">Vol (Curr)</span>
                <span className="col-span-2"></span>
              </div>
              <div className="max-h-[500px] overflow-y-auto">
              {[
                { name: "Handling, Transport & Mining Services", provider: "6,369", catalog: "6,369", value: "₹61,107 Cr", volLast: "1,123", volCurr: "101" },
                { name: "Mine Development & Operation - Lumpsum", provider: "228", catalog: "228", value: "₹16,752 Cr", volLast: "55", volCurr: "7" },
                { name: "Manpower Outsourcing - Minimum Wage", provider: "39,898", catalog: "39,898", value: "₹15,475 Cr", volLast: "40,899", volCurr: "1,994" },
                { name: "Mine Development & Operations - Per MT", provider: "453", catalog: "453", value: "₹11,016 Cr", volLast: "37", volCurr: "4" },
                { name: "Manpower Outsourcing - Fixed Remuneration", provider: "25,936", catalog: "25,936", value: "₹7,914 Cr", volLast: "9,032", volCurr: "685" },
                { name: "Mine Development - Revenue Sharing", provider: "283", catalog: "283", value: "₹6,725 Cr", volLast: "1", volCurr: "0" },
                { name: "Security Manpower Service (V2.0)", provider: "7,496", catalog: "7,496", value: "₹5,222 Cr", volLast: "4,919", volCurr: "207" },
                { name: "Hiring Agency For IT Projects - Milestone", provider: "5,419", catalog: "5,419", value: "₹5,036 Cr", volLast: "632", volCurr: "36" },
                { name: "Facility Management Services - Lumpsum", provider: "21,718", catalog: "21,718", value: "₹3,967 Cr", volLast: "5,862", volCurr: "331" },
                { name: "Outsourcing Public Service As A Project", provider: "481", catalog: "481", value: "₹3,602 Cr", volLast: "34", volCurr: "5" },
                { name: "Group Mediclaim Insurance Service", provider: "27", catalog: "27", value: "₹3,572 Cr", volLast: "122", volCurr: "5" },
                { name: "Monthly Cab & Taxi Hiring Services", provider: "41,876", catalog: "41,876", value: "₹3,235 Cr", volLast: "21,331", volCurr: "1,240" },
                { name: "ATM Operation & Management - Per Txn", provider: "89", catalog: "89", value: "₹3,210 Cr", volLast: "2", volCurr: "0" },
                { name: "Handling And Transport On Lumpsum Basis", provider: "5,035", catalog: "5,035", value: "₹2,901 Cr", volLast: "928", volCurr: "42" },
                { name: "Assets Insurance Service", provider: "22", catalog: "22", value: "₹2,527 Cr", volLast: "382", volCurr: "20" },
                { name: "Mass Production Mining - Per MT", provider: "120", catalog: "120", value: "₹1,846 Cr", volLast: "3", volCurr: "0" },
                { name: "Educational Lab/Centre Design & Maintenance", provider: "2,497", catalog: "2,497", value: "₹1,576 Cr", volLast: "496", volCurr: "23" },
                { name: "Hiring Consultants - Milestone Based", provider: "5,131", catalog: "5,131", value: "₹1,550 Cr", volLast: "1,042", volCurr: "83" },
                { name: "Repair & Maintenance Of Plant/Systems (V2)", provider: "13,033", catalog: "13,033", value: "₹1,519 Cr", volLast: "7,004", volCurr: "333" },
                { name: "O&M Of Other Machines And Plants", provider: "2,926", catalog: "2,926", value: "₹1,480 Cr", volLast: "439", volCurr: "26" },
                { name: "Sanitation Service - Manpower Based", provider: "12,431", catalog: "12,431", value: "₹1,279 Cr", volLast: "792", volCurr: "72" },
                { name: "ATM Replenishment & Managed Services", provider: "142", catalog: "142", value: "₹1,218 Cr", volLast: "8", volCurr: "0" },
                { name: "Customized AMC/CMC For Pre-Owned Products", provider: "13,911", catalog: "13,911", value: "₹1,137 Cr", volLast: "4,080", volCurr: "222" },
                { name: "Bulk SMS Service (V2)", provider: "589", catalog: "589", value: "₹1,119 Cr", volLast: "107", volCurr: "4" },
                { name: "Facility Management - Manpower Based (V2)", provider: "9,044", catalog: "9,044", value: "₹1,077 Cr", volLast: "1,523", volCurr: "77" },
                { name: "Paper-Based Printing Services", provider: "22,709", catalog: "22,709", value: "₹1,043 Cr", volLast: "76,977", volCurr: "2,271" },
                { name: "Goods Transport Services - Per MT", provider: "3,564", catalog: "3,564", value: "₹1,040 Cr", volLast: "993", volCurr: "87" },
                { name: "Repair And Overhauling Service", provider: "17,218", catalog: "17,218", value: "₹1,019 Cr", volLast: "14,657", volCurr: "497" },
                { name: "Manpower Outsourcing - Man-Days Based", provider: "13,852", catalog: "13,852", value: "₹988 Cr", volLast: "4,095", volCurr: "169" },
                { name: "Event/Seminar/Workshop Management", provider: "12,623", catalog: "12,623", value: "₹810 Cr", volLast: "17,117", volCurr: "271" },
                { name: "Cleaning & Disinfection - Outcome Based", provider: "21,981", catalog: "21,981", value: "₹699 Cr", volLast: "3,129", volCurr: "113" },
                { name: "AMC - Air Conditioner", provider: "9,514", catalog: "9,514", value: "₹633 Cr", volLast: "1,703", volCurr: "108" },
                { name: "ATM Card Printing & Personalization", provider: "129", catalog: "129", value: "₹604 Cr", volLast: "9", volCurr: "0" },
                { name: "Haulage & Housekeeping Services", provider: "2,152", catalog: "2,152", value: "₹590 Cr", volLast: "189", volCurr: "6" },
                { name: "Call Centre Service - Per Seat Basis", provider: "290", catalog: "290", value: "₹499 Cr", volLast: "26", volCurr: "1" },
                { name: "Canteen Service - Fixed Menu Rate", provider: "4,599", catalog: "4,599", value: "₹480 Cr", volLast: "565", volCurr: "29" },
                { name: "OBHS Service For Railways (V2.0)", provider: "808", catalog: "808", value: "₹453 Cr", volLast: "42", volCurr: "8" },
                { name: "Group Term Insurance Service", provider: "22", catalog: "22", value: "₹418 Cr", volLast: "72", volCurr: "3" },
                { name: "Oil And Gas Drilling Service", provider: "210", catalog: "210", value: "₹418 Cr", volLast: "7", volCurr: "0" },
                { name: "Bio Medical Waste Management - Per Bed", provider: "51", catalog: "51", value: "₹412 Cr", volLast: "360", volCurr: "3" },
              ].map((item) => (
                <div key={item.name} className="grid grid-cols-12 gap-2 px-5 py-2.5 text-xs border-b border-outline-variant/5 hover:bg-surface-container/50 transition-colors items-center">
                  <span className="col-span-4 font-medium text-on-surface truncate" title={item.name}>{item.name}</span>
                  <span className="col-span-1 text-right text-on-surface">{item.provider}</span>
                  <span className="col-span-1 text-right text-on-surface">{item.catalog}</span>
                  <span className="col-span-2 text-right font-semibold text-primary">{item.value}</span>
                  <span className="col-span-1 text-right text-on-surface-variant">{item.volLast}</span>
                  <span className="col-span-1 text-right text-on-surface-variant">{item.volCurr}</span>
                  <span className="col-span-2"></span>
                </div>
              ))}
              </div>
              <div className="px-5 py-3 bg-[#fafafa] flex items-center justify-between">
                <p className="text-[10px] text-on-surface-variant">Source: GeM Service Catalog · 21 Apr 2026 · Showing top 40 services by order value</p>
                <Link href="/tenders" className="text-xs text-secondary font-medium hover:underline flex items-center gap-1">
                  View All Tenders <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
              </>
              )}

            </div>
          )}
        </section>
        {/* ── 2. Quick Action Cards ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "factory", label: "Browse OEMs", desc: "Find verified manufacturers", color: "bg-[#4285f4]" },
              { icon: "inventory_2", label: "Explore Products", desc: "Search tender-ready products", color: "bg-[#34a853]" },
              { icon: "description", label: "Request Authorization", desc: "Get OEM auth letters", color: "bg-[#fbbc04]" },
              { icon: "edit_note", label: "Post Requirement", desc: "Tell OEMs what you need", color: "bg-[#ea4335]" },
            ].map((action) => (
              <button
                key={action.label}
                className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-left border border-outline-variant/10"
              >
                <div className={`w-10 h-10 ${action.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="material-symbols-outlined text-white text-lg">{action.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-on-surface font-headline">{action.label}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{action.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ── 3. Product Categories Grid ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-primary font-headline">Product Categories</h2>
            <Link href="#" className="text-xs text-secondary font-medium hover:underline flex items-center gap-1">
              View All <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl p-5 text-center border border-outline-variant/10 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">{cat.icon}</span>
                </div>
                <p className="text-sm font-medium text-on-surface font-headline">{cat.name}</p>
                <p className="text-[10px] text-on-surface-variant mt-1">{cat.count} products</p>
                <span className="text-xs text-secondary font-medium mt-2 inline-flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  View <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Featured OEMs ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-primary font-headline">Featured OEMs / Manufacturers</h2>
            <Link href="#" className="text-xs text-secondary font-medium hover:underline flex items-center gap-1">
              View All OEMs <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {oems.map((oem) => (
              <div key={oem.name} className="bg-white rounded-xl p-5 border border-outline-variant/10 hover:shadow-lg transition-all space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">factory</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-medium text-on-surface font-headline">{oem.name}</p>
                        {oem.verified && <span className="material-symbols-outlined text-[#34a853] text-sm">verified</span>}
                      </div>
                      <p className="text-xs text-on-surface-variant">{oem.industry}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">location_on</span>{oem.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">inventory_2</span>{oem.products} products
                  </span>
                </div>
                <div className="flex gap-2 pt-1">
                  <button className="flex-1 py-2 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-container transition-colors">
                    View Profile
                  </button>
                  <button className="flex-1 py-2 text-xs font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                    Request Authorization
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Product Listings ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-primary font-headline">Products for Government Tenders</h2>
            <Link href="#" className="text-xs text-secondary font-medium hover:underline flex items-center gap-1">
              View All Products <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-outline-variant/10 overflow-hidden hover:shadow-lg transition-all">
                {/* Product image placeholder */}
                <div className="h-36 bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary/20 text-6xl">inventory_2</span>
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[10px] font-medium text-secondary uppercase tracking-wider">{p.category}</span>
                    <p className="text-sm font-medium text-on-surface font-headline mt-0.5">{p.name}</p>
                  </div>
                  <p className="text-xs text-on-surface-variant">{p.specs}</p>
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-xs">factory</span>
                    <span>{p.oem}</span>
                    {p.oemVerified && <span className="material-symbols-outlined text-[#34a853] text-xs">verified</span>}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button className="flex-1 py-2 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-container transition-colors">
                      View Details
                    </button>
                    <button className="py-2 px-3 text-xs font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                      Find OEM
                    </button>
                    <button className="py-2 px-3 text-xs font-medium text-secondary border border-secondary/20 rounded-lg hover:bg-secondary/5 transition-colors">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Requirement Posting Form ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-primary font-headline">Post Your Requirement</h2>
              <p className="text-sm text-on-surface-variant">
                Can&apos;t find what you need? Post your requirement and let verified OEMs come to you
                with quotes and authorization support.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  { icon: "edit_note", text: "Describe the product you need" },
                  { icon: "notifications_active", text: "Matching OEMs get notified instantly" },
                  { icon: "handshake", text: "Receive quotes and authorization offers" },
                ].map((s, i) => (
                  <div key={s.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-base">{s.icon}</span>
                    </div>
                    <span className="text-sm text-on-surface">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {reqSubmitted ? (
              <div className="bg-white rounded-xl p-8 border border-outline-variant/10 shadow-md text-center space-y-3">
                <div className="w-14 h-14 bg-[#34a853]/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[#34a853] text-3xl">check_circle</span>
                </div>
                <p className="text-sm font-medium text-primary font-headline">Requirement Posted!</p>
                <p className="text-xs text-on-surface-variant">Verified OEMs will be notified. Expect responses within 24-48 hours.</p>
                <button onClick={() => { setReqSubmitted(false); setReqForm({ product: "", quantity: "", location: "", deadline: "", description: "" }); }} className="text-xs text-secondary font-medium hover:underline">
                  Post another requirement
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setReqSubmitted(true); }}
                className="bg-white rounded-xl p-6 border border-outline-variant/10 shadow-md space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-on-surface-variant">Product / Material</label>
                    <input required value={reqForm.product} onChange={(e) => setReqForm({ ...reqForm, product: e.target.value })} placeholder="e.g. LED Street Light 150W" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-on-surface-variant">Quantity</label>
                    <input required value={reqForm.quantity} onChange={(e) => setReqForm({ ...reqForm, quantity: e.target.value })} placeholder="e.g. 500 units" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-on-surface-variant">Delivery Location</label>
                    <input required value={reqForm.location} onChange={(e) => setReqForm({ ...reqForm, location: e.target.value })} placeholder="e.g. New Delhi" className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-on-surface-variant">Deadline</label>
                    <input required type="date" value={reqForm.deadline} onChange={(e) => setReqForm({ ...reqForm, deadline: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-on-surface-variant">Description / Specifications</label>
                  <textarea required rows={3} value={reqForm.description} onChange={(e) => setReqForm({ ...reqForm, description: e.target.value })} placeholder="Describe specifications, tender reference, compliance requirements..." className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">send</span>
                  Post Requirement
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── 8. Trust Section ── */}
        <section className="py-10 border-t border-outline-variant/10">
          <h2 className="text-lg font-medium text-primary font-headline text-center mb-8">Why Source Through Our Platform?</h2>
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

      {/* ── 9. CTA Section ── */}
      <section className="bg-primary py-12 px-8 mt-6">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-xl font-medium text-white font-headline">Start Sourcing for Your Tender Today</h2>
          <p className="text-sm text-on-primary-container">
            Connect with verified OEMs, get authorization letters, and fulfill your government project requirements faster.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="#" className="px-8 py-3 bg-secondary text-white text-sm font-medium rounded-xl hover:bg-secondary-container transition-colors">
              Find OEM
            </Link>
            <Link href="#" className="px-8 py-3 bg-white/10 text-white text-sm font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              Post Requirement
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-low py-8 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest">
            © 2025 GovSeller · Products & OEM Directory
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Support"].map((link) => (
              <a key={link} href="#" className="text-[10px] text-on-surface-variant/60 hover:text-primary uppercase tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

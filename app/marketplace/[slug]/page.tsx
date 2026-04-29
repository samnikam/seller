"use client";

import { use } from "react";
import PublicNav from "@/components/layout/PublicNav";
import Link from "next/link";

type Listing = { id: number; name: string; price: string; unit: string; badge: string; img: string; location: string; specs: { label: string; value: string }[] };
type ProductPage = { title: string; listings: Listing[] };

const L = "Leading Supplier", V = "Verified Supplier";

const productData: Record<string, ProductPage> = {
  "desktop-computer": { title: "Desktop Computer", listings: [
    { id: 1, name: "HP ProDesk 400 G7 Desktop PC", price: "₹32,500", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2004/2004580.png", location: "New Delhi", specs: [{ label: "Processor", value: "Intel Core i5-10500" }, { label: "RAM", value: "8 GB DDR4" }, { label: "Storage", value: "1 TB HDD" }, { label: "OS", value: "Windows 11 Pro" }] },
    { id: 2, name: "Dell OptiPlex 3090 Tower", price: "₹28,900", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2004/2004580.png", location: "Bangalore", specs: [{ label: "Processor", value: "Intel Core i3-10105" }, { label: "RAM", value: "4 GB DDR4" }, { label: "Storage", value: "256 GB SSD" }, { label: "OS", value: "Ubuntu Linux" }] },
    { id: 3, name: "Lenovo ThinkCentre M70t Gen 3", price: "₹45,000", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2004/2004580.png", location: "Mumbai", specs: [{ label: "Processor", value: "Intel Core i5-12400" }, { label: "RAM", value: "16 GB DDR4" }, { label: "Storage", value: "512 GB SSD" }, { label: "OS", value: "Windows 11 Pro" }] },
    { id: 4, name: "Acer Veriton M200 Desktop", price: "₹22,400", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2004/2004580.png", location: "Chennai", specs: [{ label: "Processor", value: "Intel Pentium Gold" }, { label: "RAM", value: "4 GB DDR4" }, { label: "Storage", value: "1 TB HDD" }, { label: "OS", value: "DOS" }] },
  ]},
  "laptop": { title: "Laptop", listings: [
    { id: 1, name: "HP 250 G9 Business Laptop", price: "₹38,500", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/689/689396.png", location: "New Delhi", specs: [{ label: "Processor", value: "Intel Core i5-1235U" }, { label: "RAM", value: "8 GB DDR4" }, { label: "Screen", value: "15.6 inch FHD" }, { label: "Storage", value: "512 GB SSD" }] },
    { id: 2, name: "Dell Latitude 3420", price: "₹42,000", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/689/689396.png", location: "Bangalore", specs: [{ label: "Processor", value: "Intel Core i5-1145G7" }, { label: "RAM", value: "8 GB DDR4" }, { label: "Screen", value: "14 inch FHD" }, { label: "Storage", value: "256 GB SSD" }] },
    { id: 3, name: "Lenovo ThinkPad E14 Gen 4", price: "₹55,900", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/689/689396.png", location: "Mumbai", specs: [{ label: "Processor", value: "Intel Core i7-1255U" }, { label: "RAM", value: "16 GB DDR5" }, { label: "Screen", value: "14 inch FHD IPS" }, { label: "Storage", value: "512 GB SSD" }] },
    { id: 4, name: "Samsung Galaxy Book2 Business", price: "₹62,000", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/689/689396.png", location: "Gurugram", specs: [{ label: "Processor", value: "Intel Core i7-1260P" }, { label: "RAM", value: "16 GB DDR5" }, { label: "Screen", value: "14 inch AMOLED" }, { label: "Storage", value: "512 GB SSD" }] },
  ]},
  "network-switch": { title: "Network Switch", listings: [
    { id: 1, name: "Cisco Catalyst 1000-24T", price: "₹18,500", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/4703/4703650.png", location: "Bangalore", specs: [{ label: "Ports", value: "24 Gigabit" }, { label: "Type", value: "Managed" }, { label: "PoE", value: "Yes" }, { label: "Brand", value: "Cisco" }] },
    { id: 2, name: "TP-Link TL-SG1024D Switch", price: "₹5,200", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/4703/4703650.png", location: "Mumbai", specs: [{ label: "Ports", value: "24 Gigabit" }, { label: "Type", value: "Unmanaged" }, { label: "PoE", value: "No" }, { label: "Brand", value: "TP-Link" }] },
    { id: 3, name: "D-Link DGS-1210-28 Smart Switch", price: "₹12,800", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/4703/4703650.png", location: "New Delhi", specs: [{ label: "Ports", value: "28 Gigabit" }, { label: "Type", value: "Smart Managed" }, { label: "PoE", value: "Yes" }, { label: "Brand", value: "D-Link" }] },
  ]},
  "printer": { title: "Printer", listings: [
    { id: 1, name: "HP LaserJet Pro M404dn", price: "₹24,500", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2521/2521826.png", location: "New Delhi", specs: [{ label: "Type", value: "Laser Mono" }, { label: "Speed", value: "40 ppm" }, { label: "Duplex", value: "Auto" }, { label: "Brand", value: "HP" }] },
    { id: 2, name: "Canon imageCLASS MF244dw", price: "₹18,900", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2521/2521826.png", location: "Chennai", specs: [{ label: "Type", value: "Laser MFP" }, { label: "Speed", value: "27 ppm" }, { label: "Duplex", value: "Auto" }, { label: "Brand", value: "Canon" }] },
    { id: 3, name: "Epson EcoTank L3250", price: "₹12,500", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2521/2521826.png", location: "Mumbai", specs: [{ label: "Type", value: "Inkjet Color" }, { label: "Speed", value: "33 ppm" }, { label: "WiFi", value: "Yes" }, { label: "Brand", value: "Epson" }] },
  ]},
  "cnc-lathe-machine": { title: "CNC Lathe Machine", listings: [
    { id: 1, name: "Jyoti CNC DX-200 Lathe", price: "₹18,50,000", unit: "Unit", badge: L, img: "https://cdn-icons-png.flaticon.com/512/3079/3079162.png", location: "Rajkot", specs: [{ label: "Chuck Size", value: "200 mm" }, { label: "Spindle Speed", value: "4000 RPM" }, { label: "Power", value: "7.5 KW" }, { label: "Brand", value: "Jyoti CNC" }] },
    { id: 2, name: "ACE Designers LT-20 CNC", price: "₹14,20,000", unit: "Unit", badge: V, img: "https://cdn-icons-png.flaticon.com/512/3079/3079162.png", location: "Bangalore", specs: [{ label: "Chuck Size", value: "165 mm" }, { label: "Spindle Speed", value: "3500 RPM" }, { label: "Power", value: "5.5 KW" }, { label: "Brand", value: "ACE" }] },
  ]},
  "hydraulic-press": { title: "Hydraulic Press", listings: [
    { id: 1, name: "Elmech 100 Ton H-Frame Press", price: "₹4,50,000", unit: "Unit", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2271/2271046.png", location: "Ahmedabad", specs: [{ label: "Capacity", value: "100 Ton" }, { label: "Type", value: "H-Frame" }, { label: "Stroke", value: "300 mm" }, { label: "Brand", value: "Elmech" }] },
    { id: 2, name: "Flowmech 60 Ton C-Frame Press", price: "₹2,80,000", unit: "Unit", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2271/2271046.png", location: "Faridabad", specs: [{ label: "Capacity", value: "60 Ton" }, { label: "Type", value: "C-Frame" }, { label: "Stroke", value: "200 mm" }, { label: "Brand", value: "Flowmech" }] },
  ]},
  "welding-machine": { title: "Welding Machine", listings: [
    { id: 1, name: "ESAB Buddy Arc 200i", price: "₹12,500", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2271/2271098.png", location: "Pune", specs: [{ label: "Current", value: "200A" }, { label: "Type", value: "MMA/TIG" }, { label: "Voltage", value: "230V" }, { label: "Brand", value: "ESAB" }] },
    { id: 2, name: "Fronius TransSteel 2200", price: "₹45,000", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2271/2271098.png", location: "Mumbai", specs: [{ label: "Current", value: "220A" }, { label: "Type", value: "MIG/MAG" }, { label: "Voltage", value: "230V" }, { label: "Brand", value: "Fronius" }] },
  ]},
  "passenger-car": { title: "Passenger Car", listings: [
    { id: 1, name: "Maruti Suzuki Dzire VXi", price: "₹7,49,000", unit: "Unit", badge: L, img: "https://cdn-icons-png.flaticon.com/512/3774/3774278.png", location: "New Delhi", specs: [{ label: "Engine", value: "1197 cc Petrol" }, { label: "Mileage", value: "23.26 km/l" }, { label: "Transmission", value: "Manual" }, { label: "Brand", value: "Maruti Suzuki" }] },
    { id: 2, name: "Hyundai Aura S CNG", price: "₹8,10,000", unit: "Unit", badge: V, img: "https://cdn-icons-png.flaticon.com/512/3774/3774278.png", location: "Chennai", specs: [{ label: "Engine", value: "1197 cc CNG" }, { label: "Mileage", value: "30.1 km/kg" }, { label: "Transmission", value: "Manual" }, { label: "Brand", value: "Hyundai" }] },
  ]},
  "electric-bus": { title: "Electric Bus", listings: [
    { id: 1, name: "Tata Starbus EV 12m", price: "₹1,20,00,000", unit: "Unit", badge: L, img: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png", location: "Pune", specs: [{ label: "Range", value: "250 km" }, { label: "Capacity", value: "40 Passengers" }, { label: "Battery", value: "250 kWh" }, { label: "Brand", value: "Tata Motors" }] },
    { id: 2, name: "Olectra K9 Electric Bus", price: "₹1,05,00,000", unit: "Unit", badge: V, img: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png", location: "Hyderabad", specs: [{ label: "Range", value: "200 km" }, { label: "Capacity", value: "35 Passengers" }, { label: "Battery", value: "324 kWh" }, { label: "Brand", value: "Olectra-BYD" }] },
  ]},
  "ambulance": { title: "Ambulance", listings: [
    { id: 1, name: "Force Traveller ALS Ambulance", price: "₹16,50,000", unit: "Unit", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2382/2382461.png", location: "Pune", specs: [{ label: "Type", value: "ALS" }, { label: "Engine", value: "2596 cc Diesel" }, { label: "Equipment", value: "Ventilator, Monitor" }, { label: "Brand", value: "Force Motors" }] },
    { id: 2, name: "Tata Winger BLS Ambulance", price: "₹12,80,000", unit: "Unit", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2382/2382461.png", location: "Mumbai", specs: [{ label: "Type", value: "BLS" }, { label: "Engine", value: "2200 cc Diesel" }, { label: "Equipment", value: "Stretcher, O2" }, { label: "Brand", value: "Tata Motors" }] },
  ]},
  "office-chair": { title: "Office Chair", listings: [
    { id: 1, name: "Featherlite Optima HB Chair", price: "₹14,500", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/5781/5781388.png", location: "Bangalore", specs: [{ label: "Type", value: "High Back" }, { label: "Material", value: "Mesh + Foam" }, { label: "Armrest", value: "Adjustable" }, { label: "Brand", value: "Featherlite" }] },
    { id: 2, name: "Godrej Motion High Back Chair", price: "₹18,200", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/5781/5781388.png", location: "Mumbai", specs: [{ label: "Type", value: "High Back" }, { label: "Material", value: "Leatherette" }, { label: "Armrest", value: "Fixed" }, { label: "Brand", value: "Godrej Interio" }] },
  ]},
  "filing-cabinet": { title: "Filing Cabinet", listings: [
    { id: 1, name: "Godrej OEM 4-Drawer Cabinet", price: "₹8,900", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png", location: "Mumbai", specs: [{ label: "Drawers", value: "4" }, { label: "Material", value: "Mild Steel" }, { label: "Lock", value: "Central Locking" }, { label: "Brand", value: "Godrej" }] },
    { id: 2, name: "Spacewood Lateral File Cabinet", price: "₹6,500", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png", location: "Nagpur", specs: [{ label: "Drawers", value: "3" }, { label: "Material", value: "Engineered Wood" }, { label: "Lock", value: "Key Lock" }, { label: "Brand", value: "Spacewood" }] },
  ]},
  "whiteboard": { title: "Whiteboard", listings: [
    { id: 1, name: "NECHAMS Magnetic Whiteboard 4x3", price: "₹1,850", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/3413/3413547.png", location: "Hyderabad", specs: [{ label: "Size", value: "4 x 3 ft" }, { label: "Type", value: "Magnetic" }, { label: "Frame", value: "Aluminium" }, { label: "Brand", value: "NECHAMS" }] },
    { id: 2, name: "Pragati Systems Whiteboard 5x4", price: "₹2,400", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/3413/3413547.png", location: "New Delhi", specs: [{ label: "Size", value: "5 x 4 ft" }, { label: "Type", value: "Non-Magnetic" }, { label: "Frame", value: "Wooden" }, { label: "Brand", value: "Pragati" }] },
  ]},
  "cement-bags": { title: "Cement Bags", listings: [
    { id: 1, name: "UltraTech OPC 53 Grade Cement", price: "₹380", unit: "Bag", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2271/2271067.png", location: "Mumbai", specs: [{ label: "Grade", value: "OPC 53" }, { label: "Weight", value: "50 kg" }, { label: "Type", value: "Ordinary Portland" }, { label: "Brand", value: "UltraTech" }] },
    { id: 2, name: "ACC Gold PPC Cement", price: "₹365", unit: "Bag", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2271/2271067.png", location: "Kolkata", specs: [{ label: "Grade", value: "PPC" }, { label: "Weight", value: "50 kg" }, { label: "Type", value: "Portland Pozzolana" }, { label: "Brand", value: "ACC" }] },
  ]},
  "steel-tmt-bars": { title: "Steel TMT Bars", listings: [
    { id: 1, name: "Tata Tiscon Fe 500D TMT Bar", price: "₹58,500", unit: "Tonne", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2271/2271113.png", location: "Jamshedpur", specs: [{ label: "Grade", value: "Fe 500D" }, { label: "Size", value: "8mm - 32mm" }, { label: "Standard", value: "IS 1786" }, { label: "Brand", value: "Tata Tiscon" }] },
    { id: 2, name: "JSW NeoSteel Fe 550D TMT", price: "₹56,200", unit: "Tonne", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2271/2271113.png", location: "Bellary", specs: [{ label: "Grade", value: "Fe 550D" }, { label: "Size", value: "8mm - 40mm" }, { label: "Standard", value: "IS 1786" }, { label: "Brand", value: "JSW Steel" }] },
  ]},
  "pvc-pipes": { title: "PVC Pipes", listings: [
    { id: 1, name: "Astral CPVC Pro Pipe 1 inch", price: "₹320", unit: "Meter", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2271/2271080.png", location: "Ahmedabad", specs: [{ label: "Size", value: "1 inch" }, { label: "Type", value: "CPVC" }, { label: "Pressure", value: "SDR 11" }, { label: "Brand", value: "Astral" }] },
    { id: 2, name: "Supreme PVC SWR Pipe 4 inch", price: "₹185", unit: "Meter", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2271/2271080.png", location: "Pune", specs: [{ label: "Size", value: "4 inch" }, { label: "Type", value: "SWR" }, { label: "Pressure", value: "Type B" }, { label: "Brand", value: "Supreme" }] },
  ]},
  "patient-monitor": { title: "Patient Monitor", listings: [
    { id: 1, name: "Philips IntelliVue MX450", price: "₹3,50,000", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2382/2382533.png", location: "Bangalore", specs: [{ label: "Parameters", value: "ECG, SpO2, NIBP, Temp" }, { label: "Screen", value: "15 inch" }, { label: "Battery", value: "Yes" }, { label: "Brand", value: "Philips" }] },
    { id: 2, name: "BPL Ultima Prime Monitor", price: "₹1,85,000", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2382/2382533.png", location: "Bangalore", specs: [{ label: "Parameters", value: "ECG, SpO2, NIBP" }, { label: "Screen", value: "12.1 inch" }, { label: "Battery", value: "Yes" }, { label: "Brand", value: "BPL Medical" }] },
  ]},
  "oxygen-concentrator": { title: "Oxygen Concentrator", listings: [
    { id: 1, name: "Philips EverFlo 5L Concentrator", price: "₹48,000", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2382/2382580.png", location: "Mumbai", specs: [{ label: "Flow Rate", value: "5 LPM" }, { label: "Purity", value: "93% ± 3%" }, { label: "Weight", value: "14 kg" }, { label: "Brand", value: "Philips" }] },
    { id: 2, name: "Invacare Perfecto2 V", price: "₹42,500", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2382/2382580.png", location: "New Delhi", specs: [{ label: "Flow Rate", value: "5 LPM" }, { label: "Purity", value: "92% ± 3%" }, { label: "Weight", value: "15.9 kg" }, { label: "Brand", value: "Invacare" }] },
  ]},
  "wheelchair": { title: "Wheelchair", listings: [
    { id: 1, name: "Karma Ergo 115 Wheelchair", price: "₹8,500", unit: "Piece", badge: L, img: "https://cdn-icons-png.flaticon.com/512/2382/2382522.png", location: "Pune", specs: [{ label: "Type", value: "Foldable Manual" }, { label: "Weight Capacity", value: "100 kg" }, { label: "Weight", value: "13.5 kg" }, { label: "Brand", value: "Karma" }] },
    { id: 2, name: "Vissco Imperio Wheelchair", price: "₹5,200", unit: "Piece", badge: V, img: "https://cdn-icons-png.flaticon.com/512/2382/2382522.png", location: "Mumbai", specs: [{ label: "Type", value: "Foldable Manual" }, { label: "Weight Capacity", value: "120 kg" }, { label: "Weight", value: "16 kg" }, { label: "Brand", value: "Vissco" }] },
  ]},
};

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = productData[slug];

  if (!data) {
    return (
      <div className="bg-[#f5f5f5] min-h-screen">
        <PublicNav activePage="Marketplace" />
        <div className="max-w-5xl mx-auto px-8 py-20 text-center">
          <span className="material-symbols-outlined text-6xl text-[#ccc]">search_off</span>
          <p className="text-lg text-[#666] mt-4">Product not found</p>
          <Link href="/marketplace" className="text-[#008080] font-medium mt-4 inline-block hover:underline">← Back to Marketplace</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] text-[#333] min-h-screen">
      <PublicNav activePage="Marketplace" />
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-[#666] mb-4">
          <Link href="/marketplace" className="hover:text-[#008080] transition-colors">Marketplace</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-[#333] font-medium">{data.title}</span>
        </div>

        <h1 className="text-2xl font-bold text-[#333] mb-6">{data.title} - Suppliers & Prices</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.listings.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-[#e8e8e8] overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-36 bg-[#f7f7f7] flex items-center justify-center p-4 overflow-hidden">
                <div className="absolute top-2 left-2 bg-[#008080] text-white text-[9px] font-bold px-2 py-0.5 rounded">{item.badge}</div>
                <img src={item.img} alt={item.name} className="h-20 w-20 object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#333] leading-snug line-clamp-2">{item.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-bold text-[#333]">{item.price}</span>
                  <span className="text-[10px] text-[#888]">/{item.unit}</span>
                </div>
                <Link href="/#requirement-form" className="block w-full py-2 bg-[#008080] text-white text-xs font-bold rounded hover:bg-[#006666] transition-colors text-center">
                  Contact Supplier
                </Link>
                <div className="border-t border-[#f0f0f0] pt-2 space-y-1">
                  {item.specs.slice(0, 3).map((s) => (
                    <div key={s.label} className="flex justify-between text-[10px]">
                      <span className="text-[#999]">{s.label}</span>
                      <span className="text-[#333] font-medium">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#888]">
                  <span className="material-symbols-outlined text-[10px]">location_on</span>
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

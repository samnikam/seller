"use client";

import { useState } from "react";
import Link from "next/link";
import PublicNav from "@/components/layout/PublicNav";
import Footer from "@/components/layout/Footer";

const roles = [
  {
    id: "buyer",
    icon: "account_balance",
    label: "Government Buyer",
    desc: "Authorized procurement official for state entities.",
  },
  {
    id: "seller",
    icon: "storefront",
    label: "Product Seller",
    desc: "Direct suppliers and authorized trade partners.",
    active: true,
  },
  {
    id: "oem",
    icon: "factory",
    label: "OEM Partner",
    desc: "Original equipment manufacturers and brand owners.",
  },
  {
    id: "investor",
    icon: "query_stats",
    label: "Institutional Investor",
    desc: "Venture and capital partners in the supply chain.",
  },
];

export default function LoginPage() {
  const [step, setStep] = useState<"role" | "register">("role");
  const [selectedRole, setSelectedRole] = useState("seller");

  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden min-h-screen flex flex-col">
      <PublicNav />

      {/* Main */}
      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center relative p-6 flex-1">
        {/* Background decorations */}
        <div className="absolute inset-0 auth-grid-bg pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <section className="w-full max-w-5xl grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Branding column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-primary p-10 rounded-full flex flex-col justify-end min-h-[320px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary opacity-80" />
              <div className="relative z-10">
                <div className="bg-secondary px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest inline-block mb-4 rounded-sm">
                  Enterprise Authority
                </div>
                <h1 className="font-headline text-4xl font-black text-white leading-tight mb-4 uppercase tracking-tight">
                  Institutional <br />Commerce
                </h1>
                <p className="text-blue-100/80 font-body text-sm leading-relaxed">
                  The unified digital environment for government procurement, deep-tier bids, and
                  enterprise-grade logistics.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: "verified_user",
                  title: "KYC Verified",
                  desc: "Tier-1 security protocols for all exchange participants.",
                },
                {
                  icon: "analytics",
                  title: "Real-time Data",
                  desc: "Instant analytics on market shifts and tender volumes.",
                },
              ].map((card) => (
                <div key={card.title} className="bg-surface-container-low p-6 rounded-full">
                  <span className="material-symbols-outlined text-primary mb-3">{card.icon}</span>
                  <h3 className="font-headline font-bold text-primary text-sm uppercase">{card.title}</h3>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-normal">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-full shadow-2xl shadow-primary/5 p-8 lg:p-12">
            {step === "role" ? (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="font-headline text-2xl font-bold text-primary">
                    Identity Selection
                  </h2>
                  <p className="text-on-surface-variant text-sm">
                    Choose your primary operational role to begin registration.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`flex flex-col items-start p-6 rounded-full border-2 transition-all text-left group ${
                        selectedRole === role.id
                          ? "border-primary shadow-lg shadow-primary/5"
                          : "border-surface-container-low hover:border-primary"
                      } bg-white`}
                    >
                      <span
                        className={`material-symbols-outlined mb-4 p-3 rounded-xl transition-colors ${
                          selectedRole === role.id
                            ? "bg-primary text-white"
                            : "bg-surface-container-low text-primary group-hover:bg-primary group-hover:text-white"
                        }`}
                        style={selectedRole === role.id ? { fontVariationSettings: "'FILL' 1" } : undefined}
                      >
                        {role.icon}
                      </span>
                      <span className="font-headline font-bold text-primary uppercase text-xs tracking-wider">
                        {role.label}
                      </span>
                      <span className="text-[11px] text-on-surface-variant mt-1">{role.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6">
                  <a href="#" className="text-primary font-label font-semibold text-sm hover:underline">
                    Existing user? Sign In
                  </a>
                  <button
                    onClick={() => setStep("register")}
                    className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs flex items-center gap-2 group"
                  >
                    Continue Setup
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="font-headline text-2xl font-bold text-primary">
                    Organizational Details
                  </h2>
                  <p className="text-on-surface-variant text-sm">
                    Please provide authentic credentials as per legal filings.
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-headline font-bold text-primary uppercase tracking-wider">
                        Full Legal Name
                      </label>
                      <input
                        type="text"
                        placeholder="Johnathan Doe"
                        className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-sm placeholder:text-slate-400 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-headline font-bold text-primary uppercase tracking-wider">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        placeholder="j.doe@entity.gov"
                        className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-sm placeholder:text-slate-400 outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-headline font-bold text-primary uppercase tracking-wider">
                      Organization / Business ID
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="TAX-ID-000-0000"
                        className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl pl-12 pr-4 py-3 text-sm placeholder:text-slate-400 outline-none"
                      />
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                        corporate_fare
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-headline font-bold text-primary uppercase tracking-wider">
                      Establish Security Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-sm placeholder:text-slate-400 outline-none"
                    />
                    <p className="text-[10px] text-on-surface-variant/70 italic">
                      Minimum 12 characters, including structural markers.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      className="mt-1 rounded text-primary focus:ring-primary border-outline-variant"
                    />
                    <label className="text-[11px] text-on-surface-variant leading-relaxed">
                      I verify that I am an authorized signatory for this entity and agree to the{" "}
                      <a href="#" className="text-primary font-bold hover:underline">
                        GovSeller Procurement Protocols
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary font-bold hover:underline">
                        Data Residency Laws
                      </a>
                      .
                    </label>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep("role")}
                      className="flex-1 border border-outline-variant text-on-surface-variant px-6 py-3 rounded-xl font-headline font-bold uppercase tracking-widest text-xs"
                    >
                      Back
                    </button>
                    <Link
                      href="/dashboard/buyer"
                      className="flex-[2] bg-primary text-white px-6 py-3 rounded-xl font-headline font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 text-center"
                    >
                      Initialize Account
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";

const categories = [
  "Electronics & IT Equipment",
  "Machinery & Industrial Tools",
  "Vehicles & Transport",
  "Office Supplies",
  "Construction Materials",
  "Medical Equipment",
  "Other",
];

const requirementTypes = [
  "Product Purchase",
  "OEM Requirement",
  "Bulk Supply",
];

const timelines = [
  "Immediate (Within 7 days)",
  "Within 15 days",
  "Within 30 days",
  "Within 60 days",
  "Flexible",
];

const inputClass =
  "w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

export default function BuyerRequirementForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    requirementType: "",
    quantity: "",
    location: "",
    timeline: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Requirement submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/10 text-center space-y-4">
        <div className="w-14 h-14 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-tertiary text-3xl">check_circle</span>
        </div>
        <h3 className="text-lg font-medium text-primary font-headline">Requirement Submitted!</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          We&apos;ve received your requirement. Verified sellers and OEMs will be notified
          and the best match will connect with you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", category: "", requirementType: "", quantity: "", location: "", timeline: "", description: "" });
          }}
          className="text-sm text-secondary font-medium hover:underline"
        >
          Submit another requirement
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-8 rounded-2xl border-2 border-primary/15 shadow-lg shadow-primary/5 space-y-5 relative overflow-hidden"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />

      <div className="space-y-1 pt-1">
        <h3 className="text-base font-medium text-primary font-headline">Post Your Requirement</h3>
        <p className="text-on-surface-variant text-xs">Fill in the details and get connected with verified sellers & OEMs.</p>
      </div>

      {/* Name & Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-on-surface-variant">Full Name *</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-on-surface-variant">Email *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      {/* Phone & Category */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-medium text-on-surface-variant">Phone Number *</label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="category" className="text-xs font-medium text-on-surface-variant">Material / Product Category *</label>
          <select id="category" name="category" required value={form.category} onChange={handleChange} className={inputClass}>
            <option value="" disabled>Select category</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Requirement Type & Quantity */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="requirementType" className="text-xs font-medium text-on-surface-variant">Requirement Type *</label>
          <select id="requirementType" name="requirementType" required value={form.requirementType} onChange={handleChange} className={inputClass}>
            <option value="" disabled>Select type</option>
            {requirementTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="quantity" className="text-xs font-medium text-on-surface-variant">Quantity / Budget (approx.) *</label>
          <input id="quantity" name="quantity" type="text" required value={form.quantity} onChange={handleChange} placeholder="e.g. 500 units or ₹5,00,000" className={inputClass} />
        </div>
      </div>

      {/* Location & Timeline */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="location" className="text-xs font-medium text-on-surface-variant">Project / Delivery Location *</label>
          <input id="location" name="location" type="text" required value={form.location} onChange={handleChange} placeholder="City, State" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="timeline" className="text-xs font-medium text-on-surface-variant">Delivery Timeline *</label>
          <select id="timeline" name="timeline" required value={form.timeline} onChange={handleChange} className={inputClass}>
            <option value="" disabled>Select timeline</option>
            {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label htmlFor="description" className="text-xs font-medium text-on-surface-variant">Description</label>
        <textarea
          id="description"
          name="description"
          rows={3}
          value={form.description}
          onChange={handleChange}
          placeholder="Describe your requirement — specifications, preferred brands, special conditions, etc."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-lg">send</span>
        Submit Requirement
      </button>

      <p className="text-[11px] text-on-surface-variant/60 text-center">
        <span className="material-symbols-outlined text-[10px] align-middle mr-0.5">lock</span>
        Your details are shared only with matched verified sellers and OEMs.
      </p>
    </form>
  );
}

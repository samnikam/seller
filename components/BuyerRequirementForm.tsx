"use client";

import { useState } from "react";

const categories = [
  "Construction Materials",
  "Electrical Supplies",
  "Machinery & Equipment",
  "Office & IT Supplies",
  "Road & Infrastructure Materials",
  "Medical / Healthcare",
  "Other",
];

export default function BuyerRequirementForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    quantity: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to backend / API
    console.log("Buyer requirement submitted:", form);
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
          We&apos;ve received your requirement. Our verified vendors will be notified and
          the best match will connect with you shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", category: "", quantity: "", description: "" }); }}
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
      className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/10 space-y-5"
    >
      <div className="space-y-1">
        <h3 className="text-base font-medium text-primary font-headline">Post your requirement</h3>
        <p className="text-on-surface-variant text-xs">Fill in the details and we&apos;ll connect you with the right vendor.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-on-surface-variant">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-on-surface-variant">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-medium text-on-surface-variant">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="category" className="text-xs font-medium text-on-surface-variant">Material Category</label>
          <select
            id="category"
            name="category"
            required
            value={form.category}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          >
            <option value="" disabled>Select category</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="quantity" className="text-xs font-medium text-on-surface-variant">Quantity / Budget (approx.)</label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          required
          value={form.quantity}
          onChange={handleChange}
          placeholder="e.g. 500 units or ₹5,00,000"
          className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="description" className="text-xs font-medium text-on-surface-variant">Describe your requirement</label>
        <textarea
          id="description"
          name="description"
          required
          rows={3}
          value={form.description}
          onChange={handleChange}
          placeholder="Briefly describe what you need, specifications, delivery timeline, etc."
          className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/20 bg-surface text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-lg">send</span>
        Submit Requirement
      </button>

      <p className="text-[11px] text-on-surface-variant/60 text-center">
        Your details are shared only with matched verified vendors.
      </p>
    </form>
  );
}

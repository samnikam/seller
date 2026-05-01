"use client";

import { useState } from "react";
import PublicNav from "@/components/layout/PublicNav";
import Footer from "@/components/layout/Footer";

const API_URL = "http://localhost:8000/api";

const roles = [
  { id: "seller", label: "Seller" },
  { id: "oem", label: "OEM / Supplier" },
  { id: "buyer", label: "Government Buyer" },
  { id: "investor", label: "Investor" },
  { id: "admin", label: "Admin" },
];

export default function LoginPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [role, setRole] = useState("seller");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch(`${API_URL}/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        setMessage({ type: "success", text: `Welcome back, ${data.user.name}!` });
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch {
      setMessage({ type: "error", text: "Server not reachable. Make sure PHP backend is running." });
    }
    setLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch(`${API_URL}/register.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role, phone, company }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: "success", text: "Registration successful! You can now login." });
        setTab("login");
        setName("");
        setPhone("");
        setCompany("");
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch {
      setMessage({ type: "error", text: "Server not reachable. Make sure PHP backend is running." });
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#f5f5f5] text-[#333] min-h-screen flex flex-col">
      <PublicNav />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#e8e8e8] overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-[#e8e8e8]">
              <button onClick={() => { setTab("login"); setMessage(null); }} className={`flex-1 py-3.5 text-sm font-bold transition-colors ${tab === "login" ? "text-[#002869] border-b-2 border-[#002869]" : "text-[#999]"}`}>Login</button>
              <button onClick={() => { setTab("register"); setMessage(null); }} className={`flex-1 py-3.5 text-sm font-bold transition-colors ${tab === "register" ? "text-[#002869] border-b-2 border-[#002869]" : "text-[#999]"}`}>Register</button>
            </div>

            <div className="p-6 md:p-8">
              {/* Message */}
              {message && (
                <div className={`mb-4 px-4 py-3 rounded-lg text-sm font-medium ${message.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
                  {message.text}
                </div>
              )}

              {/* Login Form */}
              {tab === "login" && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#555]">Email</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full px-4 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869] transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#555]">Password</label>
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869] transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#555]">Select Role</label>
                    <div className="grid grid-cols-2 gap-2">
                      {roles.map((r) => (
                        <button key={r.id} type="button" onClick={() => setRole(r.id)} className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${role === r.id ? "bg-[#002869] text-white border-[#002869]" : "bg-white text-[#555] border-[#ddd] hover:border-[#002869]"}`}>
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-3 bg-[#002869] text-white text-sm font-bold rounded-lg hover:bg-[#0b3d91] transition-colors disabled:opacity-50">
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </form>
              )}

              {/* Register Form */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#555]">Full Name *</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className="w-full px-4 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869] transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#555]">Email *</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full px-4 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869] transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#555]">Password *</label>
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 characters" className="w-full px-4 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869] transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#555]">Phone</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91" className="w-full px-4 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869] transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#555]">Company</label>
                      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company name" className="w-full px-4 py-2.5 border border-[#ddd] rounded-lg text-sm outline-none focus:border-[#002869] transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#555]">Select Role *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {roles.filter((r) => r.id !== "admin").map((r) => (
                        <button key={r.id} type="button" onClick={() => setRole(r.id)} className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${role === r.id ? "bg-[#002869] text-white border-[#002869]" : "bg-white text-[#555] border-[#ddd] hover:border-[#002869]"}`}>
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-3 bg-[#002869] text-white text-sm font-bold rounded-lg hover:bg-[#0b3d91] transition-colors disabled:opacity-50">
                    {loading ? "Registering..." : "Create Account"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

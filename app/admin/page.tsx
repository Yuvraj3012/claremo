"use client";

import { useState } from "react";

interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
}

type View = "login" | "loading" | "dashboard" | "error";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [view, setView] = useState<View>("login");
  const [data, setData] = useState<WaitlistEntry[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setView("loading");

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();

      if (res.ok) {
        setData(json.data ?? []);
        setView("dashboard");
      } else if (res.status === 401) {
        setErrorMsg("Incorrect password.");
        setView("login");
        setPassword("");
      } else {
        setErrorMsg("Something went wrong. Try again.");
        setView("error");
      }
    } catch {
      setErrorMsg("Network error. Try again.");
      setView("error");
    }
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  if (view === "loading") {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-400">
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading...
        </div>
      </div>
    );
  }

  if (view === "dashboard") {
    return (
      <div className="min-h-screen bg-gray-950 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <span className="text-violet-500 text-lg">◆</span>
              <span className="text-white font-semibold">Claremo Admin</span>
            </div>
            <button
              onClick={() => { setView("login"); setData([]); setPassword(""); }}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Sign out
            </button>
          </div>

          {/* Count card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6 text-center">
            <div className="text-7xl font-extrabold text-white mb-2">{data.length}</div>
            <div className="text-gray-400 text-sm">total signups</div>
          </div>

          {/* Table */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-800">
              <h2 className="text-white text-sm font-semibold">Waitlist</h2>
            </div>
            {data.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-500 text-sm">No signups yet.</div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left px-6 py-3 text-xs text-gray-500 font-medium uppercase tracking-wide">#</th>
                    <th className="text-left px-6 py-3 text-xs text-gray-500 font-medium uppercase tracking-wide">Email</th>
                    <th className="text-left px-6 py-3 text-xs text-gray-500 font-medium uppercase tracking-wide">Signed up</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((entry, i) => (
                    <tr key={entry.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-gray-600 tabular-nums">{i + 1}</td>
                      <td className="px-6 py-3.5 text-gray-200">{entry.email}</td>
                      <td className="px-6 py-3.5 text-gray-500 tabular-nums">{formatDate(entry.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }

  // login / error view
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-violet-500 text-xl">◆</span>
            <span className="text-white font-semibold text-lg">Claremo</span>
          </div>
          <p className="text-gray-500 text-sm">Admin access</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>

            {errorMsg && (
              <p className="text-red-400 text-xs text-center">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

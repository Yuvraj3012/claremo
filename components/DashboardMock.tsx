export default function DashboardMock() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl bg-[#0f0f14] text-white text-xs font-sans select-none">
      <div className="flex h-[420px] sm:h-[500px]">
        {/* Sidebar */}
        <div className="hidden sm:flex w-44 flex-col bg-[#0a0a10] border-r border-gray-800 flex-shrink-0">
          <div className="px-3 py-3 border-b border-gray-800">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-violet-400 text-xs">◆</span>
              <span className="text-[10px] font-semibold text-gray-200">AI Finance</span>
            </div>
            <div className="text-[9px] text-gray-500">Department</div>
          </div>
          <nav className="flex-1 px-2 py-2 flex flex-col gap-0.5 overflow-hidden">
            {[
              { label: "Overview", active: true },
              { label: "Daily Briefing" },
              { label: "Profit Intelligence" },
              { label: "Revenue" },
              { label: "Cash Flow" },
              { label: "Expenses" },
              { label: "Reimbursements" },
              { label: "Taxes & Filing" },
              { label: "Invoices & Bills" },
              { label: "Sales & Customers" },
              { label: "Integrations" },
              { label: "Documents" },
              { label: "Alerts" },
              { label: "AI CFO Chat" },
            ].map((item) => (
              <div
                key={item.label}
                className={`px-2 py-1 rounded text-[9px] cursor-pointer ${
                  item.active
                    ? "bg-violet-600/20 text-violet-300 font-medium"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {item.label}
              </div>
            ))}
          </nav>
          <div className="p-2 border-t border-gray-800">
            <div className="text-[8px] text-gray-600 mb-1 uppercase tracking-wide">Data Sources</div>
            {["Stripe", "Shopify", "Meta Ads", "Google Ads", "Plaid (Bank)", "QuickBooks", "Gusto Payroll"].map((s) => (
              <div key={s} className="flex items-center gap-1 py-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-[8px] text-gray-500">{s}</span>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-800">
            <div className="bg-violet-600 rounded px-2 py-1 text-[8px] text-center font-medium">Upgrade Plan</div>
            <div className="text-[7px] text-gray-600 text-center mt-0.5">Acme Labs Inc ▾</div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 flex-shrink-0">
            <div className="text-[10px] text-gray-200 font-medium">
              Good morning, Alex 👋
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-gray-500">May 21 – May 27, 2025</span>
              <div className="flex items-center gap-1">
                <span className="text-[9px] text-gray-500">↑ Share</span>
                <div className="bg-violet-600 text-white text-[8px] px-2 py-0.5 rounded">+ Connect Source</div>
              </div>
              <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-[8px] font-bold">A</div>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-5 gap-0 border-b border-gray-800 flex-shrink-0">
            {[
              { label: "Total Revenue", value: "$124,320", change: "+12.0%", up: true },
              { label: "Gross Profit", value: "$48,721", change: "+6.0%", up: true },
              { label: "Net Profit", value: "$21,346", change: "+0.2%", up: true },
              { label: "Cash Balance", value: "$412,890", change: "+9.2%", up: true },
              { label: "Runway", value: "18.3 months", change: "0% change", up: null },
            ].map((m, i) => (
              <div key={i} className={`px-3 py-2 ${i < 4 ? "border-r border-gray-800" : ""}`}>
                <div className="text-[8px] text-gray-500 mb-0.5">{m.label}</div>
                <div className="text-[11px] font-semibold text-gray-100">{m.value}</div>
                <div className={`text-[8px] mt-0.5 ${m.up === true ? "text-emerald-400" : m.up === false ? "text-red-400" : "text-gray-500"}`}>
                  {m.change}
                </div>
                <div className="mt-1 h-5 flex items-end gap-px">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div
                      key={j}
                      className={`w-full rounded-sm ${m.up === true ? "bg-emerald-500/40" : "bg-gray-700"}`}
                      style={{ height: `${20 + Math.sin(j * 1.2 + i) * 12}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Body grid */}
          <div className="flex-1 grid grid-cols-3 gap-0 overflow-hidden">
            {/* Left: AI Briefing */}
            <div className="col-span-1 border-r border-gray-800 p-3 overflow-hidden">
              <div className="text-[8px] text-violet-400 font-medium mb-1.5 uppercase tracking-wide">AI Daily Briefing</div>
              <div className="text-[9px] text-gray-300 font-medium mb-0.5">Good morning, Alex.</div>
              <div className="text-[8px] text-gray-500 mb-2">Here&apos;s what happened yesterday and what matters today.</div>
              <div className="flex flex-col gap-1.5">
                <div className="bg-gray-800/60 rounded p-1.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[8px] text-emerald-400 font-medium">Revenue increased 12.8%</div>
                      <div className="text-[7px] text-gray-500">vs last week</div>
                    </div>
                    <span className="text-[8px] text-emerald-400 font-mono">+$12,912</span>
                  </div>
                </div>
                <div className="bg-gray-800/60 rounded p-1.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[8px] text-amber-400 font-medium">AWS spending increased 23%</div>
                      <div className="text-[7px] text-gray-500">You&apos;re spending $4,210 more than last week</div>
                    </div>
                    <span className="text-[8px] text-amber-400 font-mono">$22,410</span>
                  </div>
                </div>
                <div className="bg-gray-800/60 rounded p-1.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[8px] text-red-400 font-medium">2 invoices are overdue</div>
                      <div className="text-[7px] text-gray-500">Meta Ads ROA dropped below $7</div>
                    </div>
                    <span className="text-[8px] text-red-400 font-mono">-$18,400</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 bg-violet-600/10 border border-violet-600/20 rounded p-1.5">
                <div className="text-[7px] text-violet-300 font-medium">Top Recommendation</div>
                <div className="text-[7px] text-gray-400 mt-0.5">Pause Campaign #18 and reallocate $1,200 to Campaign #7.</div>
                <div className="mt-1 bg-violet-600 text-white text-[7px] px-2 py-0.5 rounded w-fit">View Details</div>
              </div>
            </div>

            {/* Middle: Chart */}
            <div className="col-span-1 border-r border-gray-800 p-3 overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[9px] text-gray-200 font-medium">Revenue vs Net Profit</div>
                <div className="flex gap-1">
                  {["Daily", "Weekly", "Monthly"].map((t, i) => (
                    <span key={t} className={`text-[7px] px-1.5 py-0.5 rounded ${i === 1 ? "bg-gray-700 text-gray-200" : "text-gray-600"}`}>{t}</span>
                  ))}
                </div>
              </div>
              {/* Simple SVG chart */}
              <svg viewBox="0 0 200 80" className="w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,60 C20,55 40,40 60,45 C80,50 100,30 120,25 C140,20 160,35 180,20 L200,15 L200,80 L0,80 Z" fill="url(#revGrad)" />
                <path d="M0,60 C20,55 40,40 60,45 C80,50 100,30 120,25 C140,20 160,35 180,20 L200,15" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
                <path d="M0,70 C20,68 40,65 60,62 C80,59 100,55 120,50 C140,45 160,52 180,48 L200,45" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="2,1" />
              </svg>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1"><div className="w-2 h-0.5 bg-violet-500 rounded" /><span className="text-[7px] text-gray-500">Revenue</span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-0.5 bg-emerald-500 rounded" /><span className="text-[7px] text-gray-500">Net Profit</span></div>
              </div>
              {/* Mini stats below chart */}
              <div className="mt-2 grid grid-cols-3 gap-1">
                {[
                  { l: "MRR", v: "$88,420" },
                  { l: "New Customers", v: "$198" },
                  { l: "Churn Rate", v: "1.2%" },
                ].map((s) => (
                  <div key={s.l} className="bg-gray-800/60 rounded p-1">
                    <div className="text-[7px] text-gray-500">{s.l}</div>
                    <div className="text-[9px] text-gray-200 font-medium">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CFO Insights + Alerts */}
            <div className="col-span-1 p-3 overflow-hidden flex flex-col gap-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[8px] text-violet-400 font-medium uppercase tracking-wide">AI CFO Insights</div>
                  <span className="text-[7px] text-violet-400">View all</span>
                </div>
                <div className="bg-gray-800/60 rounded p-1.5 text-[7px] text-gray-400 leading-relaxed">
                  Your gross margin dropped 1.2% this week, mainly due to higher AWS costs and refund spikes. Focus on cost optimization.
                </div>
                <div className="mt-1 border border-gray-700 rounded p-1 flex items-center gap-1">
                  <span className="text-[7px] text-gray-500 flex-1">Ask AI CFO a question</span>
                  <span className="text-[7px] text-violet-400">+</span>
                </div>
              </div>
              <div>
                <div className="text-[8px] text-gray-400 font-medium mb-1">Recent Alerts</div>
                <div className="flex flex-col gap-1">
                  {[
                    { msg: "High AWS spending detected", t: "2 hours ago", c: "amber" },
                    { msg: "Invoice #INV-1024 overdue", t: "4 hours ago", c: "red" },
                    { msg: "Low cash runway warning", t: "1 day ago", c: "amber" },
                    { msg: "Meta ROAS dropped below 2x", t: "1 day ago", c: "red" },
                    { msg: "2 large refunds processed", t: "3 days ago", c: "gray" },
                  ].map((a) => (
                    <div key={a.msg} className="flex items-center gap-1.5">
                      <div className={`w-1 h-1 rounded-full flex-shrink-0 ${a.c === "amber" ? "bg-amber-400" : a.c === "red" ? "bg-red-400" : "bg-gray-500"}`} />
                      <span className="text-[7px] text-gray-400 flex-1 truncate">{a.msg}</span>
                      <span className="text-[7px] text-gray-600">{a.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom caption */}
      <div className="border-t border-gray-800 px-4 py-2 text-center text-[9px] text-gray-600">
        Your real numbers, read overnight and waiting by 8 AM.
      </div>
    </div>
  );
}

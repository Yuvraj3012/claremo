import { Cpu, MessageCircle, CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Original 3 cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Card 1: Daily Briefing */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="text-[10px] font-semibold text-violet-600 uppercase tracking-widest mb-4">
                AI Daily Briefing
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
                Wake up to a brief,<br />not a backlog.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A plain-English summary of what changed overnight — revenue, burn, runway, and the one thing that needs you.
              </p>
            </div>
            <div className="mt-6 bg-[#0f0f14] rounded-xl p-4 text-xs font-mono">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-[10px]">● Good morning, Alex...</span>
                <span className="text-gray-600 text-[10px]">8:00 AM</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-[10px]">Revenue increased 12.8%</span>
                  <span className="text-emerald-400 text-[10px] font-semibold">+$12,912</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-[10px]">AWS spending up 23%</span>
                  <span className="text-amber-400 text-[10px] font-semibold">$22,410</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-[10px]">2 invoices overdue</span>
                  <span className="text-red-400 text-[10px] font-semibold">-$18,400</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Cards 2 & 3 stacked */}
          <div className="flex flex-col gap-4">
            {/* Card 2: AI CFO Chat */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 flex-1">
              <div className="text-[10px] font-semibold text-violet-600 uppercase tracking-widest mb-4">
                AI CFO Chat
              </div>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-5">
                Ask your numbers anything.
              </h3>
              <div className="flex flex-col gap-2">
                <div className="self-end bg-violet-600 text-white text-[11px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[80%]">
                  Can I afford to hire an engineer?
                </div>
                <div className="self-start bg-white border border-gray-200 text-gray-700 text-[11px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[90%] leading-relaxed">
                  Yes. At $160k, runway stays at 12.4 months — above your 12-month floor...
                </div>
              </div>
            </div>

            {/* Card 3: Runway & Forecasting */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 flex-1">
              <div className="text-[10px] font-semibold text-violet-600 uppercase tracking-widest mb-4">
                Runway & Forecasting
              </div>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                See your runway coming.
              </h3>
              <div className="flex items-end gap-4">
                <div>
                  <div className="text-4xl font-extrabold text-gray-900">18.3</div>
                  <div className="text-xs text-gray-500 mt-0.5">mo &nbsp;Runway, Sep</div>
                </div>
                <div className="flex-1">
                  <svg viewBox="0 0 120 40" className="w-full" preserveAspectRatio="none">
                    <path
                      d="M0,35 C20,30 40,25 60,20 C80,15 100,12 120,8"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="120" cy="8" r="3" fill="#7c3aed" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New 3 cards in a row */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Card 4: AI Agents */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
            <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
              <Cpu size={20} className="text-violet-600" />
            </div>
            <div className="text-[10px] font-semibold text-violet-600 uppercase tracking-widest mb-3">
              AI Agents Working 24/7
            </div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">
              Finance handled while you sleep.
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              While you sleep, Claremo&apos;s AI agents categorize transactions, reconcile accounts, and prepare your books automatically. Wake up to work already done.
            </p>
          </div>

          {/* Card 5: Ask Anything */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
              <MessageCircle size={20} className="text-blue-600" />
            </div>
            <div className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest mb-3">
              Ask Anything About Your Finances
            </div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">
              Plain English. Real answers.
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Chat with your finances in plain English. &ldquo;Can I hire another engineer?&rdquo; &ldquo;Why did profit drop?&rdquo; Answers using your actual connected data — not generic advice.
            </p>
          </div>

          {/* Card 6: Approval Inbox */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
              <CheckCircle size={20} className="text-emerald-600" />
            </div>
            <div className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest mb-3">
              Approval Inbox
            </div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">
              You stay in control.
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              High-stakes actions wait for your approval. Invoice reminders, journal entries, ad budget changes — review and approve in one click. You stay in control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const before = [
  "You don't know your real burn rate today",
  "Accountant sends reports once a month — too late",
  "No idea which ad platform is actually profitable",
  "Chasing invoices manually via email",
  "Runway is a spreadsheet guess",
  "A real CFO costs $10,000/month minimum",
];

const after = [
  "Real burn rate updated every morning automatically",
  "Daily AI briefing in your inbox before 7am",
  "True ROAS across every ad platform combined",
  "AI sends reminders, you just approve in one click",
  "Exact runway from live bank + Stripe data",
];

export default function ProblemSection() {
  return (
    <section id="brain" className="py-24 px-4 sm:px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Your finances are broken.<br />Here&apos;s why.
          </h2>
        </div>

        {/* Before / After grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {/* Before */}
          <div className="bg-gray-900 border border-red-900/40 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Right now</span>
            </div>
            <ul className="flex flex-col gap-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-500 text-base mt-0.5 flex-shrink-0">✕</span>
                  <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-gray-900 border border-emerald-900/40 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">With Claremo</span>
            </div>
            <ul className="flex flex-col gap-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-emerald-500 text-base mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-200 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copy */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
            Claremo doesn&apos;t show you dashboards. It does the work.
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Every morning your AI finance team has already categorized transactions, calculated margins, flagged anomalies, and prepared actions for approval. You spend 6 minutes reviewing. They handle the rest.
          </p>
        </div>
      </div>
    </section>
  );
}

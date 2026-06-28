import { BookOpen, BarChart3, Brain, DollarSign } from "lucide-react";

const agents = [
  {
    icon: BookOpen,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    name: "The Bookkeeper",
    description:
      "Categorizes every transaction from your bank and Stripe. Drafts journal entries. Flags anything unusual for review. Never makes you touch a spreadsheet.",
  },
  {
    icon: BarChart3,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    name: "The Analyst",
    description:
      "Compares this week vs last month. Calculates real margins. Detects anomalies — costs that spiked, revenue that dropped. Produces your morning briefing every day at 7am.",
  },
  {
    icon: Brain,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    name: "The CFO",
    description:
      "Answers financial questions in plain English. Models scenarios — what if we hire, what if revenue drops 20%. Tells you if decisions are safe before you make them.",
  },
  {
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    name: "The Collections Agent",
    description:
      "Monitors all outstanding invoices. Drafts payment reminders for overdue clients. You click approve — they send automatically.",
  },
];

export default function AgentsSection() {
  return (
    <section id="agents" className="py-24 px-4 sm:px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Meet your AI finance team
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Four specialized agents working around the clock so you don&apos;t have to.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {agents.map(({ icon: Icon, color, bg, name, description }) => (
            <div
              key={name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
            >
              <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center mb-5`}>
                <Icon size={22} className={color} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import DashboardMock from "./DashboardMock";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 text-violet-600 text-sm font-medium mb-6">
          Meet Claremo
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-6">
          Finance that<br />runs itself.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
          Claremo connects your tools, does the day-to-day finance work, and writes you a brief every morning. You just review what matters.
        </p>

        {/* Email CTA */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <WaitlistForm />
          <a href="#brain" className="text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors">
            See how it works ›
          </a>
        </div>

        {/* Trust line */}
        <p className="text-xs text-gray-400">No credit card · Connect in 2 minutes</p>

        {/* Dashboard screenshot */}
        <div className="mt-14 max-w-5xl mx-auto">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

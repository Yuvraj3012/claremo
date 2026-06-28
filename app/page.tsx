import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SleepSection from "@/components/SleepSection";
import ProblemSection from "@/components/ProblemSection";
import AgentsSection from "@/components/AgentsSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <SleepSection />
      <ProblemSection />
      <AgentsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

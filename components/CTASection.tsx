import WaitlistForm from "./WaitlistForm";

export default function CTASection() {
  return (
    <section id="early-access" className="py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-5">
          Start tomorrow<br />with clarity.
        </h2>
        <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto">
          Join the early access program and let Claremo run your finance department while you build the business.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}

function StripeLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#635BFF" />
      <path d="M9.2 7.6c0-.7.6-1 1.5-1 1.3 0 2.7.4 3.7 1V4.5C13.3 4 11.9 3.5 10.7 3.5c-3 0-5 1.5-5 4.2 0 4.2 5.7 3.5 5.7 5.3 0 .8-.7 1.1-1.7 1.1-1.4 0-3-.5-4.1-1.3V16c1.1.5 2.7.8 4.1.8 3.1 0 5.2-1.4 5.2-4.2-.1-4.5-5.7-3.7-5.7-5z" fill="white" />
    </svg>
  );
}

function PlaidLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#111" />
      <text x="5" y="14.5" fontFamily="Georgia, serif" fontWeight="bold" fontSize="13" fill="white">P</text>
    </svg>
  );
}

function QuickBooksLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#2CA01C" />
      <text x="2.5" y="14" fontFamily="Arial" fontWeight="bold" fontSize="8.5" fill="white">QB</text>
    </svg>
  );
}

function XeroLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#1AB4D7" />
      <text x="5.5" y="14.5" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="white">X</text>
    </svg>
  );
}

function ShopifyLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#96BF48" />
      <path d="M13 6.5c0-.1-.1-.1-.1-.1-.1 0-1.2-.1-1.2-.1s-.8-.8-.9-.9V16l3.7-.9-1.5-8.6z" fill="white" opacity="0.8" />
      <path d="M10.5 5.7l-.4-.1c0-.1-.1-.3-.1-.4-.2-.8-.8-1.2-1.4-1.2-.1 0-.1 0-.2 0-.1-.1-.2-.1-.3-.2-.4-.5-.9-.7-1.3-.6-.9.2-1.8 1.4-2.2 3.5-.3.1-.5.2-.8.2-.5.1-.5.1-.6.7L3 13l6.9 1.3.6-8.6z" fill="white" />
    </svg>
  );
}

function MercuryLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#1a1a2e" />
      <text x="4.5" y="14.5" fontFamily="Arial" fontWeight="bold" fontSize="11" fill="white">M</text>
    </svg>
  );
}

function GustoLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#F45D48" />
      <text x="4.5" y="14.5" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="white">G</text>
    </svg>
  );
}

function AwsLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#FF9900" />
      <text x="1.5" y="13" fontFamily="Arial" fontWeight="bold" fontSize="7.5" fill="white">AWS</text>
    </svg>
  );
}

function MetaLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#0082FB" />
      <path d="M10 5.5C7.5 5.5 5.5 7.5 5.5 10S7.5 14.5 10 14.5 14.5 12.5 14.5 10 12.5 5.5 10 5.5zm0 7.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="white" />
      <circle cx="10" cy="10" r="1.5" fill="white" />
    </svg>
  );
}

function TikTokLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#010101" />
      <path d="M13.5 4.5h-1.8c0 1.2.6 2.3 1.8 2.8V9c-.6 0-1.3-.2-1.8-.5V13c0 2-1.6 3.5-3.5 3.5S4.7 15 4.7 13s1.6-3.5 3.5-3.5c.2 0 .4 0 .6.1v1.9c-.2 0-.4-.1-.6-.1-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8V4.5h1.8c.1.9.8 1.7 1.7 1.8v1.8c-.6-.1-1.2-.3-1.7-.7v-.1l-.3 5.7z" fill="#69C9D0" />
    </svg>
  );
}

const integrations = [
  { name: "Stripe", Logo: StripeLogo },
  { name: "Plaid", Logo: PlaidLogo },
  { name: "QuickBooks", Logo: QuickBooksLogo },
  { name: "Xero", Logo: XeroLogo },
  { name: "Shopify", Logo: ShopifyLogo },
  { name: "Mercury", Logo: MercuryLogo },
  { name: "Gusto", Logo: GustoLogo },
  { name: "AWS", Logo: AwsLogo },
  { name: "Meta Ads", Logo: MetaLogo },
  { name: "TikTok Ads", Logo: TikTokLogo },
  { name: "+ more", Logo: null },
];

export default function IntegrationsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          Connects to the tools you already run.
        </h2>
        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
          One secure connection each. Claremo keeps everything in sync from then on.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map(({ name, Logo }) => (
            <div
              key={name}
              className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-full shadow-sm flex items-center gap-2.5"
            >
              {Logo && <Logo />}
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Domain Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Detect When Registrars{" "}
          <span className="text-[#58a6ff]">Steal Your Domain Searches</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Submit a domain search and we silently monitor WHOIS data across registrars.
          If a domain you searched becomes registered within 48 hours, you get an instant alert.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Monitoring — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Search & Track", desc: "Submit domains you're researching. We log every query securely." },
            { icon: "📡", title: "WHOIS Monitoring", desc: "Background jobs poll WHOIS every few hours across major registrars." },
            { icon: "🚨", title: "Instant Alerts", desc: "Get email alerts the moment a suspicious registration is detected." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect your domain research</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Monitor up to 500 domains/month",
              "WHOIS checks every 4 hours",
              "Email alerts within minutes",
              "48-hour registration detection window",
              "Registrar comparison reports",
              "CSV export of all searches"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do registrars steal domain searches?",
              a: "Some registrars have been caught registering domains users searched for, then offering them at inflated prices or via auction. This practice, known as domain front-running, is hard to prove without monitoring data."
            },
            {
              q: "How does the detection work?",
              a: "After you submit a domain search, our system records it and begins polling WHOIS data every 4 hours. If the domain transitions from available to registered within 48 hours, you receive an alert with full registration details."
            },
            {
              q: "Which registrars do you monitor?",
              a: "We monitor all major registrars including GoDaddy, Namecheap, Google Domains, Porkbun, and more. Our WHOIS checks are registrar-agnostic and cover all gTLDs and popular ccTLDs."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Domain Search Spy Detector. All rights reserved.
      </footer>
    </main>
  );
}

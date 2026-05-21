import { PricingCard } from "@/components/PricingCard";

const EMAIL = "exceleratekas@gmail.com";

export default function Services() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      {/* HEADER */}

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900">
        Clean, custom websites for every type of client.
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-gray-600">
        Every package includes a kickoff call, design consultation, and revision meetings — so your site actually reflects you, not a template. We handle the build, you get a live link.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${EMAIL}?subject=Excelerate%20Consult%20Request`}
          className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-800"
        >
          Book a free consult
        </a>
        <a
          href="#pricing"
          className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-900 hover:bg-blue-50"
        >
          View packages
        </a>
      </div>

      {/* STUDENTS & PROFESSIONALS */}
      <div id="pricing" className="mt-20">
        <h2 className="text-2xl font-semibold text-gray-900">Students & Professionals</h2>
        <p className="mt-2 text-gray-600">Portfolio sites, personal profiles, and resume sites that actually get looked at.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PricingCard
            title="Starter"
            price="$199"
            description="Get live fast with a clean, professional site that tells your story."
            features={[
              "3 pages: Landing + About + Projects",
              "Clean, custom design (no template look)",
              "Deployed live with custom domain setup",
              "Kickoff call + 1 revision round",
              "Full code handoff with edit guide",
              "Typical turnaround: 3–5 days",
            ]}
          />
          <PricingCard
            title="Pro"
            price="$299"
            description="For students and professionals who want to go further."
            popular
            features={[
              "Everything in Starter",
              "4th custom showcase page (case study, research, writing, etc.)",
              "Custom LinkedIn post to announce your site",
              "2 revision rounds included",
              "Kickoff call + revision consultation",
              "Typical turnaround: 4–6 days",
            ]}
          />
        </div>
      </div>

      {/* SMALL BUSINESS & STARTUPS */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900">Small Business & Startups</h2>
        <p className="mt-2 text-gray-600">A real web presence that builds trust, gets calls, and grows with you.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PricingCard
            title="Launch"
            price="$399"
            description="Everything a small business or startup needs to look legit online."
            features={[
              "4 pages: Home + About + Services + Contact",
              "Contact form + mobile optimized",
              "Custom design built around your brand",
              "Deployed live with custom domain setup",
              "Kickoff call + 2 revision rounds",
              "Full code handoff with edit guide",
              "Typical turnaround: 5–7 days",
            ]}
          />
          <PricingCard
            title="Growth"
            price="$599"
            description="A full brand package — site, logo, and everything in between."
            popular
            features={[
              "Everything in Launch",
              "6 pages (fully custom)",
              "Custom hand-crafted logo design by Anne (no AI, no IP issues)",
              "Brand kit: colors, fonts, logo files",
              "3 revision rounds included",
              "Kickoff call + design consultation + revision meeting",
              "Typical turnaround: 7–10 days",
            ]}
          />
        </div>
      </div>

      {/* LANDING PAGES */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900">Landing Pages</h2>
        <p className="mt-2 text-gray-600">One page, one goal. Fast turnaround, conversion-focused.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PricingCard
            title="Landing Page"
            price="$249"
            description="A single, focused page for a campaign, product launch, or event."
            features={[
              "1 custom-designed page",
              "Clear call-to-action layout",
              "Mobile optimized",
              "Deployed live with custom domain setup",
              "Kickoff call + 1 revision round",
              "Typical turnaround: 3–5 days",
            ]}
          />
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Not sure what you need?</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Every project is different. If you're not sure which package fits, book a free 15-minute consult and we'll figure it out together. No commitment required.
              </p>
            </div>
            <a
              href={`mailto:${EMAIL}?subject=Excelerate%20Consult%20Request`}
              className="mt-8 inline-block rounded-xl bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800"
            >
              Book a free consult
            </a>
          </div>
        </div>
      </div>

      {/* WHAT'S INCLUDED */}
      <div className="mt-16 rounded-2xl border border-gray-100 bg-white p-8">
        <h2 className="text-2xl font-semibold text-gray-900">What's always included</h2>
        <p className="mt-2 text-gray-600">Every single package — regardless of tier.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="font-medium text-gray-900">Kickoff & Consulting</h3>
            <p className="mt-2 text-sm text-gray-600">
              We meet to understand your goals, your audience, and what success looks like. We're not just building a site — we're advising on how to present you or your business in the best possible way.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="font-medium text-gray-900">Custom Design</h3>
            <p className="mt-2 text-sm text-gray-600">
              Every site is designed from scratch. No templates, no generic layouts. Anne brings real design expertise to every project so your site looks and feels like you.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="font-medium text-gray-900">Live Deploy + Domain</h3>
            <p className="mt-2 text-sm text-gray-600">
              We handle getting your site live on Vercel with a custom domain so you walk away with a real link, not just a file on your desktop.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="font-medium text-gray-900">Full Code Handoff</h3>
            <p className="mt-2 text-sm text-gray-600">
              You get the complete source code plus a simple guide so you can make updates yourself anytime — no developer needed for small changes.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-8">
        <h2 className="text-2xl font-semibold text-gray-900">Ready to get started?</h2>
        <p className="mt-3 max-w-2xl text-gray-600">
          Reach out with a quick intro — what you do, who you're trying to reach, and what you need. We'll recommend the right package and get moving fast.
        </p>
        <a
          href={`mailto:${EMAIL}?subject=Excelerate%20Website%20Request`}
          className="mt-6 inline-block rounded-xl bg-blue-700 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-800"
        >
          Email us to get started
        </a>
      </div>

    </main>
  );
}

import { PricingCard } from "@/components/PricingCard";

const EMAIL = "you@example.com"; // <-- change

export default function Services() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-800">
        <span className="h-2 w-2 rounded-full bg-emerald-600" />
        Dallas (University Park) Launch!!! • Limited time discounted student pricing!
      </div>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight">
        Services that make recruiters actually look twice
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-gray-600">
        Fill in that pesky 'link' section of job applications with a custom built site that shows your accomplishments!
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${EMAIL}?subject=Excelerate%20Website%20Request`}
          className="rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-800"
        >
          Book a quick consult
        </a>
        <a
          href="#pricing"
          className="rounded-xl border border-emerald-200 bg-white px-5 py-3 text-sm font-medium text-emerald-900 hover:bg-emerald-50"
        >
          View packages
        </a>
      </div>

      {/* PRICING */}
      <div id="pricing" className="mt-14 grid gap-6 md:grid-cols-3">
        <PricingCard
          title="Launch Special"
          price="150"
          description="First 3 clients only — founders launch pricing."
          popular
          features={[
            "3 pages: Landing + About + Projects",
            "Recruiter-friendly layout",
            "Deployed live on Vercel",
            "Cleanup + structure",
            "1 revision round included",
            "Typical turnaround: 3–5 days",
          ]}
        />

        <PricingCard
          title="Student Portfolio"
          price="200"
          description="The standard package built for internships + full-time recruiting."
          features={[
            "3 pages: Landing + About + Projects",
            "Project sections with links + screenshots",
            "Fast, clean design (no template look)",
            "Shareable link",
            "1 revision round included",
            "Typical turnaround: 3–5 days",
          ]}
        />

        <PricingCard
          title="Student+"
          price="250"
          description="For students who want an extra page."
          features={[
            "Everything in Student Portfolio",
            "Additional Custom Showcase Page (Case study, leadership, writing, research, etc.)",
            "Custom LinkedIn post to announce & showcase your site",
            "2 revision rounds included",
            "Typical turnaround: 4–6 days"
          ]}
        />
      </div>

      {/* WHAT YOU GET */}
      <div className="mt-16 rounded-2xl border border-emerald-100 bg-white p-8">
        <h2 className="text-2xl font-semibold">What’s included</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 text-gray-700">
          <div className="rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-medium text-gray-900">Recruiter-First Structure</h3>
            <p className="mt-2 text-sm text-gray-600">
              Projects, impact, and experience are organized so someone can understand your value in
              under a minute.
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-medium text-gray-900">Launch Support</h3>
            <p className="mt-2 text-sm text-gray-600">
              I help get it live on Vercel with a custom domain.
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-medium text-gray-900">Easy Handoff</h3>
            <p className="mt-2 text-sm text-gray-600">
              You get the full code + a simple guide for edits, so you can update projects anytime.
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-medium text-gray-900">Consulting Sessions</h3>
            <p className="mt-2 text-sm text-gray-600">
              Inital meetings and revision meetings so I can fully encapsulate your accomplishments and steer your website in way that will be recruiter-friendly.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-emerald-100 bg-emerald-50 p-8">
        <h2 className="text-2xl font-semibold text-gray-900">Ready to stand out?</h2>
        <p className="mt-3 max-w-2xl text-gray-700">
          Email me your resume + LinkedIn + any project links. I’ll recommend the best package and
          we’ll get you live fast.
        </p>
        <a
          href={`mailto:${EMAIL}?subject=Excelerate%20Website%20Request&body=Hi%20Kathryn%2C%20Here%E2%80%99s%20my%20LinkedIn%20and%20resume%3A%0A%0A`}
          className="mt-6 inline-block rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-800"
        >
          Email me to get started
        </a>
      </div>
    </main>
  );
}

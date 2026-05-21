const EMAIL = "exceleratekas@gmail.com";

type Example = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  link: string | null;
  live: boolean;
};

const examples: Example[] = [
  {
    category: "PERSONAL PORTFOLIO",
    title: "Anne Heldman — Marketing & Design Portfolio",
    description:
      "A clean portfolio site built for marketing, design, and communications roles. Showcases Anne's creative work, brand projects, and professional experience in a visually engaging layout that reflects her design background.",
    tags: ["Portfolio", "Personal Brand", "Marketing & Design"],
    link: "https://anneheldman.my.canva.site/",
    live: true,
  },
  {
    category: "PERSONAL PORTFOLIO",
    title: "Kathryn Sullivan — Personal Website",
    description:
      "Built to showcase a professional personal brand across finance, technology, and consulting. Highlights experience, leadership, and projects through a clean editorial layout.",
    tags: ["Portfolio", "Personal Brand", "Finance & Tech"],
    link: "https://kasullivan.vercel.app/",
    live: true,
  },
  {
    category: "STARTUP / AI INTEGRATION",
    title: "NORA — Navigating Obstetric Resources & Access",
    description:
      "A fully live, AI-integrated startup site for NORA, an AI health companion built for maternal care. Features a live interactive demo, founder story, board of advisors, and mission-driven content.",
    tags: ["Startup", "AI Integration", "Healthcare", "Live Demo"],
    link: "https://nora-virid-phi.vercel.app/index.html",
    live: true,
  },
  {
    category: "STARTUP / AI AGENT",
    title: "Sherpa — AI Agent for College Students",
    description:
      "A personal AI agent that connects to Gmail, Canvas, and registrar data to execute administrative tasks on a student's behalf — from drafting emails to tracking deadlines and degree audit gaps. Built and beta tested in 48 hours.",
    tags: ["Startup", "AI Agent", "EdTech", "In Development"],
    link: null,
    live: false,
  },
];

export default function ExamplesPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-120px] h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* HEADER */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs text-blue-800">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Real builds, real clients
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900">
          Work we've shipped.
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Every site below was designed and built from scratch — no templates, no shortcuts. From student portfolios to AI-integrated startup sites, here's what we've delivered.
        </p>

        {/* EXAMPLES */}
        <div className="mt-16 flex flex-col gap-6">
          {examples.map((ex) => (
            <div
              key={ex.title}
              className="grid gap-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-3"
            >
              {/* Left */}
              <div className="flex flex-col justify-between md:col-span-1">
                <div>
                  <p className="text-xs font-medium tracking-widest text-blue-700">
                    {ex.category}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-gray-900">
                    {ex.title}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ex.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {ex.live ? (
                  <a
                    href={ex.link as string}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block rounded-xl bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800"
                  >
                    View live site →
                  </a>
                ) : (
                  <span className="mt-8 inline-block rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-center text-sm font-medium text-blue-700">
                    In development
                  </span>
                )}
              </div>

              {/* Right */}
              <div className="flex items-center md:col-span-2">
                <p className="text-base leading-relaxed text-gray-600">
                  {ex.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
            <h2 className="text-xl font-semibold text-gray-900">More coming soon</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              We're actively building for new clients across startups, small businesses, and professionals. Check back soon for more examples — or reach out to be featured here.
            </p>
            <div className="mt-6 h-1 w-10 rounded-full bg-blue-700" />
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <h2 className="text-xl font-semibold text-gray-900">Want a site like these?</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Every build starts with a free consult. Tell us what you do and what you need — we'll take it from there.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Excelerate%20Consult%20Request`}
              className="mt-6 inline-block rounded-xl bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
            >
              Book a free consult
            </a>
          </div>
        </div>

        <footer className="mt-16 text-xs text-gray-400">
          © {new Date().getFullYear()} Excelerate
        </footer>

      </div>
    </main>
  );
}

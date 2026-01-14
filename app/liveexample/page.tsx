export default function ExamplePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* emerald background wash */}
      <div className="pointer-events-none fixed inset-0 bg-emerald-300/20" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 space-y-16">

        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] text-emerald-700">
            LIVE EXAMPLE
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            A real Excelerate build.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Below is a live example of a clean, recruiter-focused
            website Excelerate delivered. More client examples coming soon.
          </p>
        </header>

        {/* Main card */}
        <section className="grid gap-10 md:grid-cols-12">

          <div className="md:col-span-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

              <p className="text-xs font-medium tracking-[0.28em] text-emerald-700">
                FEATURED BUILD
              </p>

              <h2 className="mt-4 text-2xl font-semibold">
                Kathryn Sullivan — Personal Website
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Built through Excelerate to showcase a professional personal
                brand. This site highlights experience, leadership, and projects
                through a clean editorial layout designed for recruiters.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://kasullivan.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-700 px-6 py-3 
                  text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  View live site →
                </a>

                
              </div>
            </div>
          </div>

          {/* Side card */}
          <div className="md:col-span-4">
            <div className="rounded-3xl border border-emerald-500/20 bg-white p-8">

              <p className="text-xs font-medium tracking-[0.3em] text-emerald-700">
                COMING SOON
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• Additional client examples</li>
                <li>• Testimonials and outcomes</li>
              </ul>

              <div className="mt-8 rounded-2xl border border-emerald-700 bg-emerald-50 p-5">
                <p className="text-xs font-medium tracking-widest text-emerald-700">
                  NOTE
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Want your site featured here? Reach out to get started.
                </p>
              </div>

            
            </div>
          </div>

        </section>

        <footer className="text-xs text-slate-400">
          © {new Date().getFullYear()} Excelerate
        </footer>

      </div>
    </main>
  );
}

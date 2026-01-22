"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-[-240px] top-[240px] h-[420px] w-[420px] rounded-full bg-primaryDark/20 blur-3xl" />
        <div className="absolute left-[-220px] top-[620px] h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-10 sm:pt-20">
        <motion.div variants={container} initial="hidden" animate="show" className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* left */}
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-blue-800 bg-white/70 px-3 py-1 text-xs text-blue-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Tulane + University Park Launch!
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              The job market is{" "}
              <span className="text-blue-700">brutal</span>
              <br />
              Your website shouldn’t be.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-600">
              Resumes are tiny. Cover letters are awkward. Recruiters skim.
              <br className="hidden sm:block" />
              Excelerate builds clean, modern personal sites so your work can{" "}
              <span className="font-medium text-gray-900">actually be seen</span>.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-800 active:scale-[0.99]"
              >
                See packages
              </Link>

              <a
                href="mailto:exceleratekas@gmail.com?subject=Excelerate%20Consult%20Request"
                className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-900 hover:bg-blue-50 active:scale-[0.99]"
              >
                Book a quick consult
              </a>

              <a
                href="#how"
                className="rounded-xl border border-transparent bg-transparent px-5 py-3 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                How it works →
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Stat value="3–5 days" label="typical turnaround" />
              <Stat value="Recruiter-first" label="layout + copy" />
              <Stat value="One link" label="projects + proof" />
            </motion.div>

          
          </div>

          {/* right “preview” */}
          <motion.div variants={fadeIn} className="relative">
            <div className="rounded-3xl border border-blue-400 bg-white/75 p-6 shadow-sm backdrop-blur">
              <div className="rounded-2xl border border-blue-300 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      What recruiters actually want
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                      Proof. Fast.
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                      A site that answers: “Can you do the job?” in ~10 seconds.
                    </p>
                  </div>
                  <div className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800">
                    Live preview
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <MiniRow title="Projects" desc="Screenshots + links + what you did" />
                  <MiniRow title="Experience" desc="Impact bullets (with detail)" />
                  <MiniRow title="Skills" desc="Tools you actually used" />
                  <MiniRow title="Contact" desc="One-click email + LinkedIn" />
                </div>

                <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-blue-900">
                    <span className="font-medium">Built for:</span> Internships,
                    Consulting, Finance, CS, Analytics, Design, Marketing, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 -top-3 hidden rounded-2xl border border-blue-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm sm:block"
            >
              “Resume but make it clickable”
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 bottom-4 hidden rounded-2xl border border-blue-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm sm:block"
            >
              Clean. Fast. <span className="font-medium text-blue-800">Modern.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-gray-900">
            How it works
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-2 text-gray-600">
            You bring the content. I design it to be readable for recruiters. 
          </motion.p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1) Kickoff",
                desc: "Quick call to get to know you! You send resume + links + any projects so I can customize the website to show off your accomplishments!",
              },
              {
                title: "2) Build",
                desc: "I design + write + build. You get a live preview to review.",
              },
              {
                title: "3) Launch",
                desc: "Final polish, mobile check, and custom domain setup.",
              },
            ].map((step) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="group rounded-2xl border border-blue-100 bg-white/75 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-medium text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
                <div className="mt-4 h-1 w-10 rounded-full bg-blue-200 transition group-hover:bg-blue-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-8 shadow-sm"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Tulane + University Park  Launch Pricing
              </h2>
              <p className="mt-2 text-gray-600">
                Early students get priority turnaround + a discounted first run. Only 3 spots!
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
              >
                View pricing
              </Link>
              <a
                href="mailto:exceleratekas@gmail.com?subject=Excelerate%20Launch%20Client"
                className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-900 hover:bg-blue-50"
              >
                Email to book
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white/75 p-4 shadow-sm">
      <div className="text-xl font-semibold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function MiniRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-white p-4">
      <div>
        <div className="font-medium text-gray-900">{title}</div>
        <div className="mt-1 text-sm text-gray-600">{desc}</div>
      </div>
      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
    </div>
  );
}

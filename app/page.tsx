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

const services = [
  { title: "Startup sites", desc: "Launch pages and product sites built to convert visitors into believers." },
  { title: "Small business", desc: "Local or online — a site that builds trust and gets the phone ringing." },
  { title: "Personal profiles", desc: "Students and professionals who want to stand out and be found." },
  { title: "Landing pages", desc: "Single-focus pages for campaigns, launches, or products." },
  { title: "Portfolios", desc: "Design, dev, writing, consulting — show the work clearly." },
  { title: "& more", desc: "Have something else in mind? Let's talk it through." },
];

const steps = [
  {
    n: "1",
    title: "Kickoff",
    desc: "Quick call to learn what you do, who you're trying to reach, and what success looks like for you.",
  },
  {
    n: "2",
    title: "Build",
    desc: "We design, write, and build your site. You get a live preview to review and give feedback.",
  },
  {
    n: "3",
    title: "Launch",
    desc: "Final polish, mobile check, and custom domain setup. You're live.",
  },
];

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
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-5 sm:pt-20 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-blue-800 bg-white/70 px-3 py-1 text-xs text-blue-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Now open to all clients
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Your business deserves a{" "}
            <span className="text-blue-700">website that works.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Excelerate builds clean, fast, custom websites for startups, small businesses, and professionals — without the agency price tag or the month-long wait.{" "}
            <span className="font-medium text-gray-900">Simple. Scalable. Built to grow.</span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
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
              Book a free consult
            </a>
            <a
              href="#what-we-build"
              className="rounded-xl border border-transparent bg-transparent px-5 py-3 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              How it works →
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-2xl mx-auto">
            <Stat value="3–7 days" label="typical turnaround" />
            <Stat value="Custom" label="design every time" />
            <Stat value="One link" label="your whole brand" />
          </motion.div>
        </motion.div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="what-we-build" className="mx-auto max-w-6xl px-2 pt-10 pb-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-gray-900">
            What we build
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-gray-600">
            Every site is designed from scratch to fit you — not a template filled in with your name.
          </motion.p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="group rounded-2xl border border-blue-100 bg-white/75 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-medium text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                <div className="mt-4 h-1 w-10 rounded-full bg-blue-200 transition group-hover:bg-blue-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-6 pt-4 pb-20 border-t border-blue-50">
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
            You bring the content. We make it look like you mean business.
          </motion.p>

          <div className="mt-10 grid grid-cols-3 divide-x divide-blue-100">
            {steps.map((step) => (
              <motion.div
                key={step.n}
                variants={fadeUp}
                className="px-8 first:pl-0 last:pr-0"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-base font-medium text-white">
                  {step.n}
                </div>
                <p className="mt-4 text-lg font-medium text-gray-900">{step.title}</p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.desc}</p>
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
                Ready to get started?
              </h2>
              <p className="mt-2 text-gray-600">
                Spots are limited. Book a free 15-minute consult and we'll figure out exactly what you need.
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
                href="mailto:exceleratekas@gmail.com?subject=Excelerate%20Consult%20Request"
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

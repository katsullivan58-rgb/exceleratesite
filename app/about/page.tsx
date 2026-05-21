"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const kathrynCredentials = [
  {
    label: "2025 Lepage Fellow of the Year",
    sub: "Albert Lepage Center for Entrepreneurship & Innovation, Tulane University",
  },
  {
    label: "Microsoft Excel National Champion",
    sub: "Yes, it's a real thing.",
  },
  {
    label: "Finance & Computer Science",
    sub: "Tulane University, Freeman School of Business",
  },
  {
    label: "Studied abroad at University of Edinburgh",
    sub: "Computer Science",
  },
  {
    label: "Internships at CSIS, Griffith Davidson & Institute for Justice",
    sub: "Washington, D.C.",
  },
];

const anneCredentials = [
  {
    label: "Communications & Design, Marketing & PR",
    sub: "Tulane University — 4.0 GPA, Dean's List",
  },
  {
    label: "Marketing & Communications Intern",
    sub: "St. Jude Children's Hospital | ALSAC — two award-winning capstone projects adopted company-wide",
  },
  {
    label: "Adobe Creative Cloud, Photo & Video Editing",
    sub: "Custom logo design, brand identity, digital & print",
  },
  {
    label: "Website Development & Content Strategy",
    sub: "Certified in Sitecore and DubBot software systems",
  },
  {
    label: "PR & Marketing Director",
    sub: "Delta Delta Delta Sorority — managed brand identity across all platforms",
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-120px] h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">

        {/* ── KATHRYN ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-16 md:grid-cols-2 md:items-center"
        >
          {/* Photo */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="h-80 w-80 overflow-hidden rounded-full border-2 border-blue-100 bg-white shadow-sm flex-shrink-0">
              <Image
                src="/kat_headshot.png"
                alt="Kathryn Sullivan, founder of Excelerate"
                width={160}
                height={160}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={container}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-800">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Founder & CEO · Excelerate
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Hi, I'm Kathryn.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-600 leading-relaxed">
              I'm the founder of Excelerate — a web studio building clean, custom sites for startups, small businesses, and professionals. I'm a Tulane grad in Finance and Computer Science, born and raised in University Park, Dallas.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-600 leading-relaxed">
              Excelerate started from a simple observation: talented people were being undersold by generic templates and one-page resumes. I built this to change that — for students, founders, and businesses alike.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-600 leading-relaxed">
              After graduation I'm heading back to Dallas to start my career in Technology Dispute Advisory consulting — but Excelerate is here to stay.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
              >
                See packages
              </Link>
              <a
                href="mailto:exceleratekas@gmail.com"
                className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-900 hover:bg-blue-50"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Kathryn credentials */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="mt-20"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-gray-900">
            Background
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-gray-600">
            A few things worth knowing.
          </motion.p>
          <div className="mt-8 flex flex-col">
            {kathrynCredentials.map((c) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                className="grid grid-cols-2 gap-8 border-t border-gray-100 py-5 last:border-b"
              >
                <p className="text-base font-medium text-gray-900">{c.label}</p>
                <p className="text-base text-gray-500">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── DIVIDER ── */}
        <div className="my-24 border-t border-gray-100" />

        {/* ── ANNE ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid gap-16 md:grid-cols-2 md:items-center"
        >
          {/* Text first on desktop */}
          <motion.div variants={container}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-800">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Lead Designer · Excelerate
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Meet Anne.
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-600 leading-relaxed">
              Anne Heldman is Excelerate's lead designer — bringing the visual side of every project to life. With a degree in Communications and Design from Tulane and a 4.0 GPA, she combines a sharp creative eye with real strategic thinking about how design communicates.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-600 leading-relaxed">
              Anne handles the aesthetics, layout direction, and visual identity of every site we build. She also offers custom logo and brand design — hand-crafted, not AI-generated, so there are zero intellectual property concerns for your business.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-600 leading-relaxed">
              Her background spans marketing at St. Jude Children's Hospital, brand work at BluePrint Art Gallery, and digital design across web, social, and print — so she knows how to make things look great across every platform.
            </motion.p>
          </motion.div>

          {/* Photo */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="h-80 w-80 overflow-hidden rounded-full border-2 border-blue-100 bg-white shadow-sm flex-shrink-0">
              <Image
                src="/anne_headshot.png"
                alt="Anne Heldman, Lead Designer at Excelerate"
                width={160}
                height={160}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Anne credentials */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="mt-20"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-gray-900">
            Anne's Background
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-gray-600">
            Design, strategy, and everything in between.
          </motion.p>
          <div className="mt-8 flex flex-col">
            {anneCredentials.map((c) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                className="grid grid-cols-2 gap-8 border-t border-gray-100 py-5 last:border-b"
              >
                <p className="text-base font-medium text-gray-900">{c.label}</p>
                <p className="text-base text-gray-500">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mt-24 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
            <h2 className="text-xl font-semibold text-gray-900">What we build</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Every site is custom — designed from scratch to fit the client, not pulled from a template library. We work with startups who need a launch presence, small businesses who need to build trust online, and professionals who want a single link that tells their whole story.
            </p>
            <div className="mt-6 h-1 w-10 rounded-full bg-blue-700" />
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <h2 className="text-xl font-semibold text-gray-900">Work with us</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Whether you're a startup needing a launch page, a small business that's been putting off a real website, or a professional who wants to stand out — we'd love to help.
            </p>
            <a
              href="mailto:exceleratekas@gmail.com"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
            >
              exceleratekas@gmail.com
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

import type { ReactNode } from "react";
import Image from "next/image";


export default function About() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-140px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute right-[-240px] top-[280px] h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute left-[-220px] top-[820px] h-[420px] w-[420px] rounded-full bg-emerald-100/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* Top section: photo + intro */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* PHOTO */}
          <div className="relative">
            {/* glow */}
            <div className="absolute -inset-3 rounded-[2rem] bg-emerald-200/60 blur-2xl" />
            <div className="relative rounded-[2rem] border border-emerald-100 bg-white/60 p-2 shadow-sm backdrop-blur">
              <Image
                src="/kathryn.jpeg"
                alt="Kathryn Sullivan, founder of Excelerate"
                width={520}
                height={640}
                className="h-auto w-full rounded-[1.6rem] object-cover shadow-xl"
                priority
              />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Founder • University Park • Tulane
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              About Me
            </h1>

            <p className="mt-3 text-sm text-emerald-800/80">
              Building student websites that encapsulate them as a person — not just a template.
            </p>

            <div className="mt-7 space-y-6 text-[17px] leading-relaxed text-gray-700">
              <p>
                Hi! I’m Kathryn — founder and CEO of Excelerate, Tulane senior, and a firm believer
                that a one-page resume will never tell your full story.
              </p>

              <p>
                I’m finishing my degree in Finance and Computer Science and heading back to Dallas
                after graduation to start my career in Technology Dispute Advisory consulting.
                Excelerate started from watching insanely talented friends struggle to stand out in a
                brutal job market with nothing but a PDF resume.
              </p>

              <p>
                I was born and raised in University Park and graduated from the Episcopal School of
                Dallas, so building something for students in this community feels personal. Fun fact:
                some of you might recognize me from working at New York Subs throughout high school and
                during college breaks (RIP — still not over it).
              </p>

              <p>
                My background includes internships at the Center for Strategic and International Studies
                in Washington, D.C., Griffith Davidson, and the Institute of Justice. I’m also a Fellow
                at Tulane’s Lepage Center for Entrepreneurship, where I mentor students launching their
                own ventures.
              </p>

              <p>
                I’m a Microsoft Excel National Champion (yes, that’s a real thing) and studied computer
                science abroad at the University of Edinburgh — but more than anything, I’m passionate
                about helping people{" "}
                <span className="font-semibold text-emerald-800">
                  show what they can do
                </span>
                , not just list it.
              </p>
            </div>
          </div>
        </div>

        {/* Cards section */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <InfoCard title="What I Care About">
            <p>
              I care deeply about leveling the playing field in today’s job market. Too often,
              talented students are reduced to a one-page resume that barely scratches the surface of
              who they are or what they’ve built.
            </p>
            <p>
              I believe people deserve more than a checkbox application process. Your projects, side
              hustles, internships, leadership roles, and creativity all tell a story — and that story
              should be seen.
            </p>
            <p>
              Excelerate exists to help students take control of their narrative and show their full
              potential with confidence.
            </p>
          </InfoCard>

          <InfoCard title="What I Build">
            <p>
              I build clean, modern personal websites for students and new grads who want to stand out
              in a competitive job market.
            </p>
            <p>
              Each site is custom-designed to highlight your projects, experience, and skills in a way
              that feels authentic and professional — not templated or generic.
            </p>
            <p>
              Whether you’re in finance, consulting, tech, design, or analytics, I create a space where
              your work can actually speak for itself.
            </p>
          </InfoCard>

          <InfoCard title="Contact">
            <p>
              Email me at{" "}
              <a
                className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-500"
                href="mailto:exceleratekas@gmail.com"
              >
                exceleratekas@gmail.com
              </a>{" "}
              and tell me what you need.
            </p>

            <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-900/90">
              Quick prompt: “I’m a student at ___ applying for ___ roles. Here are my projects:
              ___.”
            </div>
          </InfoCard>
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative rounded-3xl border border-emerald-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-100/50" />
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-gray-700">
        {children}
      </div>
      <div className="mt-5 h-1 w-10 rounded-full bg-emerald-700/80 transition group-hover:w-14" />
    </div>
  );
}

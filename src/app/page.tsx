"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

const features = [
  {
    title: "Design & Build",
    desc: "Custom websites built from scratch — no templates, no page builders. Tailored to your brand and ready to convert visitors into customers.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "SEO & Maintenance",
    desc: "Monthly audits, Google Business Profile management, uptime monitoring, and content updates — so your site keeps working after launch.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    desc: "Need a new page? A feature added? A redesign? We're one message away — no waiting weeks for a response from some overseas freelancer.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "We Build Your Demo — Free",
    desc: "Tell us about your business and we'll build a working demo site at no cost. No commitment, no strings attached.",
  },
  {
    num: "02",
    title: "You Approve It on a Zoom Call",
    desc: "We'll walk through the demo together, make any changes you want, and finalize the design before a single dollar changes hands.",
  },
  {
    num: "03",
    title: "We Launch & Handle Everything",
    desc: "Domain, hosting, SEO, updates — we take care of it all. You focus on running your business.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-32 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
              Web Design in Murfreesboro, TN
            </span>
            <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              We Build Websites That Work As Hard As{" "}
              <span className="text-primary">You Do</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-text">
              Custom, affordable websites for small businesses in Murfreesboro
              and Middle Tennessee. We build a free demo before you pay a dime.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/portfolio">See Our Work</Button>
              <Button href="/contact" variant="secondary">
                Get a Free Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Everything Your Business Needs Online
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-dark-card p-8 transition-all hover:border-primary/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                {f.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Three Steps to Your New Website
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <span className="font-display text-6xl font-bold text-primary/15">
                {s.num}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper>
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-8 py-14 text-center md:px-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to Get Online?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            We&apos;ll build your demo site for free. No commitment. If you love it,
            we launch. If not, no hard feelings.
          </p>
          <div className="mt-8">
            <Button href="/contact">Let&apos;s Talk</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

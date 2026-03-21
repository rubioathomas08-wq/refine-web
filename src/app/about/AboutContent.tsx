"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const values = [
  {
    title: "Local Focus",
    desc: "We work exclusively with businesses in Murfreesboro and Middle Tennessee. When you call, you talk to someone who knows your town.",
  },
  {
    title: "Transparent Pricing",
    desc: "Every dollar is on the table. No hidden fees, no surprise invoices. You know exactly what you're paying for before we start.",
  },
  {
    title: "No BS Contracts",
    desc: "Month-to-month. Cancel anytime. We earn your business every single month — not through a contract, but through results.",
  },
  {
    title: "You Own Everything",
    desc: "Your website, your domain, your content. We build it, you own it. If you ever want to leave, we hand it all over. No hostage situations.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              About
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Built by Someone Who Gets It
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <SectionWrapper className="pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo placeholder */}
          <div className="flex aspect-[4/5] max-h-[500px] items-center justify-center rounded-2xl border border-white/10 bg-dark-card">
            <div className="text-center">
              <div className="mx-auto h-24 w-24 rounded-full bg-primary/20" />
              <p className="mt-4 text-sm text-gray-text">
                Founder photo coming soon
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold">The Story</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-text">
              <p>
                I started Refined Mobile Detailing &amp; Pressure Washing when I
                was 18. I needed a website, but every quote I got was either way
                too expensive or way too generic. So I learned to build one myself.
              </p>
              <p>
                Turns out, every small business owner I talked to had the exact
                same problem — they needed a solid online presence but couldn&apos;t
                justify paying thousands for it. The cheap options looked cheap.
                The expensive options came with contracts and corporate BS.
              </p>
              <p>
                That&apos;s why I started Refine Web. I build the kind of website
                I wished someone had built for me — clean, fast, affordable, and
                actually designed for a real business in a real town.
              </p>
              <p>
                I&apos;m based right here in Murfreesboro. When you work with me,
                you&apos;re not filing a support ticket — you&apos;re sending a
                text.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Values
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            How We Do Business
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-dark-card p-8 transition-all hover:border-primary/30"
            >
              <h3 className="font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Local */}
      <SectionWrapper>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-dark-card">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                Why Local?
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold">
                A Murfreesboro Developer Beats a National Agency Every Time
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-text">
                <p>
                  Big agencies charge big prices because they have big overhead.
                  Freelancers on Fiverr are cheap because you&apos;re one of
                  hundreds of clients they&apos;ll never talk to again.
                </p>
                <p>
                  I live here. I drive past your business. I eat at your
                  restaurant. When your site goes down at 9 PM, I fix it —
                  because I care about the businesses that make this town what it
                  is.
                </p>
                <p>
                  That&apos;s the difference between a local developer and a
                  faceless agency. You get someone invested in your success
                  because your success is my community&apos;s success.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact">Work With Us</Button>
              </div>
            </div>
            <div className="flex items-center justify-center bg-primary/5 p-12">
              <div className="text-center">
                <p className="font-display text-6xl font-bold text-primary">
                  37129
                </p>
                <p className="mt-2 text-sm text-gray-text">
                  Murfreesboro, Tennessee
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

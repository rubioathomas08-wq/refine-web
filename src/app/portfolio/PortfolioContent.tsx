"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import PortfolioCard from "@/components/PortfolioCard";

const projects = [
  {
    title: "Refine Mobile Detailing",
    industry: "Auto Detailing",
    description:
      "Full website with online booking, service packages, add-ons menu, photo gallery, pricing page, and AI chatbot — built for a mobile detailing business in Murfreesboro, TN.",
    color: "#0d9488",
    image: "/portfolio/refine-detailing.png",
    url: "https://www.refine-detailing.com",
  },
];

export default function PortfolioContent() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Our Work
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Built for Real Businesses
            </h1>
            <p className="mt-4 text-lg text-gray-text">
              Every project starts with a free demo. Here&apos;s a look at what
              we&apos;ve built for local businesses like yours.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="pt-8">
        <div className="max-w-lg">
          {projects.map((p, i) => (
            <PortfolioCard key={i} {...p} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-dark-card px-8 py-10 text-center">
          <h3 className="font-display text-xl font-bold">
            Want to Be Our Next Project?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-text">
            We&apos;ll build your demo for free — no commitment required. If you
            love it, we launch. Simple as that.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
          >
            Get a Free Demo
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}

"use client";

import SectionWrapper from "@/components/SectionWrapper";
import PricingCard from "@/components/PricingCard";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Website Build",
    price: "$750",
    period: "one-time",
    features: [
      "5-page custom website",
      "Mobile responsive design",
      "Contact form integration",
      "Google Maps embed",
      "Basic on-page SEO",
    ],
    cta: "Get Started",
  },
  {
    title: "Monthly Retainer",
    price: "$90",
    period: "/month",
    features: [
      "Hosting included",
      "Monthly SEO audit",
      "Google Business Profile updates",
      "Uptime monitoring",
      "Minor text & content changes",
    ],
    highlighted: true,
    cta: "Best Value — Start Here",
  },
  {
    title: "Hourly (w/ Retainer)",
    price: "$50",
    period: "/hour",
    features: [
      "New page builds",
      "Design refreshes",
      "Feature additions",
      "Anything beyond retainer scope",
      "Priority turnaround",
    ],
    cta: "Get Started",
  },
  {
    title: "Hourly (No Retainer)",
    price: "$100",
    period: "/hour",
    features: [
      "All work billed at premium rate",
      "No hosting support included",
      "No monthly SEO or updates",
      "Project-based billing",
      "Standard turnaround",
    ],
    cta: "Contact Us",
  },
];

const comparisonRows = [
  { feature: "Hosting included", retainer: true, noRetainer: false },
  { feature: "Monthly SEO audit", retainer: true, noRetainer: false },
  { feature: "Google Business Profile updates", retainer: true, noRetainer: false },
  { feature: "Uptime monitoring", retainer: true, noRetainer: false },
  { feature: "Minor content changes", retainer: true, noRetainer: false },
  { feature: "Hourly rate for extra work", retainer: "$50/hr", noRetainer: "$100/hr" },
  { feature: "Domain management", retainer: true, noRetainer: false },
  { feature: "Priority support", retainer: true, noRetainer: false },
];

export default function ServicesContent() {
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
              Services & Pricing
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Transparent Pricing. No Surprises.
            </h1>
            <p className="mt-4 text-lg text-gray-text">
              Every dollar is accounted for. Pick what works for your business —
              scale up or down whenever you want.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <SectionWrapper className="pt-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>

        {/* Domain add-on */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-dark-card p-6 text-center">
          <p className="text-sm text-gray-text">
            <span className="font-semibold text-off-white">Domain Registration</span>{" "}
            — ~$12/yr, purchased and managed on your behalf. Included in retainer
            management.
          </p>
        </div>
      </SectionWrapper>

      {/* Comparison table */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Compare
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Retainer vs. No Retainer
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            $90/month gets you hosting, SEO, monitoring, content updates, and
            half-price hourly work. The math speaks for itself.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 pr-4 font-display text-off-white">Feature</th>
                <th className="py-4 px-4 text-center font-display text-primary">
                  With Retainer
                  <span className="block text-xs font-normal text-gray-text">
                    $90/mo
                  </span>
                </th>
                <th className="py-4 pl-4 text-center font-display text-gray-text">
                  Without Retainer
                  <span className="block text-xs font-normal text-gray-text">
                    Pay as you go
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-4 pr-4 text-gray-text">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {row.retainer === true ? (
                      <svg className="mx-auto h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-primary">{row.retainer}</span>
                    )}
                  </td>
                  <td className="py-4 pl-4 text-center">
                    {row.noRetainer === false ? (
                      <svg className="mx-auto h-5 w-5 text-gray-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <span className="text-gray-text">{row.noRetainer}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>
    </>
  );
}

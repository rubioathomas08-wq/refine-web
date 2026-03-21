"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const Check = () => (
  <svg className="mx-auto h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const X = () => (
  <svg className="mx-auto h-5 w-5 text-gray-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const buildTiers = [
  {
    name: "Starter",
    pages: "1–3 pages",
    price: "$400–$600",
    features: [
      "Landing page",
      "Contact form",
      "Mobile responsive",
      "Basic on-page SEO",
    ],
  },
  {
    name: "Standard",
    pages: "4–6 pages",
    price: "$700–$1,000",
    highlighted: true,
    features: [
      "Everything in Starter",
      "About & Services pages",
      "Gallery placeholder",
      "Google Maps embed",
    ],
  },
  {
    name: "Professional",
    pages: "7–12 pages",
    price: "$1,200–$1,800",
    features: [
      "Everything in Standard",
      "Blog integration",
      "Booking form",
      "Custom animations",
    ],
  },
  {
    name: "Premium",
    pages: "13–20+ pages",
    price: "$2,000–$3,500+",
    features: [
      "Full custom build",
      "Multiple sections",
      "Advanced features",
      "Complex integrations",
    ],
  },
];

const addOns = [
  { name: "AI Chatbot Integration", price: "$300–$500" },
  { name: "Photo/Video Gallery with Uploads", price: "$200–$400" },
  { name: "E-Commerce (Online Store)", price: "$500–$1,000" },
  { name: "Booking/Scheduling System", price: "$150–$300" },
  { name: "Custom Logo Design", price: "$100–$200" },
];

const retainerPlans = [
  {
    name: "Micro",
    audience: "1–3 page simple site",
    price: "$35",
    features: [
      "Vercel hosting",
      "Uptime monitoring",
      "1 monthly SEO check",
    ],
  },
  {
    name: "Standard",
    audience: "4–6 page site",
    price: "$65",
    features: [
      "Everything in Micro",
      "Google Business updates",
      "Minor content edits",
    ],
  },
  {
    name: "Pro",
    audience: "7–12 page site",
    price: "$90",
    highlighted: true,
    features: [
      "Everything in Standard",
      "Monthly performance report",
      "Faster response time",
    ],
  },
  {
    name: "Advanced",
    audience: "Large site with database",
    price: "$130",
    features: [
      "Everything in Pro",
      "Database storage & backups",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    audience: "AI chatbot + gallery + video",
    price: "$175–$200",
    features: [
      "Everything in Advanced",
      "API costs covered",
      "Priority support",
    ],
  },
];

const hourlyRates = [
  { situation: "Client has active retainer", rate: "$50/hr" },
  { situation: "Client has no retainer", rate: "$100/hr" },
  { situation: "Emergency / same-day work", rate: "$125/hr" },
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
              Services &amp; Pricing
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Transparent Pricing. No Surprises.
            </h1>
            <p className="mt-4 text-lg text-gray-text">
              Every dollar is on the table. Pick what fits your business — scale
              up whenever you&apos;re ready. 50% upfront, 50% on launch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BUILD TIERS ── */}
      <SectionWrapper className="pt-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Website Builds
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            One-Time Build Fee
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            Custom-built from scratch. No templates. Every site is mobile
            responsive, SEO-ready, and designed for your brand.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {buildTiers.map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-white/10 bg-dark-card"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{tier.name}</h3>
              <p className="mt-1 text-xs text-gray-text">{tier.pages}</p>
              <p className="mt-4 font-display text-3xl font-bold text-off-white">
                {tier.price}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-text">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── ADD-ONS ── */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Add-Ons
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Power Up Your Site
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            Add these to any build tier. Priced separately so you only pay for
            what you actually need.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addon, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-dark-card px-6 py-5"
            >
              <span className="text-sm font-medium text-off-white">
                {addon.name}
              </span>
              <span className="ml-4 shrink-0 text-sm font-semibold text-primary">
                {addon.price}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── MONTHLY RETAINER PLANS ── */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Monthly Plans
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Monthly Retainer
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            Hosting, SEO, monitoring, and updates — all handled for you.
            Cancel anytime. No contracts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {retainerPlans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-white/10 bg-dark-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Best Value
                </span>
              )}
              <h3 className="font-display text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-xs text-gray-text">{plan.audience}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-off-white">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-text">/mo</span>
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-text">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href="/contact"
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── HOURLY RATES ── */}
      <SectionWrapper>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Hourly Work
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Need Extra Work Done?
            </h2>
            <p className="mt-4 text-gray-text">
              New pages, redesigns, feature additions — anything beyond your
              retainer scope. Retainer clients get half-price rates.
            </p>
          </div>

          <div className="space-y-4">
            {hourlyRates.map((rate, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-dark-card px-6 py-5"
              >
                <span className="text-sm text-gray-text">{rate.situation}</span>
                <span className="ml-4 font-display text-xl font-bold text-off-white">
                  {rate.rate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── COMPARISON TABLE ── */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Compare Plans
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Retainer Comparison
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 pr-4 font-display text-off-white">Feature</th>
                <th className="py-4 px-3 text-center font-display text-gray-text">Micro<br /><span className="text-xs font-normal">$35/mo</span></th>
                <th className="py-4 px-3 text-center font-display text-gray-text">Standard<br /><span className="text-xs font-normal">$65/mo</span></th>
                <th className="py-4 px-3 text-center font-display text-primary">Pro<br /><span className="text-xs font-normal">$90/mo</span></th>
                <th className="py-4 px-3 text-center font-display text-gray-text">Advanced<br /><span className="text-xs font-normal">$130/mo</span></th>
                <th className="py-4 pl-3 text-center font-display text-gray-text">Enterprise<br /><span className="text-xs font-normal">$175+/mo</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Vercel hosting", micro: true, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Uptime monitoring", micro: true, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Monthly SEO check", micro: true, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Google Business updates", micro: false, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Minor content edits", micro: false, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Monthly report", micro: false, standard: false, pro: true, advanced: true, enterprise: true },
                { feature: "Faster response time", micro: false, standard: false, pro: true, advanced: true, enterprise: true },
                { feature: "Database & backups", micro: false, standard: false, pro: false, advanced: true, enterprise: true },
                { feature: "API costs covered", micro: false, standard: false, pro: false, advanced: false, enterprise: true },
                { feature: "Priority support", micro: false, standard: false, pro: false, advanced: true, enterprise: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-3.5 pr-4 text-gray-text">{row.feature}</td>
                  <td className="py-3.5 px-3 text-center">{row.micro ? <Check /> : <X />}</td>
                  <td className="py-3.5 px-3 text-center">{row.standard ? <Check /> : <X />}</td>
                  <td className="py-3.5 px-3 text-center">{row.pro ? <Check /> : <X />}</td>
                  <td className="py-3.5 px-3 text-center">{row.advanced ? <Check /> : <X />}</td>
                  <td className="py-3.5 pl-3 text-center">{row.enterprise ? <Check /> : <X />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* ── PAYMENT TERMS ── */}
      <SectionWrapper>
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-8 py-14 text-center md:px-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Simple Payment Terms
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            50% upfront to start the build. 50% when we launch. Monthly
            retainers billed at the start of each month. No long-term contracts
            — cancel anytime.
          </p>
          <div className="mt-4 text-sm text-gray-text">
            <p>
              <span className="text-off-white">Domains</span> — ~$10–15/yr,
              purchased and managed on your behalf at cost.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/contact">Get a Free Quote</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

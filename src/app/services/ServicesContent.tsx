"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import CompareTool from "@/components/CompareTool";
import Link from "next/link";
import { motion } from "framer-motion";
import { buildTiers, addOns, retainerPlans, hourlyRates } from "@/data/services";

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="mt-6 space-y-3">
                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  Get a Quote
                </Button>
                <Link
                  href={`/services/${tier.slug}`}
                  className="block text-center text-sm font-medium text-gray-text transition-colors hover:text-primary"
                >
                  View Full Details &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── COMPARE TIERS ── */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Compare
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Compare Build Tiers
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            Not sure which tier is right for you? Pick two and see exactly
            what&apos;s included side by side.
          </p>
        </div>

        <div className="mt-12">
          <CompareTool />
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {addOns.map((addon, i) => (
            <Link
              key={i}
              href={`/services/${addon.slug}`}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-dark-card px-6 py-5 transition-all hover:border-primary/30"
            >
              <span className="text-sm font-medium text-off-white group-hover:text-primary transition-colors">
                {addon.name}
              </span>
              <div className="ml-4 flex shrink-0 items-center gap-3">
                <span className="text-sm font-semibold text-primary">
                  {addon.price}
                </span>
                <span className="text-xs text-gray-text/60 group-hover:text-primary transition-colors">
                  Details &rarr;
                </span>
              </div>
            </Link>
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
            Cancel anytime. No contracts. Every plan includes hosting on a
            fast, reliable platform with 99.9% uptime, SSL certificate, and
            Google Analytics & Search Console access.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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

        {/* No retainer note */}
        <div className="mt-10 rounded-xl border border-white/10 bg-dark-card px-6 py-5 text-center">
          <p className="text-sm text-gray-text">
            <span className="font-semibold text-off-white">Don&apos;t want a retainer?</span>{" "}
            Your static site stays live for free. But features that require a database
            (booking systems, admin panels, chatbots, upload galleries) will be
            deactivated after 30 days without a plan. Any edits are billed at $100/hr.
          </p>
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

      {/* ── RETAINER COMPARISON TABLE ── */}
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
                <th className="py-4 px-3 text-center font-display text-gray-text">Starter<br /><span className="text-xs font-normal">$45/mo</span></th>
                <th className="py-4 px-3 text-center font-display text-gray-text">Standard<br /><span className="text-xs font-normal">$75/mo</span></th>
                <th className="py-4 px-3 text-center font-display text-primary">Pro<br /><span className="text-xs font-normal">$110/mo</span></th>
                <th className="py-4 px-3 text-center font-display text-gray-text">Advanced<br /><span className="text-xs font-normal">$150/mo</span></th>
                <th className="py-4 pl-3 text-center font-display text-gray-text">Enterprise<br /><span className="text-xs font-normal">$200/mo</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Hosting, SSL & uptime monitoring", starter: true, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Google Analytics & Search Console access", starter: true, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Monthly Google ranking check", starter: true, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Google Business Profile updates", starter: false, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Monthly analytics snapshot", starter: false, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Content edits included", starter: true, standard: true, pro: true, advanced: true, enterprise: true },
                { feature: "Monthly performance report", starter: false, standard: false, pro: true, advanced: true, enterprise: true },
                { feature: "24hr response time", starter: false, standard: false, pro: true, advanced: true, enterprise: true },
                { feature: "Database management & backups", starter: false, standard: false, pro: false, advanced: true, enterprise: true },
                { feature: "AI & API costs covered", starter: false, standard: false, pro: false, advanced: false, enterprise: true },
                { feature: "Same-day priority support", starter: false, standard: false, pro: false, advanced: false, enterprise: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-3.5 pr-4 text-gray-text">{row.feature}</td>
                  <td className="py-3.5 px-3 text-center">{row.starter ? <Check /> : <X />}</td>
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

      {/* ── FAQ ── */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Common Questions
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            FAQ
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {[
            {
              q: "How long does a website build take?",
              a: "Most standard sites (5–8 pages) are live within 2–3 weeks. Starter sites can be done in under a week. Larger builds with custom features like booking systems or chatbots take 3–5 weeks depending on complexity.",
            },
            {
              q: "What if I want to cancel my retainer?",
              a: "Cancel anytime — no contracts, no cancellation fees. Your static site stays live. However, features that require a database (booking systems, admin panels, chatbots, upload galleries) will be deactivated after 30 days without a plan. We'll always give you your files if you want to move somewhere else.",
            },
            {
              q: "What happens if I don't get a retainer?",
              a: "Your basic website stays live for free on our hosting. But any database-powered features (booking, chatbot, gallery uploads, admin panel) get shut off after 30 days. Any future edits or changes are billed at $100/hr instead of $50/hr. No retainer also means no SEO monitoring, no Google Business updates, and no priority support.",
            },
            {
              q: "Do you work outside of Murfreesboro?",
              a: "Absolutely. While most of our clients are in Murfreesboro and Middle Tennessee, everything we do is done remotely. We can build a site for any business, anywhere.",
            },
            {
              q: "What does the free demo include?",
              a: "We build a working version of your homepage and one or two key pages so you can see exactly what your site will look like. If you love it, we finish the build. If not, you walk away — no charge.",
            },
            {
              q: "Do I own my website?",
              a: "Yes. You own your domain, your content, and your brand. If you ever want to leave, we hand you everything — the code, the files, all of it. No hostage situations.",
            },
            {
              q: "Can I see my website's analytics?",
              a: "Yes. Every client gets viewer access to Google Analytics and Google Search Console so you can see exactly how your site is performing — traffic, clicks, search rankings, all of it. We set it up, you get a login.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-dark-card px-6 py-5"
            >
              <h3 className="font-display text-base font-bold text-off-white">
                {faq.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-text">
                {faq.a}
              </p>
            </div>
          ))}
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

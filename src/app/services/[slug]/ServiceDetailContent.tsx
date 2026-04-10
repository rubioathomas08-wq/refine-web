"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import type { ServiceItem, BuildTier, AddOn } from "@/data/services";

function isTier(s: ServiceItem): s is BuildTier {
  return s.type === "tier";
}

export default function ServiceDetailContent({ service }: { service: ServiceItem }) {
  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <nav className="mb-6 text-sm text-gray-text">
            <Link href="/services" className="transition-colors hover:text-primary">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-off-white">{service.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
              {isTier(service) ? `Build Tier — ${service.pages}` : "Add-On"}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              {service.name}
            </h1>
            <p className="mt-3 font-display text-2xl font-bold text-primary">
              {service.price}
            </p>
            {isTier(service) && (
              <p className="mt-1 text-sm text-gray-text">
                {service.deliveryTime} &middot; {service.revisions}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <SectionWrapper className="pt-4">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Overview</h2>
          <p className="mt-4 leading-relaxed text-gray-text">{service.description}</p>
        </div>
      </SectionWrapper>

      {/* Who This Is For */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Who This Is For</h2>
          <p className="mt-4 leading-relaxed text-gray-text">
            {service.whoIsThisFor}
          </p>
        </div>
      </SectionWrapper>

      {/* Detailed Features (Tiers) or What You Get (Add-ons) */}
      <SectionWrapper>
        <div className="max-w-4xl">
          <h2 className="font-display text-2xl font-bold">
            {isTier(service) ? "What\u2019s Included" : "What You Get"}
          </h2>

          {isTier(service) ? (
            <div className="mt-8 space-y-10">
              {service.detailedFeatures.map((group, i) => (
                <div key={i}>
                  <h3 className="mb-4 font-display text-lg font-bold text-primary">
                    {group.category}
                  </h3>
                  <div className="space-y-4">
                    {group.items.map((item, j) => (
                      <div
                        key={j}
                        className="rounded-xl border border-white/10 bg-dark-card px-6 py-5"
                      >
                        <h4 className="font-display text-base font-bold text-off-white">
                          {item.name}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-text">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-8 space-y-3">
              {(service as AddOn).whatYouGet.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-text"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </SectionWrapper>

      {/* Compatible Tiers (Add-ons only) */}
      {!isTier(service) && (
        <SectionWrapper>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold">Compatible With</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {(service as AddOn).compatibleTiers.map((tier, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-white/10 bg-dark-card px-4 py-2 text-sm font-medium text-off-white"
                >
                  {tier}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-text">
              This add-on can be paired with any of the above build tiers.
            </p>
          </div>
        </SectionWrapper>
      )}

      {/* Quick Feature List (Tiers only) */}
      {isTier(service) && (
        <SectionWrapper>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold">At a Glance</h2>
            <ul className="mt-6 space-y-3">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-text">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}

      {/* CTA */}
      <SectionWrapper>
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-8 py-14 text-center md:px-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            We&apos;ll build your demo for free — no commitment required. If
            you love it, we launch. Simple as that.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Get a Free Quote</Button>
            <Button href="/services" variant="secondary">
              Back to All Services
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

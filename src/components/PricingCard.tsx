"use client";

import { motion } from "framer-motion";
import Button from "./Button";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
}

export default function PricingCard({
  title,
  price,
  period,
  features,
  highlighted = false,
  cta = "Get Started",
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
        highlighted
          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
          : "border-white/10 bg-dark-card"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
          Best Value
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-off-white">{title}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold text-off-white">
          {price}
        </span>
        {period && <span className="text-sm text-gray-text">{period}</span>}
      </div>
      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-text">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          href="/contact"
          variant={highlighted ? "primary" : "secondary"}
          className="w-full"
        >
          {cta}
        </Button>
      </div>
    </motion.div>
  );
}

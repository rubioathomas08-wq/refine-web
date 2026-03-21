"use client";

import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  industry: string;
  description: string;
  color: string;
}

export default function PortfolioCard({
  title,
  industry,
  description,
  color,
}: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-dark-card transition-all hover:border-primary/30"
    >
      {/* Placeholder image area */}
      <div
        className="flex h-56 items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <span className="font-display text-lg font-bold text-white/60">
          Screenshot Coming Soon
        </span>
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {industry}
        </span>
        <h3 className="mt-3 font-display text-lg font-bold text-off-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-text">
          {description}
        </p>
        <button
          disabled
          className="mt-5 cursor-not-allowed rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-text opacity-50"
        >
          View Site &mdash; Coming Soon
        </button>
      </div>
    </motion.div>
  );
}

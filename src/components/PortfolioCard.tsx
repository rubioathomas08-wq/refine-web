"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  industry: string;
  description: string;
  color: string;
  image?: string;
  url?: string;
}

export default function PortfolioCard({
  title,
  industry,
  description,
  color,
  image,
  url,
}: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-dark-card transition-all hover:border-primary/30"
    >
      {/* Image or placeholder */}
      {image ? (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={`${title} website preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className="flex h-56 items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <span className="font-display text-lg font-bold text-white/60">
            Screenshot Coming Soon
          </span>
        </div>
      )}
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
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary/20"
          >
            View Live Site &rarr;
          </a>
        ) : (
          <button
            disabled
            className="mt-5 cursor-not-allowed rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-text opacity-50"
          >
            View Site &mdash; Coming Soon
          </button>
        )}
      </div>
    </motion.div>
  );
}

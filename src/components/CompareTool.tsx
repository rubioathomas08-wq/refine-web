"use client";

import { useState } from "react";
import { buildTiers, buildTierComparison } from "@/data/services";

const Check = () => (
  <svg className="mx-auto h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const XMark = () => (
  <svg className="mx-auto h-5 w-5 text-gray-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-primary">{value}</span>;
  }
  return value ? <Check /> : <XMark />;
}

export default function CompareTool() {
  const [tierA, setTierA] = useState("starter");
  const [tierB, setTierB] = useState("standard");

  const tierAData = buildTiers.find((t) => t.slug === tierA)!;
  const tierBData = buildTiers.find((t) => t.slug === tierB)!;

  return (
    <div>
      {/* Dropdowns */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-widest text-gray-text">
            Tier A
          </label>
          <select
            value={tierA}
            onChange={(e) => setTierA(e.target.value)}
            className="rounded-lg border border-white/10 bg-dark-card px-4 py-3 text-sm text-off-white outline-none transition-colors focus:border-primary"
          >
            {buildTiers.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name} — {t.price}
              </option>
            ))}
          </select>
        </div>

        <span className="hidden text-2xl font-bold text-gray-text/40 sm:block">vs</span>
        <span className="text-center text-sm font-bold text-gray-text/40 sm:hidden">vs</span>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-widest text-gray-text">
            Tier B
          </label>
          <select
            value={tierB}
            onChange={(e) => setTierB(e.target.value)}
            className="rounded-lg border border-white/10 bg-dark-card px-4 py-3 text-sm text-off-white outline-none transition-colors focus:border-primary"
          >
            {buildTiers.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name} — {t.price}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 pr-4 font-display text-off-white">Feature</th>
              <th className="py-4 px-3 text-center font-display text-primary">
                {tierAData.name}
                <br />
                <span className="text-xs font-normal text-gray-text">{tierAData.price}</span>
              </th>
              <th className="py-4 pl-3 text-center font-display text-primary">
                {tierBData.name}
                <br />
                <span className="text-xs font-normal text-gray-text">{tierBData.price}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {buildTierComparison.map((row, i) => {
              const valA = row[tierA as keyof typeof row];
              const valB = row[tierB as keyof typeof row];
              const isDifferent = valA !== valB;

              return (
                <tr
                  key={i}
                  className={`border-b border-white/5 ${isDifferent ? "bg-primary/5" : ""}`}
                >
                  <td className="py-3.5 pr-4 text-gray-text">{row.feature}</td>
                  <td className="py-3.5 px-3 text-center">
                    <CellValue value={valA as boolean | string} />
                  </td>
                  <td className="py-3.5 pl-3 text-center">
                    <CellValue value={valB as boolean | string} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-center text-xs text-gray-text/60">
        Rows highlighted in blue show differences between the two tiers.
      </p>
    </div>
  );
}

import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio — Refine Web",
  description:
    "See our recent web design projects for local businesses in Murfreesboro, Tennessee and Middle TN.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}

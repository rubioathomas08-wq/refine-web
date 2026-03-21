import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services & Pricing — Refine Web",
  description:
    "Transparent pricing for custom web design, monthly maintenance, and hourly work. See exactly what you get — no hidden fees.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}

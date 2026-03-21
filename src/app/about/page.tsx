import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Refine Web",
  description:
    "Meet the founder of Refine Web — a Murfreesboro native building affordable, high-quality websites for local businesses.",
};

export default function AboutPage() {
  return <AboutContent />;
}

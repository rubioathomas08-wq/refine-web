import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Refine Web",
  description:
    "Get in touch with Refine Web for a free website demo. No commitment — we build it, you decide.",
};

export default function ContactPage() {
  return <ContactContent />;
}

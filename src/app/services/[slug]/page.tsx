import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import ServiceDetailContent from "./ServiceDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };

  return {
    title: `${service.name} — Services — Refine Web`,
    description: service.description.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailContent service={service} />;
}

import { notFound } from "next/navigation";
import { services } from "../data";
import ServiceDetails from "@components/ServiceDetails/ServiceDetails";

interface Service {
  slug: string;
  title: string;
  intro?: string;
  features?: {
    icon: string;
    title: string;
    subtitle: string;
    contentTitle: string;
    content: string;
    highlight: string;
    points: string[];
  }[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [
    { slug: "cad-cam-development" },
    { slug: "cae-development" },
    { slug: "cax-software-qa-testing" },
    { slug: "plm" },
    { slug: "product-design" },
    { slug: "bim-modelling" },
    { slug: "marine-engineering" },
    { slug: "virtual-manufacturing" },
    { slug: "industrial-iot" },
    { slug: "ai-solutions" },
    { slug: "enterprise-web-mobile" },
    { slug: "ar-vr-apps" },
  ];
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  const service = services.find((s) => s.slug === slug) as Service | undefined;

  if (!service) return notFound();

  return <ServiceDetails serviceName={slug} service={service} />;
}

import Service from "@/components/Service/Service";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Services | VJCS",
  };
}

export default function ServicesPage() {
  return <Service />;
}

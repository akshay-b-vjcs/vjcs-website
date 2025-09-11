import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "VJCS / Contact",
  };
}

export default function ContactUs() {
  return <Contact />;
}

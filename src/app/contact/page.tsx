import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact | VJCS",
  };
}

export default function ContactUs() {
  return <Contact />;
}

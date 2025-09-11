import About from "@/components/About/About";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About | VJCS ",
  };
}

export default function AboutPage() {
  return <About />;
}

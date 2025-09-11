import Career from "@/components/Career/Career";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "VJCS / Career",
  };
}

export default function CareerPage() {
  return <Career />;
}

import TermsCondition from "@/components/Terms-Condition/Terms-Condition";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "VJCS / TermsCondition",
  };
}

export default function terms() {
  return <TermsCondition />;
}

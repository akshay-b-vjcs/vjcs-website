import Disclaimer from "@/components/Disclaimer/Disclaimer";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Disclaimer | VJCS",
  };
}

export default function DisclaimerPage() {
  return <Disclaimer />;
}

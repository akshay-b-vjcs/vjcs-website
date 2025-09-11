import Carousel from "@/components/Carousel/Carousel";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "VJCS / Carousel",
  };
}

export default function CarouselPage() {
  return <Carousel />;
}

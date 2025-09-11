import type { Metadata } from "next";
import BootstrapProvider from "../provider/BootstrapProvider";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import "@styles/variables.css";
import "@styles/globals.css";

import Header from "@components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Roboto, Inter, Barlow } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-inter",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "VJCS",
  description: "V J Coresoft Pvt. Ltd.",
  keywords: [
    "vcoresoft",
    "engineering",
    "services",
    "product design services",
    "engineering services",
    "cad software india",
    "plm software india",
    "cad services india",
    "cae services india",
    "3d printers india",
    "stratasys 3d printers",
    "slm 3d printers",
    "ptc",
    "altair engineering",
    "mathworks",
    "esi"
  ],
  openGraph: {
    title: "VJCS",
    description: "Engineering Services",
    url: "https://vjcs.com",
    siteName: "VJCS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${inter.variable} ${barlow.variable}`}>
        <BootstrapProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

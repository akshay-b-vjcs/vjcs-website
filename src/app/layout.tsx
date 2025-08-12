import type { Metadata } from "next";
import BootstrapProvider from "../provider/BootstrapProvider";
// import GlightboxProvider from "../provider/GlightboxProvider";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import "@styles/variables.css";
import "@styles/globals.css";

import Header from "@components/Header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
	title: "VJCS",
  description: "V J Coresoft Pvt. Ltd.",
  keywords: ["vcoresoft", "engineering", "services"], //product design services, engineering services, cad software india, plm software india, cad services india, cae services india, 3d printers india, stratasys 3d printers, slm 3d printers, ptc, altair engineering, mathworks, esi
  icons: {
    // icon: "../public/img/favicon.png",
    // apple: "../public/img/apple-touch-icon.png",
  },
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts CDN */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <BootstrapProvider />
        {/* <GlightboxProvider /> */}
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

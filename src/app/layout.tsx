import type { Metadata } from "next";
import BootstrapProvider from "../provider/BootstrapProvider";
import GlightboxProvider from "../provider/GlightboxProvider";
import Header from "@components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import "./globals.css";

export const metadata: Metadata = {
	title: "VJCS",
	description: "V J Coresoft PVt. Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BootstrapProvider />
        <GlightboxProvider />
        <Header />
        {children}
      </body>
    </html>
  );
}

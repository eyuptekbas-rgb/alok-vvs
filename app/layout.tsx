import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alok VVS | Autoriseret VVS-installatør & Kloakmester",
    template: "%s | Alok VVS",
  },
  description:
    "Professionel VVS-service til private og erhverv. Installation, varme, kloak, service og akut hjælp.",
  keywords: [
    "VVS",
    "VVS installatør",
    "kloakmester",
    "akut VVS",
    "varme",
    "fjernvarme",
    "badeværelse",
    "VVS service",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body className={geist.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
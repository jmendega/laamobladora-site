import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Amobladora | Muebles de calidad en Bogotá",
  description:
    "Fabricamos salas, comedores, camas y colchones con más de 24 años de experiencia. Calidad y diseño con entrega a domicilio en Bogotá.",
  openGraph: {
    title: "La Amobladora | Muebles de calidad en Bogotá",
    description:
      "Fabricamos salas, comedores, camas y colchones con más de 24 años de experiencia. Calidad y diseño con entrega a domicilio en Bogotá.",
    url: "https://www.laamobladora.com",
    siteName: "La Amobladora",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://static.wixstatic.com/media/80de6a_3e007a4b9fad4afc9486d6354ca73ec7~mv2.png",
        width: 400,
        height: 400,
        alt: "La Amobladora",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-[#1A1613] text-[#F5F0E8] font-[family-name:var(--font-sans)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

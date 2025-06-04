import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daly Games - Jogos da atualidade",
  description: "Site de jogos da atualidade",
  keywords: ["jogos", "game", "lançamentos", "Daly Games", "steam"],
  authors: [{ name: "Fernando", url: "https://fernandodev.vercel.app/" }],
  openGraph: {
    title: "Daly Games - Jogos da atualidade",
    description: "Descubra os melhores jogos disponíveis agora!",
    url: "loca",
    siteName: "Daly Games",
    images: [`${process.env.PROJECT_URL}/assests/preview.png`],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

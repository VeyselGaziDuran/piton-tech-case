import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piton Technology Case",
  description:
    "Passionate about partnerships, digital transformation, human dimensions, splendid emotional relationships, long-term success.",
  keywords:
    "Partnerships, digital transformation, human dimensions, emotional relationships, long-term success, collaboration, innovation, growth, trust, communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

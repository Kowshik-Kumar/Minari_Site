import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ANURAG GROUP | Premium Residential Apartments in Durgapur",
  description:
    "ANURAG GROUP offers premium residential apartments in Bidhannagar, Durgapur. Book your site visit today.",
  keywords: [
    "ANURAG GROUP",
    "Durgapur real estate",
    "residential apartments Durgapur",
    "Bidhannagar apartments",
    "property in West Bengal",
  ],
  openGraph: {
    title: "ANURAG GROUP | Premium Residential Apartments in Durgapur",
    description: "Luxury apartments by ANURAG GROUP in a prime Bidhannagar location.",
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
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}

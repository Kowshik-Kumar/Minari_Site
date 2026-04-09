import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
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
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}

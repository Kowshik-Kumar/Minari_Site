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
  title: "Minari - Restaurant & Banquet Hall",
  description:
    "Minari - Restaurant & Banquet Hall in Dhanbad. Best Restaurant in Dhanbad | Kitty Party & Birthday Party Organizer.",
  keywords: [
    "Minari Dhanbad",
    "Restaurant in Dhanbad",
    "Banquet Hall Dhanbad",
    "Birthday party venue",
    "Kitty party organizer",
  ],
  openGraph: {
    title: "Minari - Restaurant & Banquet Hall",
    description: "Premium dining and event hosting in Dhanbad.",
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

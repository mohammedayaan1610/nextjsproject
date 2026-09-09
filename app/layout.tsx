import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vita Travel — Curated Retreats & Wellness Marketplace",
  description:
    "Vita Travel is a premium wellness travel marketplace that blends the ease of booking with the feel of an editorial magazine. Discover curated programs, match them with exceptional stays, and book seamlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#091b20] text-white font-sans selection:bg-[#fb9826] selection:text-[#091b20]">
        {children}
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ppNeue = localFont({
  src: "../fonts/PPNeueMontreal-Medium.otf",
  variable: "--font-pp-neue",
});

const ppSupply = localFont({
  src: "../fonts/PPSupplySans-Regular.otf",
  variable: "--font-pp-supply",
});

export const metadata: Metadata = {
  title: "Open Operator",
  description: "Watch AI browse the web, for free",
  openGraph: {
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ppNeue.variable} ${ppSupply.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

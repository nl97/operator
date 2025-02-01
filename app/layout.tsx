import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./components/PosthogProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Open Operator",
  description: "KI beim Browsen im Web zusehen",
  openGraph: {
    images: ["/og.png"],
    title: "Open Operator",
    description: "KI beim Browsen im Web zusehen",
    url: "https://operator.browserbase.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Fallback for browsers that don't support SVG favicons */}
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <PostHogProvider>{children}</PostHogProvider>
        <Analytics />
      </body>
    </html>
  );
}

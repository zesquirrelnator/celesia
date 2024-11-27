import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celesia - The Life Analytics Platform",
  description: "The Life Analytics Platform",
  keywords: "life analytics, data analysis, Celesia, health tracking",
  authors: [{ name: "Georges Casassovici" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Celesia - The Life Analytics Platform",
    description: "The Life Analytics Platform",
    url: "https://www.celesia.io",
    type: "website",
    images: [
      {
        url: "https://www.celesia.io/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Celesia - The Life Analytics Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.ico" />
        <meta name="description" content="The Life Analytics Platform" />
        <meta name="keywords" content="life analytics, data analysis, Celesia, health tracking" />
        <meta name="author" content="Celesia Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Celesia - The Life Analytics Platform" />
        <meta property="og:description" content="The Life Analytics Platform" />
        <meta property="og:url" content="https://www.celesia.io" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.celesia.io/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Celesia - The Life Analytics Platform" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
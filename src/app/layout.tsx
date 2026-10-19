import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SK Abu Tahir - Full Stack Developer | React, Next.js, ML",
  description: "Software Engineer and B.Tech IT student at Jalpaiguri Government Engineering College. Full-stack developer specializing in React, Next.js, Node.js, and applied machine learning.",
  keywords: "SK Abu Tahir, Full Stack Developer, React, Next.js, Machine Learning, TensorFlow, Portfolio",
  authors: [{ name: "SK Abu Tahir" }],
  creator: "SK Abu Tahir",
  openGraph: {
    title: "SK Abu Tahir - Full Stack Developer",
    description: "Software Engineer building full-stack products and applied ML systems.",
    url: "https://skabutahirportfolio.vercel.app/",
    siteName: "SK Abu Tahir Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Abu Tahir - Full Stack Developer",
    description: "Software Engineer building full-stack products and applied ML systems.",
  },
  robots: {
    index: true,
    follow: true,
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
        <meta
          name="google-site-verification"
          content="XJl00tRa138kOdFPiJp0E6qTqzxgP2H5yZ-9sdphc7I"
        />
        <link rel="canonical" href="https://skabutahirportfolio.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

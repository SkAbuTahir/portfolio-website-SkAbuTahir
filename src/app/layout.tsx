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
  title: "SK Abu Tahir - Full Stack Developer | React, Next.js, Node.js",
  description: "Passionate Full Stack Developer specializing in React, Next.js, and modern web technologies. B.Tech IT student with hands-on experience in building scalable web applications.",
  keywords: "SK Abu Tahir, Full Stack Developer, React Developer, Next.js, JavaScript, Web Development, Portfolio",
  authors: [{ name: "SK Abu Tahir" }],
  creator: "SK Abu Tahir",
  openGraph: {
    title: "SK Abu Tahir - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://skabutahirportfolio.vercel.app/",
    siteName: "SK Abu Tahir Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Abu Tahir - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.",
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
        <link rel="canonical" href="https://your-domain.com" />
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

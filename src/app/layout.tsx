import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RepBuddy",
  description: "RepBuddy helps you track your gym workouts, compete with friends, and make real progress with a simple and powerful fitness app.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "RepBuddy",
    description: "The best gym tracker app. Join us!",
    url: "https://repbuddy.org",
    images: [
      {
        url: "https://repbuddy.org/RepBuddy.png",
        alt: "RepBuddy Logo"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0e0e0e" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}

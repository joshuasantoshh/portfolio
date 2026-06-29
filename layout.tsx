import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Santosh | AI & ML Engineer Portfolio",
  description: "Personal engineering portfolio of Joshua Santosh, B.Tech AI & ML Student at Christ University. Showcasing machine learning algorithms, IoT devices, and full-stack software systems.",
  keywords: ["Joshua Santosh", "AI Engineer", "ML Developer", "Christ University", "Software Engineer Portfolio", "Data Scientist", "Cybersecurity", "Defensive AI"],
  authors: [{ name: "Joshua Santosh" }],
  openGraph: {
    title: "Joshua Santosh | AI & ML Engineer Portfolio",
    description: "Explore the engineering projects, technical stack, and academic achievements of Joshua Santosh.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-[#f3f4f6]">
        <div className="scanline-overlay" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

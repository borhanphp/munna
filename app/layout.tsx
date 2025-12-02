import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayeen Uddin Showrav | Software Engineer",
  description: "Personal portfolio website of Ayeen Uddin Showrav, a passionate Software Engineer specializing in web development, software quality assurance, and innovative solutions.",
  keywords: ["Ayeen Uddin Showrav", "Software Engineer", "Web Developer", "Portfolio", "Bangladesh"],
  authors: [{ name: "Ayeen Uddin Showrav" }],
  openGraph: {
    title: "Ayeen Uddin Showrav | Software Engineer",
    description: "Personal portfolio website of Ayeen Uddin Showrav",
    url: "https://ayeenuddinshowrav.xyz",
    siteName: "Ayeen Uddin Showrav Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


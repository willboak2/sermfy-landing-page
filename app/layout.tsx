import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sermfy CMS — Church Management Made Simple",
  description:
    "Sermfy Church Management System (CMS): apps and tools built for believers, churches, and ministries. Manage members, attendance, finances, and more from one dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white">{children}</body>
    </html>
  );
}

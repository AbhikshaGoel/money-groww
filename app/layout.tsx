import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Analysis",
  description: "Generated by Ankit Pratap",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "http://",
        href: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "http://",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

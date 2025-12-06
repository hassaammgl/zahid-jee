import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/layout/wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZAHIDJEE TEXTILE MILLS",
  description:
    "Zahidjee Textile Mills Limited was established in 1987. Having an annual turnover of $130 million, It is one the largest vertically integrated textile companies in Pakistan. It consists of spinning, weaving, processing, stitching and power generation facilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}

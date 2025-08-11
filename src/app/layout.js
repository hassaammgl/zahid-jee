"use client";

import { Fjalla_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import PageWrapper from "@/wrapper/PageWrapper";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${fjallaOne.variable} antialiased bg-black`}>
        <PageWrapper>
          <Navbar />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}

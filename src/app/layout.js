import {
  Oswald,
  Fjalla_One,
  Bodoni_Moda,
  Tangerine,
  Birthstone,
  Poiret_One
} from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/all";
import PageWrapper from "@/wrapper/PageWrapper";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Available weights
  style: ["normal", "italic"], // Optional: Include italics
  variable: "--font-bodoni-moda", // Optional: CSS variable name
});

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla-one",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
});

const birthstone = Birthstone({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-birthstone",
});

const poiretOne = Poiret_One({
  subsets: ['latin', 'cyrillic', 'latin-ext'], // Supports multiple scripts
  weight: '400', // Poiret One has only one weight (400)
  display: 'swap', // Optional: ensures text remains visible during webfont load
  variable: '--font-poiret-one', // CSS variable name
});

export const metadata = {
  title: "ZAHIDJEE TEXTILE MILLS",
  description:
    "Zahidjee Textile Mills Limited was established in 1987. Having an annual turnover of $130 million, It is one the largest vertically integrated textile companies in Pakistan. It consists of spinning, weaving, processing, stitching and power generation facilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${fjallaOne.variable} ${bodoniModa.variable} ${birthstone.variable} ${tangerine.variable} ${poiretOne.variable} antialiased bg-black`}
      >
        <PageWrapper>
          <Navbar />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}

import { Fjalla_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import PageWrapper from "@/wrapper/PageWrapper";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: 'ZAHIDJEE TEXTILE MILLS',
  description: 'Zahidjee Textile Mills Limited was established in 1987. Having an annual turnover of $130 million, It is one the largest vertically integrated textile companies in Pakistan. It consists of spinning, weaving, processing, stitching and power generation facilities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased bg-black`}>
        <PageWrapper>
          <Navbar />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}

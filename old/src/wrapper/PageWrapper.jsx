"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const PageWrapper = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });
    }
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="bg-black">{children}</div>
    </div>
  );
};

export default PageWrapper;

"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText as GSAPSplitText } from "gsap/all";
import { useRef, useState } from "react";
import CountUp from "@/components/CountUp/CountUp";

const Hero = () => {
  const titleRef = useRef(null);
  const titleRef2 = useRef(null);
  const paragraphRef = useRef(null);
  const [showcount, setShowcount] = useState(false);

  useGSAP(() => {
    const titleSplit = new GSAPSplitText(
      [titleRef.current, titleRef2.current],
      { type: "chars" }
    );
    const paragraphSplit = new GSAPSplitText(paragraphRef.current, {
      type: "chars",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });
    gsap.from(paragraphSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
      onComplete: () => setShowcount(true),
    });
  });

  return (
    <section className=" relative h-screen flex items-center text-white">
      <div className="w-screen mb-10">
        <h2
          ref={titleRef}
          className="selection:bg-black selection:text-white text-[12vw] pl-4 leading-40 mt-40 font-extrabold font-[Oswald]"
        >
          ZAHIDJEE TEXTILE
        </h2>
        <h2
          ref={titleRef2}
          className="selection:bg-black selection:text-white text-end text-[12vw] pr-4 font-extrabold font-[Oswald]"
        >
          MILLS LIMITED
        </h2>
        <div
          ref={paragraphRef}
          className="selection:bg-black selection:text-white text-[8vw] pl-4 leading-40 font-extrabold font-[Birthstone]"
        >
          SINCE,
          {showcount && (
            <CountUp
              duration={2}
              className="ml-4 font-[Tangerine]"
              value={1957}
            />
          )}
        </div>
      </div>
      <div className="bottom-gradient-sec absolute -bottom-2 w-screen h-40" />
    </section>
  );
};

export default Hero;

"use client";
import SplitText from "@/components/SplitText/SplitText";
import gsap from "gsap";
import { SplitText as GSAPSplitText } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const About = () => {
  const paragraphRef = useRef();
  const containerRef = useRef();
  const imageWrapperRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const paraSplit = new GSAPSplitText(paragraphRef.current, { type: "words" });
    gsap.from(paraSplit.words, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    const container = containerRef.current;
    const img = imageWrapperRef.current;
    if (!container || !img) return;


    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      y: 100,
    });

    return () => {
      paraSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-screen bg-black flex flex-col items-center py-20">
      {/* Heading */}
      <SplitText
        as="h2"
        delay={2}
        text="About us"
        duration={1.5}
        splitType="chars"
        className="text-center text-6xl md:text-8xl lg:text-9xl text-white font-[Tangerine] mb-14"
      />

      {/* Responsive Grid Layout */}
      <div
        ref={containerRef}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        {/* Text */}
        <div
          className="flex flex-col justify-center text-white space-y-6"
        >
          <SplitText
            as="p"
            delay={2}
            text={`Zahidjee Textile Mills Limited was established in 1987. Having an
            annual turnover of $130 million, it is one of the largest vertically
            integrated textile companies in Pakistan. It consists of spinning,
            weaving, processing, stitching and power generation facilities. It is
            a hundred percent export-based company and a leading home textile
            exporter.`}
            duration={1.5}
            splitType="words"
            className="text-lg md:text-2xl px-6 xl:text-3xl 2xl:text-5xl font-[Poiret_One] leading-relaxed"
          />
        </div>

        {/* Image */}
        <div
          ref={imageWrapperRef}
          className="relative w-full h-80 md:h-[500px] 2xl:h-screen overflow-hidden shadow-lg"
        >
          <Image
            src="/ceo.jpeg"
            alt="CEO portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;

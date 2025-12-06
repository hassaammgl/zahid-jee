"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import SplitText from "@/components/SplitText/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Finishing = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();
  const containerRef = useRef();

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Set initial state
  useLayoutEffect(() => {
    gsap.set([img1Ref.current, img2Ref.current], {
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
      y: 400,
    });
  }, []);

  // Animation with ScrollTrigger
  useGSAP(
    () => {
      const images = [img1Ref.current, img2Ref.current];

      images.forEach((img, index) => {
        gsap.to(img, {
          clipPath: "inset(0% 0 0 0)",
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none",
            markers: false, // Set to true for debugging
          },
          delay: index * 0.2, // Add staggered delay
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="h-screen relative text-white flex justify-center items-center overflow-hidden">
      <SplitText
        text={"Finishing & Stitching"}
        as="h2"
        splitType="words"
        className="absolute leading-52 text-white/40 text-[12vw] text-center font-[Special_Gothic_Expanded_One] pointer-events-none"
      />

      <div
        ref={containerRef}
        className="flex justify-center items-center w-screen h-full relative"
      >
        <SplitText
          splitType="words"
          text={
            "We have a capacity of bleaching, dyeing and printing 150,000 meters daily with modern day machinery. It is capable to process 100% cotton and poly-cotton blended fabrics. We have a stitching unit with 300 state of the art machinery capable of filling up a 40FT container on a daily basis."
          }
          className="font-[Bodoni_Moda] text-4xl w-1/2 text-center relative z-10"
        />

        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={"/devisions/stiching.jpg"}
            className="object-cover absolute bottom-12 left-20 mix-blend-exclusion"
            height={100}
            width={300}
            ref={img1Ref}
            alt="Finishing process"
            priority
          />
          <Image
            src={"/devisions/stitching2.avif"}
            className="object-cover absolute top-24 right-28 mix-blend-exclusion"
            ref={img2Ref}
            height={100}
            width={400}
            alt="Stitching machinery"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Finishing;

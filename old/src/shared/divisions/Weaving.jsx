"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import SplitText from "@/components/SplitText/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Weaving = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();
  const containerRef = useRef();

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Set initial state
  useLayoutEffect(() => {
    gsap.set([img1Ref.current, img2Ref.current, img3Ref.current], {
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
      y: 400
    });
  }, []);

  // Animation with ScrollTrigger
  useGSAP(() => {
    const images = [img1Ref.current, img2Ref.current, img3Ref.current];
    
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
        delay: index * 0.2 // Add staggered delay
      });
    });
  }, { scope: containerRef });

  return (
    <div className="h-screen relative text-white flex justify-center items-center overflow-hidden">
      <SplitText
        text={"Weaving"}
        as="h2"
        className="absolute text-white/40 text-[16vw] font-[Special_Gothic_Expanded_One] pointer-events-none"
      />
      
      <div ref={containerRef} className="flex justify-center items-center w-screen h-full relative">
        <SplitText
          splitType="words"
          text={
            "We have four hundred state of the art shuttleless looms capable of producing 100,000 meters daily. We are producing sheeting, lining, pocketing, herringbone, twills and much more."
          }
          className="font-[Bodoni_Moda] text-4xl w-1/2 text-center relative z-10"
        />
        
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={"/devisions/weaving.avif"}
            className="object-cover absolute bottom-12 left-20 mix-blend-exclusion"
            height={100}
            width={300}
            ref={img1Ref}
            alt="Weaving process"
            priority
          />
          <Image
            src={"/devisions/weaving3.jpg"}
            ref={img2Ref}
            className="object-cover absolute top-24 right-18 mix-blend-exclusion"
            height={100}
            width={400}
            alt="Loom machinery"
            priority
          />
          <Image
            src={"/devisions/weaving2.jpg"}
            ref={img3Ref}
            className="object-cover absolute top-14 right-1/2 mix-blend-exclusion"
            height={100}
            width={200}
            alt="Textile closeup"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Weaving;
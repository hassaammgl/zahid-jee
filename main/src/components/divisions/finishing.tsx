"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/SplitText/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function FinishingDivision() {
    const container = useRef<HTMLDivElement>(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const titleContainerRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const images = [img1Ref.current, img2Ref.current];

            // Set initial state
            gsap.set(images, {
                opacity: 0,
                clipPath: "inset(100% 0 0 0)",
                y: 400,
            });

            images.forEach((img, index) => {
                gsap.to(img, {
                    clipPath: "inset(0% 0 0 0)",
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 60%",
                    },
                    delay: index * 0.2, // Staggered delay
                });
            });

            // Text Animations
            if (titleContainerRef.current) {
                gsap.from(titleContainerRef.current.querySelectorAll(".split-char"), {
                    yPercent: 100,
                    opacity: 0,
                    duration: 1.5,
                    stagger: 0.05,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 60%",
                    },
                });
            }

            if (textContainerRef.current) {
                gsap.from(textContainerRef.current.querySelectorAll(".split-word"), {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.02,
                    ease: "power2.out",
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 60%",
                    },
                });
            }
        },
        { scope: container }
    );

    return (
        <div
            ref={container}
            className="h-screen relative text-white flex justify-center items-center overflow-hidden bg-navy"
        >
            <div
                ref={titleContainerRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            >
                <SplitText
                    text="Finishing & Stitching"
                    as="h2"
                    splitType="words" // User code used words for title here? "Finishing & Stitching" might act better as words or entire block. 
                    // User code said: text={"Finishing & Stitching"} ... splitType="words"
                    // Wait, user code used `font-[Special_Gothic_Expanded_One]` which is now `.font-special`.
                    className="text-white/10 text-[12vw] font-special select-none text-center leading-none"
                />
            </div>

            <div className="flex justify-center items-center w-screen h-full relative px-4">
                <div ref={textContainerRef} className="max-w-4xl text-center relative z-10">
                    <SplitText
                        splitType="words"
                        text="We have a capacity of bleaching, dyeing and printing 150,000 meters daily with modern day machinery. It is capable to process 100% cotton and poly-cotton blended fabrics. We have a stitching unit with 300 state of the art machinery capable of filling up a 40FT container on a daily basis."
                        className="font-bodoni text-2xl md:text-3xl text-center leading-relaxed"
                    />
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Image
                        src="https://images.unsplash.com/photo-1605218427368-35b8013e8e45?q=80&w=1000"
                        className="object-cover absolute bottom-12 left-4 md:left-20 mix-blend-exclusion opacity-80"
                        height={300}
                        width={300}
                        ref={img1Ref}
                        alt="Finishing process"
                    />
                    <Image
                        src="https://images.unsplash.com/photo-1550963295-018d0b005391?q=80&w=1000"
                        className="object-cover absolute top-24 right-4 md:right-28 mix-blend-exclusion opacity-80"
                        ref={img2Ref}
                        height={300}
                        width={400}
                        alt="Stitching machinery"
                    />
                </div>
            </div>
        </div>
    );
}

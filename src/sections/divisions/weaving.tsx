"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/SplitText/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function WeavingDivision() {
    const container = useRef<HTMLDivElement>(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const titleContainerRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Images Animation
            const images = [img1Ref.current, img2Ref.current, img3Ref.current];

            // Set initial state
            gsap.set(images, {
                opacity: 0,
                clipPath: "inset(100% 0 0 0)",
                y: 400
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
                        start: "top 60%", // Adjusted trigger point
                        toggleActions: "play none none none",
                    },
                    delay: index * 0.2,
                });
            });

            // Text Animation
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
                    }
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
                    }
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
            {/* Background Title */}
            <div ref={titleContainerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <SplitText
                    text="Weaving"
                    splitType="chars"
                    className="text-white/10 text-[16vw] font-special select-none"
                />
            </div>

            <div className="flex justify-center items-center w-screen h-full relative px-4">
                {/* Main Text */}
                <div ref={textContainerRef} className="max-w-4xl text-center relative z-10">
                    <SplitText
                        text="We have four hundred state of the art shuttleless looms capable of producing 100,000 meters daily. We are producing sheeting, lining, pocketing, herringbone, twills and much more."
                        splitType="words"
                        className="font-bodoni text-2xl md:text-4xl text-center"
                    />
                </div>

                {/* Floating Images */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Image
                        src="/devisions/weaving.avif"
                        className="object-cover absolute bottom-12 left-4 md:left-20 mix-blend-exclusion opacity-80"
                        height={300}
                        width={400}
                        ref={img1Ref}
                        alt="Weaving process"
                    />
                    <Image
                        src="/devisions/weaving2.jpg"
                        ref={img2Ref}
                        className="object-cover absolute top-24 right-4 md:right-18 mix-blend-exclusion opacity-80"
                        height={300}
                        width={400}
                        alt="Loom machinery"
                    />
                    <Image
                        src="/devisions/weaving3.jpg"
                        ref={img3Ref}
                        className="object-cover absolute top-14 right-1/2 translate-x-1/2 mix-blend-exclusion opacity-60"
                        height={200}
                        width={200}
                        alt="Textile closeup"
                    />
                </div>
            </div>
        </div>
    );
}

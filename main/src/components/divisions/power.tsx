"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/SplitText/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function PowerDivision() {
    const container = useRef<HTMLDivElement>(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const titleContainerRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const images = [img1Ref.current, img2Ref.current];

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
                    delay: index * 0.2,
                });
            });

            // Text Animations
            if (titleContainerRef.current) {
                // User code had "Power Generation" split by WORDS in the Ref Component code
                // and used .split-word targeting or logic.
                // My SplitText splits words if splitType="words".
                gsap.from(titleContainerRef.current.querySelectorAll(".split-word"), {
                    yPercent: 100,
                    opacity: 0,
                    duration: 1.5,
                    stagger: 0.1,
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
                    text="Power Generation"
                    as="h2"
                    splitType="words"
                    className="text-white/10 text-[12vw] font-special select-none text-center leading-none"
                />
            </div>

            <div className="flex justify-center items-center w-screen h-full relative px-4">
                <div ref={textContainerRef} className="max-w-4xl text-center relative z-10">
                    <SplitText
                        splitType="words"
                        text="The company boasts 25MW generation capabilities, which includes gas, heavy furnace oil, and solar power plants. Moreover, it has a grid 20MW. These power plants ensure cost-efficient operations and eliminate any chance of black-shutdowns which results in timely deliveries. We have relied on world leading brands to provide machinery such as Jenbacher, Wartsilla, Jinko for catering our energy needs."
                        className="font-bodoni text-2xl md:text-3xl text-center leading-relaxed"
                    />
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Image
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000"
                        className="object-cover absolute top-12 right-4 md:right-1/4 mix-blend-exclusion opacity-70"
                        height={300}
                        width={300}
                        ref={img1Ref}
                        alt="Power generation facility"
                    />
                    <Image
                        src="https://images.unsplash.com/photo-1565514020176-dbf2277cc112?q=80&w=1000"
                        ref={img2Ref}
                        className="object-cover absolute bottom-24 left-4 md:left-28 mix-blend-exclusion opacity-70"
                        height={300}
                        width={400}
                        alt="Solar power"
                    />
                </div>
            </div>
        </div>
    );
}

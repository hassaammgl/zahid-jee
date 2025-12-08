"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "@/components/SplitText/SplitText";

export default function SpinningDivision() {
    const container = useRef<HTMLDivElement>(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useGSAP(
        () => {
            if (!titleRef.current || !paragraphRef.current) return;

            const titleChars = titleRef.current.querySelectorAll(".split-char");
            const paragraphWords = paragraphRef.current.querySelectorAll(".split-word");

            gsap.from(titleChars, {
                yPercent: 100,
                opacity: 0,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 60%",
                },
            });

            gsap.from([img1Ref.current, img2Ref.current], {
                clipPath: "inset(100% 0 0 0)",
                y: 400,
                opacity: 0,
                duration: 3,
                ease: "circ.inOut",
                stagger: 0,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 60%",
                },
            });

            gsap.from(paragraphWords, {
                yPercent: 100,
                opacity: 0,
                duration: 0.8,
                ease: "expo.out",
                stagger: 0.05,
                delay: 0.5,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 60%",
                },
            });
        },
        { scope: container }
    );

    return (
        <div
            ref={container}
            className="h-screen relative text-white flex justify-center items-center overflow-hidden bg-navy"
        >
            {/* <SplitText
                text="Spinning"
                as="h2"
                splitType="chars"
                className="absolute text-white/10 text-[16vw] font-special z-0 pointer-events-none select-none"
            // Applying ref to a wrapper if needed, but SplitText forwards props? 
            // My SplitText implementation takes className and props but didn't explicitly implement ref forwarding.
            // I'll grab the ref via a wrapped div or update SplitText. 
            // For now, wrapping in a div to capture ref is safer if I didn't verify SplitText types.
            /> */}
            {/* 
         Actually, to target the chars inside SplitText, I need a ref to the component root. 
         My SplitText component creates a Component (div by default) but didn't use forwardRef. 
         I will modify the usage to wrap:
      */}
            <div ref={titleRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <SplitText
                    text="Spinning"
                    splitType="chars"
                    className="text-white text-[16vw] font-special select-none mix-blend-exclusion"
                />
            </div>


            <div className="flex justify-center items-center w-screen relative z-10 px-4">
                <div ref={paragraphRef} className="max-w-4xl text-center">
                    <SplitText
                        text="The spinning division consists of 175,000 spindles, most of which are recently inducted. All of the machinery is state of the art from leading machinery manufacturers such as Rieter, Toyoda and Marzoli."
                        splitType="words"
                        className="font-bodoni text-2xl md:text-4xl text-center"
                    />
                </div>

                <Image
                    ref={img1Ref}
                    src="/devisions/spinning.jpg"
                    className="object-cover absolute bottom-12 right-4 md:right-20 mix-blend-exclusion opacity-70"
                    height={300}
                    width={400}
                    alt="Spinning Machinery"
                />
                <Image
                    ref={img2Ref}
                    src="/devisions/spinning2.jpg"
                    className="object-cover absolute top-24 left-4 md:left-28 mix-blend-exclusion opacity-70"
                    height={300}
                    width={500}
                    alt="Yarn Production"
                />
            </div>
        </div>
    );
}

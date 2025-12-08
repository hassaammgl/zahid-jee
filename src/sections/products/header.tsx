"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProductsHeader() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".animate-fade-in", {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 bg-cover bg-center text-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(11, 17, 32, 0.8), rgba(11, 17, 32, 0.5)), url('/hero.jpg')",
            }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 animate-fade-in">
                <span className="text-gold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-bold">
                    Premium Quality
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
                    Our Portfolio
                </h1>
                <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto">
                    From finest yarns to luxurious home textiles, our products define excellence in the global
                    textile market.
                </p>
            </div>
        </section>
    );
}


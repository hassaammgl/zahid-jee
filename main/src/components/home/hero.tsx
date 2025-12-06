"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
    const container = useRef(null);

    useGSAP(
        () => {
            // Hero Animation with delay to wait for Loader
            gsap.to(".gsap-hero", {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 2.5, // wait for loader
            });
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="relative h-screen bg-hero bg-cover bg-center bg-fixed flex items-center justify-center text-center px-4 overflow-hidden"
        >
            <div className="absolute inset-0 bg-linear-to-t from-navy to-transparent opacity-80" />

            <div className="relative z-10 max-w-5xl">
                <div className="gsap-hero opacity-0 translate-y-10">
                    <p className="text-gold uppercase tracking-[0.3em] font-semibold text-sm md:text-base mb-6">
                        Established 1987 | Export Excellence
                    </p>

                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 leading-none">
                        Weaving the <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-yellow-200">
                            Fabric of Life
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                        A premier vertically integrated textile company in Pakistan. From spinning raw cotton to
                        stitching luxury home textiles, we define quality at every thread.
                    </p>
                </div>

                <div className="gsap-hero opacity-0 translate-y-10 flex flex-col md:flex-row gap-6 justify-center">
                    <Link
                        href="/divisions"
                        className="px-10 py-4 bg-gold text-navy font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
                    >
                        Our Operations
                    </Link>

                    <Link
                        href="/investors"
                        className="px-10 py-4 border border-white text-white font-bold tracking-widest uppercase hover:bg-white hover:text-navy transition-colors duration-300"
                    >
                        Financial Reports
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold text-2xl">
                <i className="fas fa-chevron-down" />
            </div>
        </section>
    );
}

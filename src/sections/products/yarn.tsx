"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function YarnSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const img = container.current?.querySelector(".product-img");
            const text = container.current?.querySelector(".product-text");

            if (img && text) {
                gsap.to(text, {
                    scrollTrigger: { trigger: container.current, start: "top 70%" },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                });

                gsap.to(img, {
                    scrollTrigger: { trigger: container.current, start: "top 70%" },
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.2,
                    ease: "power3.out",
                });
            }
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-12 sm:py-16 md:py-20 relative product-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="product-text opacity-0 translate-y-10 order-2 lg:order-1">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-navy text-gold flex items-center justify-center text-2xl sm:text-3xl rounded-full flex-shrink-0">
                                <i className="fas fa-fingerprint" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">Yarn Products</h2>
                        </div>
                        <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                            We produce premium quality yarn ranging from coarse to fine counts. Our spinning units are
                            optimized for producing Carded, Combed, Siro, Lycra, and Slub yarns. These are widely
                            used in the manufacturing of Denim and Knitting products globally.
                        </p>

                        <h3 className="font-bold text-navy uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
                            Product Varieties
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {[
                                "100% Cotton",
                                "Polyester Cotton (PC)",
                                "Chief Value Cotton (CVC)",
                                "Slub & Siro",
                                "Lycra Blends",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="px-3 sm:px-4 py-2 bg-slate text-navy rounded-full text-xs sm:text-sm font-medium border border-gray-200 hover:border-gold transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative product-img opacity-0 translate-x-10 order-1 lg:order-2">
                        <div className="absolute top-0 right-0 w-3/4 h-full bg-gold/10 -z-10 rounded-r-3xl hidden sm:block" />
                        <Image
                            src="/imgs/yarn.jpg"
                            alt="Yarn Products"
                            width={1000}
                            height={500}
                            className="rounded-lg shadow-2xl w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


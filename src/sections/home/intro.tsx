"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
    const container = useRef(null);

    useGSAP(
        () => {
            // Reveal Text
            gsap.from(".reveal-text", {
                scrollTrigger: {
                    trigger: ".reveal-text",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Reveal Image
            gsap.from(".reveal-image", {
                scrollTrigger: {
                    trigger: ".reveal-image",
                    start: "top 80%",
                },
                x: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            // Counters
            gsap.utils.toArray<HTMLElement>(".counter").forEach((counter) => {
                const target = parseFloat(counter.getAttribute("data-target") || "0");
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 85%",
                    },
                });
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div className="reveal-text">
                    <span className="text-gold font-bold uppercase tracking-widest text-sm">Who We Are</span>

                    <h2 className="text-5xl font-serif font-bold text-navy mt-4 mb-8 leading-tight">
                        One of Pakistan&apos;s Largest Textile Powerhouses
                    </h2>

                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Zahidjee Textile Mills Limited is synonymous with quality and trust. With an annual turnover
                        exceeding <span className="text-navy font-bold">$130 Million</span>, we stand as a pillar of the
                        national economy.
                    </p>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Our journey began in 1987. Today, we operate four major divisions: Spinning, Weaving,
                        Finishing, and Power Generation. We are 100% export-oriented, delivering premium home
                        textiles to global markets.
                    </p>

                    <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
                        <div>
                            <div className="text-4xl font-serif font-bold text-gold counter" data-target="130">
                                0
                            </div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 mt-2">$ Million Turnover</div>
                        </div>

                        <div>
                            <div className="text-4xl font-serif font-bold text-gold counter" data-target="37">
                                0
                            </div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 mt-2">Years of Legacy</div>
                        </div>

                        <div>
                            <div className="text-4xl font-serif font-bold text-gold">4</div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 mt-2">Major Divisions</div>
                        </div>
                    </div>
                </div>

                <div className="relative reveal-image">
                    <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-lg" />
                    <Image
                        src="https://images.unsplash.com/photo-1563121578-8316c1f1737e?q=80&w=1000"
                        alt="Textile Factory"
                        width={1000}
                        height={600}
                        className="relative rounded-lg shadow-2xl w-full object-cover h-[600px]"
                    />
                </div>
            </div>
        </section>
    );
}

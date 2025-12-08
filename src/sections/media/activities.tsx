"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ActivitiesSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const text = container.current?.querySelector(".activity-text");
            const img = container.current?.querySelector(".activity-img");

            if (text && img) {
                gsap.to(text, {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 75%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                });

                gsap.to(img, {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 75%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                });
            }
        },
        { scope: container }
    );

    return (
        <section ref={container} className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="activity-text opacity-0 translate-x-[-30px]">
                    <span className="text-gold font-bold uppercase tracking-widest text-sm">The Group</span>
                    <h2 className="text-4xl font-serif font-bold text-navy mt-2 mb-6">
                        Companies & Business Activities
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        Zahidjee Textile Mills Limited is part of a larger conglomerate with diversified
                        interests. While our core focus remains on the textile value chain, our associated
                        companies contribute to a robust ecosystem of industrial excellence.
                    </p>

                    <div className="space-y-4">
                        <div className="flex gap-4 p-4 border border-gray-100 rounded hover:shadow-md transition-shadow">
                            <div className="text-gold text-2xl">
                                <i className="fas fa-layer-group" />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy">Zahidjee Textile Mills</h4>
                                <p className="text-sm text-gray-500">Spinning, Weaving, and Home Textiles.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 border border-gray-100 rounded hover:shadow-md transition-shadow">
                            <div className="text-gold text-2xl">
                                <i className="fas fa-bolt" />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy">Zahidjee Power</h4>
                                <p className="text-sm text-gray-500">
                                    Captive power generation for industrial sustainability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative activity-img opacity-0 translate-x-[30px]">
                    <div className="absolute top-10 -right-10 w-2/3 h-full bg-slate -z-10 rounded-lg" />
                    <Image
                        src="/hero.jpg"
                        alt="Business Activities"
                        width={1000}
                        height={400}
                        className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

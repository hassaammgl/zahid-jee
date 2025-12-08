"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinishedSection() {
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
                                <i className="fas fa-bed" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">Finished Products</h2>
                        </div>
                        <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                            We are specialists in Home Textiles. Our stitching units transform our premium fabrics
                            into luxurious bedding and linen products. We export to top retailers in the USA, Europe,
                            and UK, ensuring every stitch meets international quality standards.
                        </p>

                        <h3 className="font-bold text-navy uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Collection</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {[
                                "Bed Sheets & Sets",
                                "Duvet Covers",
                                "Curtains",
                                "Kitchen Linen",
                                "Institutional Linen",
                                "Pillow Cases",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border border-gray-100 rounded hover:shadow-md transition-shadow text-sm sm:text-base"
                                >
                                    <i className="fas fa-check text-gold" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative product-img opacity-0 translate-x-10 order-1 lg:order-2">
                        <div className="absolute bottom-0 left-0 w-3/4 h-full bg-gold/10 -z-10 rounded-l-3xl hidden sm:block" />
                        <Image
                            src="/imgs/stitch.jpg"
                            alt="Finished Products"
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

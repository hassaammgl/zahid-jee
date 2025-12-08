"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InvestorsMetrics() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(".info-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
            });
        },
        { scope: container }
    );

    return (
        <div ref={container} className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Symbol */}
            <div className="bg-white p-8 rounded shadow-sm border-t-4 border-gold hover:-translate-y-1 transition-transform duration-300 info-card opacity-0 translate-y-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-navy uppercase tracking-wider text-sm">Symbol</h3>
                    <i className="fas fa-chart-line text-gold text-2xl" />
                </div>
                <div className="text-3xl font-serif font-bold text-navy">ZAHIDJEE</div>
                <p className="text-sm text-gray-500 mt-2">Pakistan Stock Exchange</p>
            </div>

            {/* Rating */}
            <div className="bg-white p-8 rounded shadow-sm border-t-4 border-gold hover:-translate-y-1 transition-transform duration-300 info-card opacity-0 translate-y-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-navy uppercase tracking-wider text-sm">Credit Rating</h3>
                    <i className="fas fa-star text-gold text-2xl" />
                </div>
                <div className="text-3xl font-serif font-bold text-navy">A- / A2</div>
                <p className="text-sm text-gray-500 mt-2">PACRA Rating Report</p>
                <a
                    href="#"
                    className="text-xs text-gold font-bold uppercase mt-3 inline-block border-b border-gold pb-0.5"
                >
                    View Report
                </a>
            </div>

            {/* Shares */}
            <div className="bg-white p-8 rounded shadow-sm border-t-4 border-gold hover:-translate-y-1 transition-transform duration-300 info-card opacity-0 translate-y-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-navy uppercase tracking-wider text-sm">Free Float</h3>
                    <i className="fas fa-percentage text-gold text-2xl" />
                </div>
                <div className="text-3xl font-serif font-bold text-navy">45.2%</div>
                <p className="text-sm text-gray-500 mt-2">Shareholding Pattern</p>
                <a
                    href="#"
                    className="text-xs text-gold font-bold uppercase mt-3 inline-block border-b border-gold pb-0.5"
                >
                    View Details
                </a>
            </div>
        </div>
    );
}

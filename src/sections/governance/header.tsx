"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GovernanceHeader() {
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
            className="relative pt-40 pb-20 bg-cover bg-center text-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(11, 17, 32, 0.8), rgba(11, 17, 32, 0.6)), url('/hero.jpg')",
            }}
        >
            <div className="max-w-4xl mx-auto px-6 relative z-10 animate-fade-in">
                <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold">
                    Transparency & Integrity
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mt-4 mb-6">
                    Corporate Governance
                </h1>
                <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
                    Adhering to the highest standards of ethical management and regulatory compliance to ensure
                    sustainable value for our stakeholders.
                </p>
            </div>
        </section>
    );
}

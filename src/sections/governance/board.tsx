"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BoardSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(".gov-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
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

    const directors = [
        {
            name: "Mr. Zahid Anwer",
            position: "Chief Executive Officer",
            description: "Leading the company with a vision for innovation and global expansion since its inception.",
            hasIcon: true,
        },
        {
            name: "Director Name",
            position: "Chairman",
            description: "Ensuring the board functions effectively and meets its obligations to shareholders.",
            hasIcon: true,
        },
        {
            name: "Director Name",
            position: "Executive Director",
            description: "Overseeing the strategic direction of manufacturing operations.",
            hasIcon: true,
        },
        {
            name: "Board Member",
            position: "Non-Executive Director",
            description: "",
            hasIcon: false,
        },
        {
            name: "Board Member",
            position: "Independent Director",
            description: "",
            hasIcon: false,
        },
        {
            name: "Board Member",
            position: "Independent Director",
            description: "",
            hasIcon: false,
        },
    ];

    return (
        <section ref={container} className="mb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <i className="fas fa-users text-4xl text-gold mb-4" />
                    <h2 className="text-4xl font-serif font-bold text-navy">Board of Directors</h2>
                    <div className="w-16 h-1 bg-gold mx-auto mt-4" />
                </div>

                {/* Directors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {directors.map((director, index) => (
                        <div
                            key={index}
                            className="bg-slate p-8 rounded border border-gray-100 hover:shadow-xl hover:border-gold transition-all duration-300 group gov-card opacity-0 translate-y-6"
                        >
                            {director.hasIcon && (
                                <div className="w-16 h-16 bg-navy text-gold flex items-center justify-center text-2xl rounded-full mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                                    <i className="fas fa-user-tie" />
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-navy mb-1">{director.name}</h3>
                            <p className="text-gold text-sm uppercase tracking-wider mb-4">{director.position}</p>
                            {director.description && (
                                <p className="text-gray-500 text-sm leading-relaxed">{director.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MembershipsSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(".member-item", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                scale: 1,
                opacity: 1,
                stagger: 0.1,
                duration: 0.5,
                ease: "back.out(1.7)",
            });
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="py-20 bg-navy text-white relative mb-24"
        >
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
                }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gold font-bold uppercase tracking-widest text-sm">
                        Affiliations
                    </span>
                    <h2 className="text-4xl font-serif font-bold mt-2">Our Memberships</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Membership Item */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded text-center hover:bg-white/10 transition-colors member-item opacity-0 scale-90">
                        <i className="fas fa-industry text-4xl text-gold mb-4" />
                        <h4 className="font-bold text-sm">APTPMA</h4>
                        <p className="text-xs text-gray-400 mt-1">All Pakistan Textile Mills Association</p>
                    </div>

                    {/* Membership Item */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded text-center hover:bg-white/10 transition-colors member-item opacity-0 scale-90">
                        <i className="fas fa-building text-4xl text-gold mb-4" />
                        <h4 className="font-bold text-sm">LCCI</h4>
                        <p className="text-xs text-gray-400 mt-1">Lahore Chamber of Commerce</p>
                    </div>

                    {/* Membership Item */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded text-center hover:bg-white/10 transition-colors member-item opacity-0 scale-90">
                        <i className="fas fa-chart-line text-4xl text-gold mb-4" />
                        <h4 className="font-bold text-sm">PSX</h4>
                        <p className="text-xs text-gray-400 mt-1">Pakistan Stock Exchange</p>
                    </div>

                    {/* Membership Item */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded text-center hover:bg-white/10 transition-colors member-item opacity-0 scale-90">
                        <i className="fas fa-globe-asia text-4xl text-gold mb-4" />
                        <h4 className="font-bold text-sm">PTEA</h4>
                        <p className="text-xs text-gray-400 mt-1">Pakistan Textile Exporters Association</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

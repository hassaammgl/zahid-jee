"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ComplianceSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(".gov-fade", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="max-w-7xl mx-auto px-6 mb-20">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Shareholding Pattern */}
                <div className="bg-slate p-10 rounded border border-gray-200 gov-fade opacity-0 translate-y-6">
                    <i className="fas fa-chart-pie text-4xl text-gold mb-6" />
                    <h3 className="text-3xl font-serif font-bold text-navy mb-4">Shareholding Pattern</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We maintain a transparent record of our equity distribution. The shareholding pattern
                        details the percentage of shares held by Directors, Financial Institutions, and the
                        General Public.
                    </p>
                    <div className="flex flex-col gap-4">
                        <a
                            href="#"
                            className="flex items-center justify-between p-4 bg-white border border-gray-200 hover:border-gold hover:shadow-md transition-all group"
                        >
                            <span className="font-bold text-navy">View Latest Pattern</span>
                            <i className="fas fa-file-pdf text-gray-400 group-hover:text-gold" />
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-between p-4 bg-white border border-gray-200 hover:border-gold hover:shadow-md transition-all group"
                        >
                            <span className="font-bold text-navy">Free Float of Shares</span>
                            <i className="fas fa-file-pdf text-gray-400 group-hover:text-gold" />
                        </a>
                    </div>
                </div>

                {/* Website Compliance */}
                <div className="bg-slate p-10 rounded border border-gray-200 gov-fade opacity-0 translate-y-6">
                    <i className="fas fa-certificate text-4xl text-gold mb-6" />
                    <h3 className="text-3xl font-serif font-bold text-navy mb-4">Compliance Certificate</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Zahidjee Textile Mills Limited strictly adheres to the regulations set forth by the
                        Securities and Exchange Commission of Pakistan (SECP). Our website serves as a primary
                        source of information for stakeholders.
                    </p>

                    <div className="border-2 border-dashed border-gold/40 p-6 text-center bg-white">
                        <i className="fas fa-shield-alt text-4xl text-navy mb-3" />
                        <h4 className="font-bold text-lg text-navy">SECP Website Compliance</h4>
                        <p className="text-sm text-gray-500 mb-4">Certificate of Compliance</p>
                        <a
                            href="#"
                            className="inline-block px-6 py-2 bg-navy text-white text-sm font-bold uppercase tracking-wider hover:bg-gold transition-colors"
                        >
                            Download Certificate
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

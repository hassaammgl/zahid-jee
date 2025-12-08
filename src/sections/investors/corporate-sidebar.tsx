"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CorporateSidebar() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(container.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    return (
        <div
            ref={container}
            className="space-y-8 report-section opacity-0 translate-x-[20px]"
        >
            {/* Corporate Info */}
            <div className="bg-navy text-white p-8 rounded shadow-lg">
                <h3 className="text-xl font-serif font-bold mb-6 text-gold">Corporate Info</h3>
                <ul className="space-y-4">
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded transition-all"
                        >
                            <span>Election of Directors</span>
                            <i className="fas fa-chevron-right text-xs" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded transition-all"
                        >
                            <span>Unclaimed Dividend</span>
                            <i className="fas fa-chevron-right text-xs" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* CSR Section */}
            <div className="bg-white p-8 rounded shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold mb-6 text-navy">Compliance & CSR</h3>

                <div className="space-y-4">
                    <a href="#" className="block">
                        <h4 className="font-bold text-sm text-navy hover:text-gold transition-colors">
                            Gender Pay Gap Statement
                        </h4>
                        <div className="flex gap-2 mt-2">
                            <span className="text-xs bg-slate px-2 py-1 rounded border">Year 2025</span>
                            <span className="text-xs bg-slate px-2 py-1 rounded border">Year 2024</span>
                        </div>
                    </a>
                    <hr className="border-gray-100" />
                    <a href="#" className="block flex items-center gap-3 group">
                        <i className="fas fa-hand-holding-heart text-gold group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-gray-600 group-hover:text-navy">
                            Social Responsibility Report
                        </span>
                    </a>
                </div>
            </div>

            {/* Downloads / Forms */}
            <div className="bg-gold/10 p-8 rounded border border-gold/20">
                <h3 className="text-xl font-serif font-bold mb-6 text-navy">Shareholder Forms</h3>
                <ul className="space-y-3">
                    {[
                        { icon: "fas fa-file-download", text: "Proxy Form" },
                        { icon: "fas fa-file-download", text: "Dividend Mandate Form" },
                        { icon: "fas fa-file-download", text: "Consent for Annual Report" },
                    ].map((item, idx) => (
                        <li key={idx}>
                            <a
                                href="#"
                                className="flex items-center gap-3 text-sm font-medium text-navy hover:text-gold transition-colors"
                            >
                                <i className={item.icon} /> {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CommitteesSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(".gov-section", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
            });
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="py-20 bg-navy text-white relative overflow-hidden mb-24"
        >
            {/* Background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 transform skew-x-12" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Audit Committee */}
                    <div className="gov-section opacity-0 translate-x-[-30px]">
                        <h3 className="text-3xl font-serif font-bold text-white mb-8 flex items-center gap-3">
                            <i className="fas fa-clipboard-check text-gold" /> Audit Committee
                        </h3>
                        <div className="bg-white/5 p-8 rounded border border-white/10 backdrop-blur-sm">
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center text-sm font-bold mt-1">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Chairman</h4>
                                        <p className="text-gray-400 text-sm">Independent Director</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-bold mt-1">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Member</h4>
                                        <p className="text-gray-400 text-sm">Non-Executive Director</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-bold mt-1">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Member</h4>
                                        <p className="text-gray-400 text-sm">Non-Executive Director</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h4 className="text-gold font-bold mb-2">Terms of Reference</h4>
                                <p className="text-sm text-gray-400">
                                    Review of quarterly, half-yearly and annual financial statements, and internal
                                    control systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Auditors & Legal */}
                    <div className="gov-section opacity-0 translate-x-[30px]">
                        <h3 className="text-3xl font-serif font-bold text-white mb-8 flex items-center gap-3">
                            <i className="fas fa-gavel text-gold" /> Advisors
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-white/5 p-8 rounded border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">
                                    Statutory Auditors
                                </h4>
                                <p className="text-xl font-serif font-bold">Riaz Ahmad & Company</p>
                                <p className="text-gray-400">Chartered Accountants</p>
                            </div>

                            <div className="bg-white/5 p-8 rounded border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">
                                    Legal Advisor
                                </h4>
                                <p className="text-xl font-serif font-bold">Liaqat Ali Butt</p>
                                <p className="text-gray-400">Advocate High Court</p>
                            </div>

                            <div className="bg-white/5 p-8 rounded border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">
                                    Internal Auditor
                                </h4>
                                <p className="text-xl font-serif font-bold">Head of Internal Audit</p>
                                <p className="text-gray-400">Reporting directly to the Audit Committee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

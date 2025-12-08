"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NoticesSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(".media-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="mb-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-end gap-4 mb-12 border-b border-gray-200 pb-4">
                    <h2 className="text-4xl font-serif font-bold text-navy">Notice of Meetings</h2>
                    <span className="text-gray-400 text-sm pb-2 uppercase tracking-wide">
                        Corporate Announcements
                    </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* AGM Card */}
                    <div className="bg-slate p-8 rounded-lg border-l-4 border-gold shadow-sm hover:shadow-xl transition-all duration-300 media-card opacity-0 translate-y-6">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 bg-white text-navy rounded-full flex items-center justify-center text-xl shadow-sm">
                                <i className="fas fa-bullhorn" />
                            </div>
                            <span className="bg-navy text-gold text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                                Upcoming
                            </span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-navy mb-2">Notice of AGM</h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            The Annual General Meeting of Zahidjee Textile Mills Limited will be held to transact
                            ordinary and special business.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="flex-1 bg-white border border-gray-200 py-3 text-center text-sm font-bold text-navy hover:bg-gold hover:text-white hover:border-gold transition-colors rounded"
                            >
                                <i className="fas fa-file-pdf mr-2" /> English
                            </a>
                            <a
                                href="#"
                                className="flex-1 bg-white border border-gray-200 py-3 text-center text-sm font-bold text-navy hover:bg-gold hover:text-white hover:border-gold transition-colors rounded"
                            >
                                <i className="fas fa-file-pdf mr-2" /> Urdu
                            </a>
                        </div>
                    </div>

                    {/* EOGM Card */}
                    <div className="bg-slate p-8 rounded-lg border-l-4 border-navy shadow-sm hover:shadow-xl transition-all duration-300 media-card opacity-0 translate-y-6">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 bg-white text-navy rounded-full flex items-center justify-center text-xl shadow-sm">
                                <i className="fas fa-gavel" />
                            </div>
                            <span className="bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                                Archived
                            </span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-navy mb-2">Notice of EOGM</h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            Extraordinary General Meeting notices regarding special resolutions and corporate
                            restructuring updates.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="flex-1 bg-white border border-gray-200 py-3 text-center text-sm font-bold text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors rounded"
                            >
                                <i className="fas fa-download mr-2" /> Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

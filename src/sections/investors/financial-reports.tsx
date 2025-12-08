"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinancialReports() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const reports = container.current?.querySelectorAll(".report-section");
            reports?.forEach((report) => {
                gsap.to(report, {
                    scrollTrigger: {
                        trigger: report,
                        start: "top 80%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                });
            });
        },
        { scope: container }
    );

    return (
        <div ref={container} className="lg:col-span-2 space-y-12">
            {/* Annual Reports */}
            <div className="bg-white p-10 rounded shadow-sm border border-gray-100 report-section opacity-0 translate-x-[-20px]">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <i className="fas fa-file-invoice-dollar text-3xl text-gold" />
                    <h2 className="text-3xl font-serif font-bold text-navy">Annual Reports</h2>
                </div>

                <div className="space-y-4">
                    {[
                        { year: "24", title: "Financial Year 2024-2025" },
                        { year: "23", title: "Financial Year 2023-2024" },
                        { year: "22", title: "Financial Year 2022-2023" },
                        { year: "21", title: "Financial Year 2021-2022" },
                    ].map((item) => (
                        <div
                            key={item.year}
                            className="group flex items-center justify-between p-4 bg-slate rounded hover:bg-navy hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white text-navy rounded-full flex items-center justify-center font-bold text-sm shadow-sm group-hover:text-gold">
                                    {item.year}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-xs text-gray-500 group-hover:text-gray-300">
                                        Audited Accounts
                                    </p>
                                </div>
                            </div>
                            <i className="fas fa-download text-gray-400 group-hover:text-gold" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Semi Annual Reports */}
            <div className="bg-white p-10 rounded shadow-sm border border-gray-100 report-section opacity-0 translate-x-[-20px]">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <i className="fas fa-file-alt text-3xl text-gold" />
                    <h2 className="text-3xl font-serif font-bold text-navy">Semi-Annual Reports</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {["July - Dec 2023", "July - Dec 2022", "July - Dec 2021"].map((period) => (
                        <a
                            key={period}
                            href="#"
                            className="block p-5 border border-gray-200 rounded hover:border-gold hover:shadow-md transition-all group"
                        >
                            <span className="text-xs text-gold font-bold uppercase tracking-wider">{period}</span>
                            <h4 className="font-bold text-navy mt-1 group-hover:text-gold transition-colors">
                                Half Yearly Report
                            </h4>
                            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                                <span>
                                    <i className="far fa-file-pdf" /> PDF
                                </span>
                                <i className="fas fa-arrow-right -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

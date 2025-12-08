"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(container.current, {
                scrollTrigger: {
                    trigger: "main",
                    start: "top 75%",
                },
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    return (
        <div
            ref={container}
            className="lg:w-7/12 p-8 sm:p-10 md:p-12 bg-white contact-right opacity-0 translate-x-10"
        >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
                Fill out the form below and we will get back to you shortly.
            </p>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! Your message has been sent.");
                }}
            >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                        <label className="block text-sm font-bold text-navy mb-2">First Name</label>
                        <input
                            type="text"
                            className="w-full bg-slate border border-gray-200 p-3 sm:p-4 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm sm:text-base"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-navy mb-2">Last Name</label>
                        <input
                            type="text"
                            className="w-full bg-slate border border-gray-200 p-3 sm:p-4 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm sm:text-base"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                        <label className="block text-sm font-bold text-navy mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-slate border border-gray-200 p-3 sm:p-4 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm sm:text-base"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-navy mb-2">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full bg-slate border border-gray-200 p-3 sm:p-4 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm sm:text-base"
                            placeholder="+92 300 0000000"
                        />
                    </div>
                </div>

                <div className="mb-4 sm:mb-6">
                    <label className="block text-sm font-bold text-navy mb-2">Subject</label>
                    <select className="w-full bg-slate border border-gray-200 p-3 sm:p-4 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-gray-600 text-sm sm:text-base">
                        <option>General Inquiry</option>
                        <option>Sales & Orders</option>
                        <option>Investor Relations</option>
                        <option>Careers</option>
                    </select>
                </div>

                <div className="mb-6 sm:mb-8">
                    <label className="block text-sm font-bold text-navy mb-2">Message</label>
                    <textarea
                        rows={5}
                        className="w-full bg-slate border border-gray-200 p-3 sm:p-4 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-sm sm:text-base"
                        placeholder="How can we help you?"
                    />
                </div>

                <button className="w-full py-3 sm:py-4 bg-navy text-white font-bold tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300 rounded shadow-lg text-sm sm:text-base">
                    Send Message
                </button>
            </form>
        </div>
    );
}


"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactInfo() {
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
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    return (
        <div
            ref={container}
            className="lg:w-5/12 bg-navy text-white relative flex flex-col contact-left opacity-0 -translate-x-10"
        >
            {/* Contact Details */}
            <div className="p-8 sm:p-10 md:p-12 z-10">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8">Head Office</h2>

                <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                        <div className="w-10 h-10 rounded border border-gold flex items-center justify-center text-gold flex-shrink-0">
                            <i className="fas fa-map-marker-alt" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gold uppercase text-xs tracking-widest mb-1">
                                Address
                            </h4>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                131-A, Street P, Upper Mall Scheme,
                                <br />
                                Lahore, Pakistan.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-6">
                        <div className="w-10 h-10 rounded border border-gold flex items-center justify-center text-gold flex-shrink-0">
                            <i className="fas fa-phone-alt" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gold uppercase text-xs tracking-widest mb-1">Phone</h4>
                            <p className="text-gray-300 text-sm sm:text-base">+92 42 35777290 - 93</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-6">
                        <div className="w-10 h-10 rounded border border-gold flex items-center justify-center text-gold flex-shrink-0">
                            <i className="fas fa-envelope" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gold uppercase text-xs tracking-widest mb-1">Email</h4>
                            <p className="text-gray-300 text-sm sm:text-base">mis@zahidjee.com.pk</p>
                        </div>
                    </div>
                </div>

                {/* Socials */}
                <div className="mt-10 sm:mt-12">
                    <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Follow Us</h4>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Map Overlay */}
            <div className="flex-grow min-h-[200px] sm:min-h-[250px] relative bg-gray-800 border-t border-white/10">
                {/* Google Map Iframe (Lahore) */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.782069818816!2d74.3582473151034!3d31.53589898136353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e22709e995%3A0xc665796c56894c7b!2sUpper%20Mall%20Scheme%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1626000000000!5m2!1sen!2s"
                    className="absolute inset-0 w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    );
}


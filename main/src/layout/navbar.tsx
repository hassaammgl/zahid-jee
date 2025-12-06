"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="text-3xl text-gold font-serif font-bold transition-transform duration-300 group-hover:scale-110">
                        Z
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif font-bold text-xl text-white tracking-wide leading-none">
                            ZAHIDJEE
                        </span>
                        <span className="text-[8px] text-gold uppercase tracking-[0.2em] leading-none">
                            Textile Mills Ltd
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Home", href: "/" },
                        { name: "Divisions", href: "/divisions" },
                        { name: "Products", href: "/products" },
                        { name: "Investors", href: "/investors" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-white text-sm uppercase tracking-widest hover:text-gold transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-2 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button - Placeholder */}
                <button className="md:hidden text-white text-2xl">
                    <i className="fas fa-bars" />
                </button>
            </div>
        </nav>
    );
}

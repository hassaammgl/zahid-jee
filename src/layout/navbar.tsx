"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Divisions", href: "/divisions" },
        { name: "Products", href: "/products" },
        { name: "Governance", href: "/governance" },
        { name: "Investors", href: "/investors" },
        { name: "Media", href: "/media" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg py-3 md:py-4" : "bg-transparent py-4 md:py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                        <div className="text-2xl sm:text-3xl text-gold font-serif font-bold transition-transform duration-300 group-hover:scale-110">
                            Z
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide leading-none">
                                ZAHIDJEE
                            </span>
                            <span className="text-[7px] sm:text-[8px] text-gold uppercase tracking-[0.2em] leading-none">
                                Textile Mills Ltd
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navItems.map((item) => (
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white text-2xl z-50 relative"
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} transition-transform duration-300`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-navy/95 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-navy z-40 md:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full pt-24 px-6">
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col gap-1">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white text-base uppercase tracking-widest py-4 border-b border-white/10 hover:text-gold hover:pl-2 transition-all duration-300"
                                style={{
                                    animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none"
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Contact Button */}
                    <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-8 px-6 py-3 border-2 border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300 text-center"
                    >
                        Contact Us
                    </Link>

                    {/* Mobile Social Links */}
                    <div className="mt-auto pb-8">
                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Follow Us</p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-white"
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-white"
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-white"
                            >
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}

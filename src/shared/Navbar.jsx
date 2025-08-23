"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { AlignJustify } from "lucide-react"

export const navs = [
  { path: "/", name: "Home", _id: "home" },
  { path: "/divisions", name: "Divisions", _id: "divisions" },
  { path: "/products", name: "Products", _id: "products" },
  { path: "/governance", name: "Governance", _id: "governance" },
  { path: "/investor", name: "Investor", _id: "investor" },
  { path: "/media", name: "Media", _id: "media" },
  { path: "/contact", name: "Contact", _id: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const navItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    gsap.fromTo(navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(logoRef.current,
      { rotation: -180, opacity: 0 },
      { rotation: 0, opacity: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
    );

    gsap.fromTo(titleRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.7, ease: "power3.out" }
    );

    gsap.fromTo(navItemsRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.9,
        ease: "power2.out"
      }
    );
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        });

        gsap.fromTo(".mobile-nav-item",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItemHover = (index) => {
    gsap.to(navItemsRef.current[index], {
      y: -3,
      duration: 0.3,
      ease: "power1.out"
    });
  };

  const navItemHoverOut = (index) => {
    gsap.to(navItemsRef.current[index], {
      y: 0,
      duration: 0.3,
      ease: "power1.out"
    });
  };

  return (
      <header
        ref={navbarRef}
        className="nav w-screen flex flex-col fixed z-50 font-[Fjalla_One] pt-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              <div ref={logoRef}>
                <Image
                  src="/logo1.png"
                  alt="Logo"
                  className="inverted"
                  width={40}
                  height={40}
                />
              </div>
              <h1 ref={titleRef} className="font-extrabold text-2xl md:text-3xl lg:text-4xl title text-[#ffff00]">
                ZAHIDJEE TEXTILE MILLS
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex text-white font-light items-center gap-6 xl:gap-8">
              {navs.map((nav, index) => (
                <Link
                  key={nav._id}
                  ref={el => navItemsRef.current[index] = el}
                  className="hover:opacity-75 hover:text-[#ffff00] transition-colors duration-300 py-2"
                  href={nav.path}
                  onMouseEnter={() => navItemHover(index)}
                  onMouseLeave={() => navItemHoverOut(index)}
                >
                  {nav.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-yellow-400 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
            <AlignJustify className="text-yellow-400" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden h-0 overflow-hidden bg-black bg-opacity-90"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navs.map((nav) => (
              <Link
                key={nav._id}
                className="mobile-nav-item text-white hover:text-[#ffff00] transition-colors duration-300 py-2 border-b border-gray-700"
                href={nav.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

  );
};

export default Navbar;

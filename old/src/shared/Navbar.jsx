// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { gsap } from 'gsap';
// import { AlignJustify } from "lucide-react"

// export const navs = [
//   { path: "/", name: "Home", _id: "home" },
//   { path: "/divisions", name: "Divisions", _id: "divisions" },
//   { path: "/products", name: "Products", _id: "products" },
//   { path: "/governance", name: "Governance", _id: "governance" },
//   { path: "/investor", name: "Investor", _id: "investor" },
//   { path: "/media", name: "Media", _id: "media" },
//   { path: "/contact", name: "Contact", _id: "contact" },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navbarRef = useRef(null);
//   const logoRef = useRef(null);
//   const titleRef = useRef(null);
//   const navItemsRef = useRef([]);
//   const mobileMenuRef = useRef(null);

//   // GSAP Animations
//   useEffect(() => {
//     gsap.fromTo(navbarRef.current,
//       { y: -100, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
//     );

//     gsap.fromTo(logoRef.current,
//       { rotation: -180, opacity: 0 },
//       { rotation: 0, opacity: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
//     );

//     gsap.fromTo(titleRef.current,
//       { x: -50, opacity: 0 },
//       { x: 0, opacity: 1, duration: 1, delay: 0.7, ease: "power3.out" }
//     );

//     gsap.fromTo(navItemsRef.current,
//       { y: -20, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         stagger: 0.1,
//         delay: 0.9,
//         ease: "power2.out"
//       }
//     );
//   }, []);

//   // Mobile menu animation
//   useEffect(() => {
//     if (mobileMenuRef.current) {
//       if (isMenuOpen) {
//         gsap.to(mobileMenuRef.current, {
//           height: "auto",
//           opacity: 1,
//           duration: 0.5,
//           ease: "power2.out"
//         });

//         gsap.fromTo(".mobile-nav-item",
//           { x: -50, opacity: 0 },
//           { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 }
//         );
//       } else {
//         gsap.to(mobileMenuRef.current, {
//           height: 0,
//           opacity: 0,
//           duration: 0.3,
//           ease: "power2.in"
//         });
//       }
//     }
//   }, [isMenuOpen]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const navItemHover = (index) => {
//     gsap.to(navItemsRef.current[index], {
//       y: -3,
//       duration: 0.3,
//       ease: "power1.out"
//     });
//   };

//   const navItemHoverOut = (index) => {
//     gsap.to(navItemsRef.current[index], {
//       y: 0,
//       duration: 0.3,
//       ease: "power1.out"
//     });
//   };

//   return (
//     <header
//       ref={navbarRef}
//       className="nav w-screen flex flex-col fixed z-50 font-[Fjalla_One] pt-6"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <div className="flex justify-center items-center gap-4">
//             <div ref={logoRef}>
//               <Image
//                 src="/logo1.png"
//                 alt="Logo"
//                 className="inverted"
//                 width={40}
//                 height={40}
//               />
//             </div>
//             <h1 ref={titleRef} className="font-extrabold text-2xl md:text-3xl lg:text-4xl title text-[#ffff00]">
//               ZAHIDJEE TEXTILE MILLS
//             </h1>
//           </div>

//           <nav className="hidden lg:flex text-white font-light items-center gap-6 xl:gap-8">
//             {navs.map((nav, index) => (
//               <Link
//                 key={nav._id}
//                 ref={el => navItemsRef.current[index] = el}
//                 className="hover:opacity-75 hover:text-[#ffff00] transition-colors duration-300 py-2"
//                 href={nav.path}
//                 onMouseEnter={() => navItemHover(index)}
//                 onMouseLeave={() => navItemHoverOut(index)}
//               >
//                 {nav.name}
//               </Link>
//             ))}
//           </nav>

//           <button
//             className="lg:hidden text-yellow-400 focus:outline-none"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <AlignJustify className="text-yellow-400" />
//           </button>
//         </div>
//       </div>

//       <div
//         ref={mobileMenuRef}
//         className="lg:hidden h-0 overflow-hidden bg-black bg-opacity-90"
//       >
//         <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//           {navs.map((nav) => (
//             <Link
//               key={nav._id}
//               className="mobile-nav-item text-white hover:text-[#ffff00] transition-colors duration-300 py-2 border-b border-gray-700"
//               href={nav.path}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {nav.name}
//             </Link>
//           ))}
//         </nav>
//       </div>



//     </header>

//   );
// };

// export default Navbar;


//  <nav id="navbar" class="fixed w-full top-0 z-50 transition-all duration-300 bg-navy/90 backdrop-blur-md border-b border-white/10">
//     <div class="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
//       <Link href="/" class="flex items-center gap-3 group">
//         <div class="w-12 h-12 border border-gold flex items-center justify-center text-gold font-serif text-2xl font-bold group-hover:bg-gold group-hover:text-navy transition-all">Z</div>
//         <div class="leading-tight">
//           <span class="block font-serif font-bold text-xl text-white tracking-wide">ZAHIDJEE</span>
//           <span class="block text-[10px] text-gold uppercase tracking-[0.2em]">Textile Mills Ltd</span>
//         </div>
//       </Link>

//       <div class="hidden lg:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-300">
//         <a href="index.html" class="text-gold border-b border-gold pb-1">Home</a>
//         <a href="divisions.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Divisions</a>
//         <a href="products.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Products</a>
//         <a href="governance.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Governance</a>
//         <a href="investors.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Investors</a>
//         <a href="media.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Media</a>
//         <a href="contact.html" class="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-navy transition-all">Contact</a>
//       </div>

//       <button class="lg:hidden text-gold text-2xl"><i class="fas fa-bars"></i></button>
//     </div>
//   </nav>


// "use client"

// import React, { useState } from 'react';
// import Link from 'next/link';

// export const navs = [
//   { path: "/", name: "Home", _id: "home" },
//   { path: "/divisions", name: "Divisions", _id: "divisions" },
//   { path: "/products", name: "Products", _id: "products" },
//   { path: "/governance", name: "Governance", _id: "governance" },
//   { path: "/investor", name: "Investor", _id: "investor" },
//   { path: "/media", name: "Media", _id: "media" },
//   { path: "/contact", name: "Contact", _id: "contact" },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


//   return (
//     <header
//       className="navw-screen flex flex-col fixed z-50 font-[Fjalla_One] pt-6"
//     >

//       <nav id="navbar" class="fixed w-full top-0 z-50 transition-all duration-300 bg-navy/90 backdrop-blur-md border-b border-white/10">
//         <div class="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
//           <Link href="/" class="flex items-center gap-3 group">
//             <div class="w-12 h-12 border border-gold flex items-center justify-center text-gold font-serif text-2xl font-bold group-hover:bg-gold group-hover:text-navy transition-all">Z</div>
//             <div class="leading-tight">
//               <span class="block font-serif font-bold text-xl text-white tracking-wide">ZAHIDJEE</span>
//               <span class="block text-[10px] text-gold uppercase tracking-[0.2em]">Textile Mills Ltd</span>
//             </div>
//           </Link>

//           <div class="hidden lg:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-300">
//             <a href="index.html" class="text-gold border-b border-gold pb-1">Home</a>
//             <a href="divisions.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Divisions</a>
//             <a href="products.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Products</a>
//             <a href="governance.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Governance</a>
//             <a href="investors.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Investors</a>
//             <a href="media.html" class="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold">Media</a>
//             <a href="contact.html" class="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-navy transition-all">Contact</a>
//           </div>

//           <button class="lg:hidden text-gold text-2xl"><i class="fas fa-bars"></i></button>
//         </div>
//       </nav>

//     </header>

//   );
// };

// export default Navbar;


"use client";

import React, { useState } from "react";
import Link from "next/link";

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-screen flex flex-col fixed z-50 font-[Fjalla_One] pt-6">
      <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-navy/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 border border-gold flex items-center justify-center text-gold font-serif text-2xl font-bold group-hover:bg-gold group-hover:text-navy transition-all">
              Z
            </div>
            <div className="leading-tight">
              <span className="block font-serif font-bold text-xl text-white tracking-wide">ZAHIDJEE</span>
              <span className="block text-[10px] text-gold uppercase tracking-[0.2em]">Textile Mills Ltd</span>
            </div>
          </Link>

          <div className="hidden lg:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-300">
            {navs.map((nav) => (
              <Link
                key={nav._id}
                href={nav.path}
                className="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gold text-2xl"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed top-24 left-0 w-full bg-navy/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 uppercase tracking-widest text-gray-300">
          {navs.map((nav) => (
            <Link
              key={nav._id}
              href={nav.path}
              className="hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

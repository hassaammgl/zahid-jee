"use client"

import React, { useEffect, useRef } from 'react';
import { Facebook, Twitter, Mail, ArrowRight, X } from 'lucide-react';
import { navs as menuItems } from './Navbar';
import Link from 'next/link';

const Footer = () => {
  const footerRef = useRef(null);
  const menuItemsRef = useRef([]);
  const articlesRef = useRef([]);

  useEffect(() => {
    // Simple fade-in animation without external GSAP
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    // Animate menu items
    menuItemsRef.current.forEach((item, index) => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
      }
    });

    // Animate articles
    articlesRef.current.forEach((article, index) => {
      if (article) {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        article.style.transition = `opacity 0.6s ease ${(index + 4) * 0.1}s, transform 0.6s ease ${(index + 4) * 0.1}s`;
        observer.observe(article);
      }
    });

    return () => observer.disconnect();
  }, []);


  const articles = [
    {
      title: 'How to test your minimum viable product',
      author: 'ROY POOLE'
    },
    {
      title: 'Outsourcing software development versus doing development projects in-house',
      author: 'POLLY SCOTT'
    }
  ];

  return (
    <footer ref={footerRef} className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden font-[Fjalla_One]">
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-2xl font-bold tracking-wide">ZAHIDJEE Textiles</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Menu Section */}
          <div>
            <h2 className="text-sm font-semibold text-gray-400 mb-8 tracking-wider">MENU</h2>
            <nav className="space-y-6">
              {menuItems.map((item, index) => (
                <div
                  key={item._id}
                  ref={(el) => menuItemsRef.current[index] = el}
                  className="group"
                >
                  <Link
                    href={item.path}
                    className="text-3xl uppercase lg:text-4xl hover:bg-white p-4 font-light tracking-wide hover:text-gray-900 transition-all duration-500 block relative overflow-hidden"
                  >
                    <span className="block transform group-hover:translate-x-2 transition-transform duration-500">
                      {item.name}
                    </span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></div>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Empty middle column for spacing */}
          <div className="hidden lg:block"></div>

          {/* Latest Articles Section */}
          <div>
            <h2 className="text-sm font-semibold text-gray-400 mb-8 tracking-wider">LATEST ARTICLES</h2>
            <div className="space-y-8">
              {articles.map((article, index) => (
                <article
                  key={index}
                  ref={(el) => articlesRef.current[index] = el}
                  className="group cursor-pointer"
                >
                  <h3 className="text-lg font-medium leading-relaxed mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium tracking-wider">
                    {article.author}
                  </p>
                </article>
              ))}
              
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium hover:text-gray-300 transition-colors duration-300 group"
                >
                  More Articles
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Address */}
            <div className="text-sm text-gray-400">
              <p>131-A, Street P, Upper Mall Scheme, Lahore.</p>
              <p>Pakistan</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "../../public/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    "Graphic Designing",
    "Motion Ads",
    "Video Editing",
    "3D Architecture",
    "CGI",
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%]
      rounded-2xl border border-border/40 backdrop-blur-xl
      transition-all duration-500 ease-in-out
      ${isScrolled ? "bg-white/70 shadow-lg" : "bg-white/30 shadow-sm"}`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo - Moved to beginning */}
        <div className="relative w-32 h-10">
          <Image
            src={Logo}
            alt="Logo"
            fill
            className="object-contain cursor-pointer"
            sizes="160px"
            priority
          />
        </div>

        {/* Center Nav - Now appears after logo */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          {["Who We Are", "Portfolio"].map((item, i) => (
            <button
              key={i}
              className="relative hover:text-black transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              {item}
            </button>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="relative hover:text-black transition-colors flex items-center space-x-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-black after:transition-all hover:after:w-full">
              <span>Services</span>
              <svg
                className={`w-3 h-3 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[650px] p-6 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg grid grid-cols-2 gap-3 transition-all duration-300 origin-top ${
                isServicesOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 pointer-events-none -translate-y-2"
              }`}
            >
              {services.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-sm text-gray-600 hover:text-black hover:translate-x-1 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Right Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <button className="relative hover:text-black transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-black after:transition-all hover:after:w-full">
            Contact
          </button>
          <Button className="bg-black text-white hover:bg-black/90 rounded-full px-5 py-2 text-sm shadow-md">
            Get Started
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all"
        >
          <svg
            className="w-5 h-5 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 rounded-b-2xl overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center text-gray-700 py-6 space-y-4 text-sm font-medium">
          {["Who We Are", "Services", "Portfolio", "Contact"].map((item, i) => (
            <button key={i} className="hover:text-black transition-colors">
              {item}
            </button>
          ))}
          <Button className="bg-black text-white rounded-full w-40 py-2 hover:bg-black/90 transition-all">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

'use client'
import Image from "next/image";
import { useState } from "react";

const Navbar = ({ home = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <nav className={`font-roboto-slab w-full  z-50  overflow-hidden ${home ? 'fixed top-0 left-0' : 'absolute top-0 left-0'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6  ${home ? 'lg:px-8 pt-4 sm:pt-8 md:pt-12 lg:pt-20' : ' p-12 '}`}>
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="https://251communications.com/static/media/logo_main.420bd90e4dc7379eda74.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-12 sm:h-16 md:h-20 w-auto hover:rotate-[720deg] transition-transform duration-1000"
              />
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-yellow-400 hover:text-yellow-600 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <div
                  className={`w-6 h-0.5 bg-yellow-400 mb-1.5 transition-all duration-300 ${
                    isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-yellow-400 mb-1.5 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                  }`}
                ></div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 font-bold  p-4 lg:p-8 rounded-lg">
              <a
                href="/"
                className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base"
              >
                Services
              </a>
              <a
                href="/ourwork"
                className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base"
              >
                Our Work
              </a>
              <a
                href="/events"
                className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base"
              >
                Events
              </a>
              <a
                href="/career"
                className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base"
              >
                Career
              </a>
            </div>

            {/* Contact Us Button */}
            <div className="hidden md:block">
              <a   href="/contact" className="bg-yellow-400 text-black px-4 lg:px-6 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 rounded-lg mt-2">
              <a
                href="#"
                className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base"
              >
                Product
              </a>
              <a
                href="#"
                className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base"
              >
                Our Work
              </a>
              <a
                href="#"
                className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base"
              >
                Pages
              </a>
              <a
                href="#"
                className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base"
              >
                Career
              </a>
              <button className="w-full bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors mt-2 text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;

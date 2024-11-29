'use client'
import React from 'react';
import useInView from '../hooks/useInView';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    const [heroRef, isHeroInView] = useInView({ threshold: 0.1 });

    return (
        <footer ref={heroRef} className={`bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20 ${isHeroInView ? 'animate-fadeIn' : ''}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="relative w-48 h-20">
                            <Image
                                src="https://251communications.com/static/media/logo_main.420bd90e4dc7379eda74.png"
                                alt="251 Communications"
                                layout="fill"
                                objectFit="contain"
                                className="hover:rotate-[360deg] transition-transform duration-[1500ms]"
                            />
                        </div>
                        <div className="text-gray-600 space-y-3">
                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Aster Plaza, 3rd Floor, Meskel Flower, Bole
                            </p>
                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +251 116 630 182
                            </p>
                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Info@251communications.com
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-400 after:mt-2">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Our Work', 'News', 'Career'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} 
                                          className="text-gray-600 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                                        <span className="text-yellow-400">›</span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-400 after:mt-2">Our Services</h3>
                        <ul className="space-y-4">
                            {['Experiential', 'Creative', 'Digital', 'PR', 'Production', 'Research', 'VAS'].map((item) => (
                                <li key={item}>
                                    <Link href={`/services/${item.toLowerCase()}`} 
                                          className="text-gray-600 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                                        <span className="text-yellow-400">›</span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-400 after:mt-2">Connect With Us</h3>
                        <Link href="/contact" 
                              className="bg-yellow-400 text-black px-8 py-3 rounded-full inline-block hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Contact Us
                        </Link>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: <FaFacebookF />, href: "#" },
                                { icon: <FaTwitter />, href: "#" },
                                { icon: <FaLinkedinIn />, href: "#" },
                                { icon: <FaInstagram />, href: "#" },
                                { icon: <FaTiktok />, href: "#" }
                            ].map((social, index) => (
                                <Link key={index} href={social.href} 
                                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

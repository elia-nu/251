// components/Hero.js
'use client'
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
// ... existing imports ...
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from 'clsx';
import Marquee from 'react-fast-marquee';

const VISION_SLIDES = [
    {
        image: "https://251communications.com/static/media/Vision.b09b7de0f445e5ba875a.png",
        alt: "Vision Slide",
        text: "Our Vision is to transform the way businesses communicate and connect with their audiences worldwide"
    },
    {
        image: "https://251communications.com/static/media/Mission.e47b17e2faf74a4130fe.png",
        alt: "Mission Slide",
        text: "Our Mission is to deliver innovative communication solutions that drive meaningful engagement and lasting impact"
    },
    {
        image: "https://251communications.com/static/media/Values.fd6eaf44443d3191aceb.png",
        alt: "Values Slide",
        text: "Our Values guide us in creating authentic connections and delivering excellence in everything we do"
    }
];

const TEAM_MEMBERS = [
    {
        name: "John Doe",
        role: "CEO & Founder",
        description: "Visionary leader with 15+ years of experience in communications",
        image: "https://251communications.com/static/media/Addis.689f494e39ea8d965605.jpg"
    },
    {
        name: "Jane Smith",
        role: "Creative Director",
        description: "Award-winning creative professional specializing in brand strategy",
        image: "https://251communications.com/static/media/fantish.6f68c0739191162253b6.png"
    },
    {
        name: "Mike Johnson",
        role: "Technical Lead",
        description: "Technology expert with a passion for innovative solutions",
        image: "https://251communications.com/static/media/Naod.31983ab1df093f8a9697.png"
    },
    {
        name: "Sarah Wilson",
        role: "Marketing Manager",
        description: "Digital marketing strategist with a focus on growth and engagement",
        image: "https://251communications.com/static/media/Bamlak.073590f3fa3e71194257.png"
    },
    {
        name: "David Chen",
        role: "Design Lead",
        description: "Innovative designer with expertise in user experience and branding",
        image: "https://251communications.com/static/media/Michael.da7e4b1a32486aee015b.png"
    },
    {
        name: "Emma Taylor",
        role: "Communications Director",
        description: "Strategic communicator specializing in public relations and media",
        image: "https://251communications.com/static/media/Biniam.4e763932f8f8e2251734.png"
    }
];

const PARTNERS = [
    {
        name: "MTN",
        logo: "https://251communications.com/static/media/Clients%20logo%201-29.22cdf37164d1601cef3a.png",
    },
    {
        name: "Coca Cola",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/1200px-Coca-Cola_bottle_cap.svg.png",
    },
    {
        name: "USAID",
        logo: "https://251communications.com/static/media/Clients%20logo%201-03.a17d6c9617475f1591df.png",
    },
    {
        name: "Western Union",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Western_Union_Logo_2019.svg/2560px-Western_Union_Logo_2019.svg.png",
    },
    {
        name: "VISA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
    },
    {
        name: "UNDP",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/UNDP_logo.svg/2560px-UNDP_logo.svg.png",
    },
    {
        name: "DHL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/2560px-DHL_Logo.svg.png",
    },
    {
        name: "UNICEF",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/UNICEF_Logo.svg/2560px-UNICEF_Logo.svg.png",
    },
    {
        name: "Nokia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nokia_wordmark.svg/2560px-Nokia_wordmark.svg.png",
    },
    {
        name: "Nestle",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nestl%C3%A9_logo.svg/2560px-Nestl%C3%A9_logo.svg.png",
    },
    {
        name: "HP",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png",
    },
    {
        name: "Huawei",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei_Logo.svg/2560px-Huawei_Logo.svg.png",
    },
    {
        name: "Emirates",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png",
    },
    {
        name: "MTN",
        logo: "https://251communications.com/static/media/Clients%20logo%201-29.22cdf37164d1601cef3a.png",
    },
    {
        name: "Coca Cola",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/1200px-Coca-Cola_bottle_cap.svg.png",
    },
    {
        name: "USAID",
        logo: "https://251communications.com/static/media/Clients%20logo%201-03.a17d6c9617475f1591df.png",
    },
    {
        name: "Western Union",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Western_Union_Logo_2019.svg/2560px-Western_Union_Logo_2019.svg.png",
    },
    {
        name: "VISA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
    },
    {
        name: "UNDP",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/UNDP_logo.svg/2560px-UNDP_logo.svg.png",
    },
    {
        name: "DHL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/2560px-DHL_Logo.svg.png",
    },
    {
        name: "UNICEF",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/UNICEF_Logo.svg/2560px-UNICEF_Logo.svg.png",
    },
    {
        name: "Nokia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nokia_wordmark.svg/2560px-Nokia_wordmark.svg.png",
    },
    {
        name: "Nestle",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nestl%C3%A9_logo.svg/2560px-Nestl%C3%A9_logo.svg.png",
    },
    {
        name: "HP",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png",
    },
    {
        name: "Huawei",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei_Logo.svg/2560px-Huawei_Logo.svg.png",
    },
    {
        name: "Emirates",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png",
    },
    {
        name: "MTN",
        logo: "https://251communications.com/static/media/Clients%20logo%201-29.22cdf37164d1601cef3a.png",
    },

    {
        name: "Safaricom",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Safaricom_logo.svg/1200px-Safaricom_logo.svg.png",
    }
];

// Split partners into two groups for different directions
const PARTNERS_GROUP1 = PARTNERS.slice(0, Math.ceil(PARTNERS.length / 2));
const PARTNERS_GROUP2 = PARTNERS.slice(Math.ceil(PARTNERS.length / 2));

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-black/0 z-50 backdrop-blur-sm overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 md:pt-12 lg:pt-20">
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
                                <div className={`w-6 h-0.5 bg-yellow-400 mb-1.5 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-yellow-400 mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
                            </button>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 font-bold  p-4 lg:p-8 rounded-lg">
                            <a href="#" className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base">Home</a>
                            <a href="#" className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base">Product</a>
                            <a href="#" className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base">Our Work</a>
                            <a href="#" className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base">Pages</a>
                            <a href="#" className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 hover:scale-110 text-sm lg:text-base">Career</a>
                        </div>

                        {/* Contact Us Button */}
                        <div className="hidden md:block">
                            <button className="bg-yellow-400 text-black px-4 lg:px-6 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 rounded-lg mt-2">
                            <a href="#" className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base">Home</a>
                            <a href="#" className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base">Product</a>
                            <a href="#" className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base">Our Work</a>
                            <a href="#" className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base">Pages</a>
                            <a href="#" className="block text-yellow-400 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-base">Career</a>
                            <button className="w-full bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors mt-2 text-base">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="relative min-h-[60vh] md:min-h-screen text-white bg-white max-w-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain md:object-cover"
                    
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
      
            </div>  



              <div className=" h-[100vh] text-white bg-black max-w-screen overflow-hidden flex flex-col justify-center shadow-2xl">
                <Slider 
                    {...carouselSettings} 
                    className={clsx(
                        "h-full pt-12 flex flex-col justify-center items-center  w-full  h-[50vh]",
                        "[&_.slick-dots]:bottom-[35px]",
                        "[&_.slick-dots_li_button::before]:text-white",
                        "[&_.slick-dots_li.slick-active_button::before]:text-yellow-400",
                        "[&_.slick-dots_li_button::before]:text-xs", 
                        "[&_.slick-dots_li_button::before]:opacity-20",
                        "[&_.slick-dots_li.slick-active_button::before]:opacity-100",
                        "[&_.slick-prev]:left-[16px] [&_.slick-next]:right-[36px]",
                        "[&_.slick-prev],[&_.slick-next]:w-12 [&_.slick-prev],[&_.slick-next]:h-12",
                        "[&_.slick-prev],[&_.slick-next]:absolute [&_.slick-prev],[&_.slick-next]:top-1/2",
                        "[&_.slick-prev],[&_.slick-next]:-translate-y-1/2",
                        "[&_.slick-prev],[&_.slick-next]:cursor-pointer [&_.slick-prev],[&_.slick-next]:border-0",
                        "[&_.slick-prev],[&_.slick-next]:outline-none",
                        "[&_.slick-prev],[&_.slick-next]:bg-yellow-400/90 [&_.slick-prev],[&_.slick-next]:hover:bg-yellow-400",
                        "[&_.slick-prev],[&_.slick-next]:rounded-full [&_.slick-prev],[&_.slick-next]:-z-10",
                        "[&_.slick-prev],[&_.slick-next]:rounded-full [&_.slick-next],[&_.slick-prev]:-z-100",
                        "[&_.slick-prev],[&_.slick-next]:transition-all [&_.slick-prev],[&_.slick-next]:duration-300",
                        "[&_.slick-prev],[&_.slick-next]:shadow-lg",
                        "[&_.slick-slide]:px-4"
                    )}
                >
                    {VISION_SLIDES.map((slide, index) => (
                        <div key={index} className="min-h-[35vh}  flex flex-col justify-center items-center text-center w-full px-6">
                            <div className="relative bg-black/10 md:w-full z-0 rounded-2xl p-8 backdrop-blur-sm shadow-xl transform hover:scale-102 transition-all duration-500">
                                <img 
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="object-contain w-screen h-auto transform hover:scale-105 transition-transform duration-500 filter drop-shadow-lg"
                                />
                                <div className="mt-10">
                                    <h3 className="text-md md:text-lg font-medium text-center max-w-xl mx-auto leading-relaxed text-yellow-600 drop-shadow-lg">
                                        {slide.text}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>




<div className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
        {/* Section Header with animated underline */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400 relative inline-block">
                Our Team
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
                Meet the passionate professionals behind our success
            </p>
        </div>

        {/* Team Grid with enhanced styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
                <div 
                    key={index} 
                    className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm rounded-xl p-6 
                             transform hover:scale-105 transition-all duration-500 
                             border border-yellow-400/20 relative group
                             hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-400/30 rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-400/30 rounded-br-xl"></div>
                    
                    {/* Image container with glow effect */}
                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <img
                            src={member.image}
                            alt={`${member.name} - ${member.role}`}
                            className="w-48 h-full  mx-auto object-cover 
                                     ring-2 ring-yellow-400/30 ring-offset-2 ring-offset-black/50"
                        />
                    </div>

                    {/* Text content */}
                    <h3 className="text-xl font-semibold text-yellow-400 text-center mb-2 
                                 group-hover:text-yellow-300 transition-colors duration-300">
                        {member.name}
                    </h3>
                    <p className="text-gray-400 text-center mb-4 font-medium">
                        {member.role}
                    </p>
                    
                    {/* Hover overlay with animated entrance */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/95 to-black/90 
                                  rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 
                                  flex items-center justify-center p-6 scale-95 group-hover:scale-100">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-gray-300 text-center text-sm leading-relaxed">
                                {member.description}
                            </p>
                            {/* Social links */}
                            <div className="flex justify-center space-x-4 mt-4">
                                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>








<div className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
    <div className="mx-auto">
        {/* Section Header */}
        <div className="text-start mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
                WHY WE ARE...
            </h2>
        </div>

        {/* Partners Marquee */}
        <div className="space-y-8 overflow-hidden">
            <Marquee
                gradient={false}
                speed={50}
                direction="left"
                className="py-4"
            >
                {PARTNERS_GROUP1.map((partner, index) => (
                    <div key={index} className="mx-8 flex items-center justify-center group">
                        <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="max-h-12 w-auto sepia hover:sepia-0 transition-all duration-300 transform hover:scale-110"
                        />
                    </div>
                ))}
            </Marquee>

            <Marquee
                gradient={false}
                speed={50}
                direction="right"
                className="py-4"
            >
                {PARTNERS_GROUP2.map((partner, index) => (
                    <div key={index} className="mx-8 flex items-center justify-center group">
                        <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="max-h-12 w-auto sepia hover:sepia-0 transition-all duration-300 transform hover:scale-110"
                        />
                    </div>
                ))}
            </Marquee>
        </div>

        {/* "ALIVE" text at bottom right */}
        <div className="text-right mt-16">
            <h3 className="text-6xl md:text-8xl font-bold text-yellow-400/20 drop-shadow-lg flex items-center justify-end ">
                ALIVE
                <svg className="w-16 h-16 ml-4 text-yellow-400/90 animate-[heartbeat_1s_ease-in-out_infinite]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.248C8.852-1.154 0 .423 0 7.192 0 11.853 5.571 16.619 12 23c6.43-6.381 12-11.147 12-15.808C24 .4 15.125-1.114 12 4.248z"/>
                </svg>
                <style jsx>{`
                    @keyframes heartbeat {
                        0% { transform: scale(1); }
                        25% { transform: scale(1.1); }
                        50% { transform: scale(1); }
                        75% { transform: scale(1.1); }
                        100% { transform: scale(1); }
                    }
                `}</style>
            </h3>
        </div>
    </div>
</div>








<div>
    
</div>
























            <div className="relative z-20 px-4 flex items-center bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: 'url(/hero-bg.png)'
            }}>
                <img 
                    src="https://251communications.com/static/media/Home_page_About.f15378a1640bac61b282.png" 
                    alt="hero-bg" 
                    className="absolute top-0 left-0 w-screen h-auto object-contain backdrop-blur-2xl transform hover:scale-105 transition-transform duration-300" 
                />
            </div>


        </>
    );
};

export default Hero;
// components/Hero.js
'use client'
import Image from "next/image";
import { useState, useEffect } from 'react';

const Work = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const companies = [
        {
            name: "Coca-Cola",
            description: "Africas largest cocal-coal bottling partner.",
            logo: "https://251communications.com/static/media/Clients%20logo%201-02.899250e87349e8679007.png",
            detailImage: "https://251communications.com/static/media/CocaCola%20251WebPage.f4566397da5bb263eb17.jpg"
        },
        {
            name: "VISA",
            description: "Trusted global network and leader in digital payments.",
            logo: "/images/visa.png", 
            detailImage: "/images/visa-detail.png"
        },
        {
            name: "Master Card",
            description: "Master Card Powers an inclusive digital economy by making transaction safe, simple and accessible for all.",
            logo: "data:image/png;base64,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",
            detailImage: "/images/mastercard-detail.png"
        },
        {
            name: "Emirates",
            description: "Known for innovation and luxury, it operates a modern fleet, including the Airbus A380 and Boeing 777.",
            logo: "/images/emirates.png",
            detailImage: "/images/emirates-detail.png"
        },
        {
            name: "Huawei",
            description: "Huawei is a global leader in ICT and smart device",
            logo: "/images/huawei.png",
            detailImage: "/images/huawei-detail.png"
        },
        {
            name: "Holland Dairy",
            description: "Holland Dairy is a top provider of premium dairy products in ethiopia.",
            logo: "/images/holland-dairy.png",
            detailImage: "/images/holland-dairy-detail.png"
        },
        {
            name: "Raxio",
            description: "Africa's Leading Carrier Neutral Data Center",
            logo: "/images/raxio.png",
            detailImage: "/images/raxio-detail.png"
        },
        {
            name: "Dashen",
            description: "Dashen Bank was established as per the intent of the new policy and the ethiopian investment code.",
            logo: "/images/dashen.png",
            detailImage: "/images/dashen-detail.png"
        }
    ];

    return (
        <>
        <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
            <nav className="fixed w-full bg-black/10 z-50 backdrop-blur-md shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo with enhanced animation */}
                        <div className="flex-shrink-0 group">
                            <Image
                                src="https://251communications.com/static/media/logo_main.420bd90e4dc7379eda74.png"
                                alt="Logo"
                                width={isMobile ? 80 : 100}
                                height={isMobile ? 80 : 100}
                                className="h-12 sm:h-16 md:h-20 w-auto transform transition-all duration-700 
                                         hover:rotate-[720deg] hover:scale-110 group-hover:brightness-125"
                                priority
                            />
                        </div>

                        {/* Enhanced Hamburger Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-yellow-400 hover:text-yellow-600 focus:outline-none p-2 
                                         transition-all duration-300 transform hover:scale-110"
                                aria-label="Toggle menu"
                            >
                                <div className={`w-6 h-0.5 bg-yellow-400 mb-1.5 transition-all duration-300 
                                              ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-yellow-400 mb-1.5 transition-opacity duration-300 
                                              ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-yellow-400 transition-all duration-300 
                                              ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
                            </button>
                        </div>

                        {/* Enhanced Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 font-bold p-4 lg:p-8">
                            {['Home', 'Product', 'Our Work', 'Pages', 'Career'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-yellow-400 hover:text-yellow-600 transition-all duration-300 
                                             transform hover:scale-110 relative group text-sm lg:text-base"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 
                                                   transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* Enhanced Contact Us Button */}
                        <div className="hidden md:block">
                            <button className="bg-yellow-400 text-black px-6 lg:px-8 py-2.5 rounded-full 
                                           hover:bg-yellow-600 transition-all duration-300 transform 
                                           hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/50 
                                           text-sm lg:text-base font-bold">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Enhanced Mobile Menu */}
                    <div className={`md:hidden transition-all duration-500 ease-in-out 
                                   ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-2 bg-black/90 backdrop-blur-md rounded-xl mt-2 
                                      border border-yellow-400/20">
                            {['Home', 'Product', 'Our Work', 'Pages', 'Career'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="block text-yellow-400 hover:bg-yellow-600/20 hover:text-yellow-300 
                                             px-4 py-2.5 rounded-lg text-base transition-all duration-300 
                                             transform hover:translate-x-2"
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="w-full bg-yellow-400 text-black px-6 py-2.5 rounded-lg 
                                           hover:bg-yellow-600 transition-all duration-300 transform 
                                           hover:translate-x-2 mt-4 font-bold text-base">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 pt-32 pb-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text 
                                 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 
                                 animate-gradient">
                        Our Clients
                    </h1>
                    <p className="text-gray-300 text-xl md:text-2xl font-light">
                        Trusted by leading brands worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 
                                     shadow-xl hover:shadow-2xl transition-all duration-500 
                                     transform hover:-translate-y-2 border border-gray-700/50 
                                     hover:border-yellow-400/50 flex flex-col items-center"
                        >
                            <div className="w-36 sm:w-44 h-20 sm:h-24 relative mb-8 
                                          bg-white/5 rounded-xl p-4 backdrop-blur-sm 
                                          group-hover:bg-white/10 transition-all duration-300">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    className="object-contain p-2 transition-all duration-300 
                                             group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center 
                                         text-transparent bg-clip-text bg-gradient-to-r 
                                         from-yellow-400 to-yellow-600">
                                {company.name}
                            </h3>
                            <p className="text-gray-300 text-center text-base md:text-lg mb-8 
                                        line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                {company.description}
                            </p>
                            <button
                                onClick={() => setSelectedCompany(company)}
                                className="mt-auto bg-yellow-400 text-black px-8 py-3 rounded-full 
                                         hover:bg-yellow-600 transition-all duration-300 
                                         transform hover:scale-110 font-bold text-lg 
                                         shadow-lg hover:shadow-yellow-400/50 
                                         focus:ring-4 focus:ring-yellow-600/50"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            {/* Enhanced Modal */}
            {selectedCompany && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center 
                               justify-center z-50 p-6 transition-all duration-300">
                    <div className="bg-gray-800/50 rounded-3xl w-full max-w-5xl relative p-6 
                                  border border-yellow-400/30 shadow-2xl transform 
                                  transition-all duration-500 scale-100">
                        <div
                            className={`relative w-full aspect-[16/9] transition-all duration-500 
                                      cursor-zoom-in rounded-2xl overflow-hidden 
                                      ${isZoomed ? 'scale-150 mt-32 md:mt-48' : ''}`}
                            onClick={() => setIsZoomed(!isZoomed)}
                        >
                            <Image
                                src={selectedCompany.detailImage}
                                alt={`${selectedCompany.name} Detail`}
                                fill
                                className="object-cover rounded-2xl transform transition-all 
                                         duration-500 hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                            />
                        </div>

                        <button
                            onClick={() => {
                                setSelectedCompany(null);
                                setIsZoomed(false);
                            }}
                            className="absolute -top-5 -right-5 bg-yellow-400 text-black w-12 h-12 
                                     rounded-full hover:bg-yellow-600 transition-all duration-300 
                                     flex items-center justify-center font-bold text-xl 
                                     shadow-xl hover:shadow-yellow-400/50 transform hover:scale-110 
                                     focus:outline-none focus:ring-4 focus:ring-yellow-600/50"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default Work;

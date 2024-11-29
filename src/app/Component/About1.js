// components/Hero.js
'use client'
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "./Navbar";

const Work = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
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
            description: "Africa's largest Coca-Cola bottling partner.",
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
            description: "Master Card Powers an inclusive digital economy by making transactions safe, simple and accessible for all.",
            logo: "https://251communications.com/static/media/CocaCola%20251WebPage.f4566397da5bb263eb17.jpg",
            detailImage: "/images/mastercard-detail.png"
        },
        {
            name: "Emirates",
            description: "Known for innovation and luxury, it operates a modern fleet, including the Airbus A380 and Boeing 777.",
            logo: "https://251communications.com/static/media/Clients%20logo%201-13.bf28c15c4c405cf4eaaa.png",
            detailImage: "/images/emirates-detail.png"
        },
        {
            name: "Huawei",
            description: "Huawei is a global leader in ICT and smart devices",
            logo: "/images/huawei.png",
            detailImage: "/images/huawei-detail.png"
        },
        {
            name: "Holland Dairy",
            description: "Holland Dairy is a top provider of premium dairy products in Ethiopia.",
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
            description: "Dashen Bank was established as per the intent of the new policy and the Ethiopian investment code.",
            logo: "/images/dashen.png",
            detailImage: "/images/dashen-detail.png"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black pb-40"
        >
            {/* Golden SVG Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFD700" strokeWidth="0.5"/>
                        </pattern>
                        <linearGradient id="golden" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: '#DAA520', stopOpacity: 0.3 }} />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <rect width="100%" height="100%" fill="url(#golden)" />
                </svg>
            </div>

         

            <motion.main 
                className="container mx-auto px-4 pt-32 pb-16 relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className="text-center mb-20"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text 
                                 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-8 
                                 animate-gradient tracking-tight font-roboto-slab">
                        Our Clients
                    </h1>
                    <p className="text-gray-300 text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Trusted by leading brands worldwide to deliver exceptional results
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            className="group bg-white backdrop-blur-md rounded-3xl p-8 
                                     shadow-2xl hover:shadow-3xl transition-all duration-500 
                                     border border-gray-700/50 
                                     hover:border-yellow-400/50 flex flex-col items-center
                        "
                        >
                            <div className="w-40 sm:w-48 h-24 sm:h-28 relative mb-8 
                                          bg-white/20 rounded-2xl p-4 backdrop-blur-md 
                                          group-hover:transition-all duration-300
                                          ">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    className="object-contain p-3 transition-all duration-500 
                                             group-hover:scale-115 filter brightness-110"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center 
                                         text-transparent bg-clip-text bg-gradient-to-r 
                                         from-yellow-300 to-yellow-500 tracking-wide">
                                {company.name}
                            </h3>
                            <p className="text-gray-700 text-center text-semibold md:text-lg mb-8 
                                        line-clamp-3 group-hover:line-clamp-none transition-all 
                                        duration-300 leading-relaxed">
                                {company.description}
                            </p>
                            <motion.button
                                onClick={() => setSelectedCompany(company)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-auto bg-gradient-to-r from-yellow-400 to-yellow-500 
                                         text-black px-10 py-3.5 rounded-full 
                                         hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 
                                         font-bold text-lg shadow-xl hover:shadow-yellow-400/50 
                                         focus:ring-4 focus:ring-yellow-500/50"
                            >
                                View Details
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.main>

            <AnimatePresence>
                {selectedCompany && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center 
                                 justify-center z-50 p-8"
                    >
                        <motion.div 
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-gray-800/70 rounded-3xl w-full max-w-6xl h-[90vh] relative p-8 
                                     border border-yellow-400/40 shadow-2xl
                                     backdrop-blur-lg"
                        >
                            <motion.div
                                className="relative w-full h-full rounded-2xl overflow-hidden 
                                          shadow-2xl border border-gray-700/50"
                                whileHover={{ scale: 1 }}
                            >
                                <Image
                                    src={selectedCompany.detailImage}
                                    alt={`${selectedCompany.name} Detail`}
                                    fill
                                    className="object-contain rounded-2xl transform transition-all 
                                             duration-700  filter brightness-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                                />
                            </motion.div>

                            <motion.button
                                onClick={() => setSelectedCompany(null)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 
                                         text-black w-14 h-14 rounded-full hover:from-yellow-500 hover:to-yellow-600 
                                         transition-all duration-300 flex items-center justify-center font-bold text-2xl 
                                         shadow-2xl hover:shadow-yellow-400/50
                                         focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
                            >
                                ×
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
        </>
    );
};

export default Work;

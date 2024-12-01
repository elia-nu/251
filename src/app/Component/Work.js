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
          <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-400/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            borderRadius: '50%',
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
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
                            className="group bg-black/40 backdrop-blur-md rounded-3xl p-8 
                                     shadow-2xl hover:shadow-3xl transition-all duration-500 
                                     border border-gray-700/50 
                                     hover:border-yellow-400/50 flex flex-col items-center relative
                        "
                        >
                            <div className="absolute top-0 left-0 w-28 h-28  border-t border-l rounded-tl-3xl border-yellow-400/50 from-black/0 to-black/80"></div>
                            
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
                            <p className="text-gray-100 text-center text-semibold md:text-md mb-8 
                                        line-clamp-3 group-hover:line-clamp-none transition-all 
                                        duration-300 leading-relaxed">
                                {company.description}
                            </p>
                            <motion.button
                                onClick={() => setSelectedCompany(company)}
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "rgba(255,255,255,0.1)" 
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-auto flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 
                                         text-white px-5 py-3.5 rounded-full 
                                         hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 pr-7 
                                         font-bold text-lg shadow-xl hover:shadow-yellow-400/50 
                                         focus:ring-4 focus:ring-yellow-500/50 group"
                            >
                                <span className="opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
                                    View Project
                                </span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                    />
                                </svg>
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
        logo: "data:image/png;base64,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",
        detailImage: "/images/visa-detail.png"
    },
    {
        name: "Master Card",
        description: "Master Card Powers an inclusive digital economy by making transactions safe.",
        logo: "https://251communications.com/static/media/CocaCola%20251WebPage.f4566397da5bb263eb17.jpg",
        detailImage: "/images/mastercard-detail.png"
    },
    {
        name: "Emirates",
        description: "Known for innovation and luxury, it operates a modern fleet, including the Airbus.",
        logo: "https://251communications.com/static/media/Clients%20logo%201-13.bf28c15c4c405cf4eaaa.png",
        detailImage: "/images/emirates-detail.png"
    },
    {
        name: "Huawei",
        description: "Huawei is a global leader in ICT and smart devices",
        logo: "https://251communications.com/static/media/Clients%20logo%201-11.512f67988c22750b9f6f.png",
        detailImage: "/images/huawei-detail.png"
    },
    {
        name: "Holland Dairy",
        description: "Holland Dairy is a top provider of premium dairy products in Ethiopia.",
        logo: "data:image/png;base64,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",
        detailImage: "/images/holland-dairy-detail.png"
    },
    {
        name: "Raxio",
        description: "Africa's Leading Carrier Neutral Data Center",
        logo: "https://251communications.com/static/media/Clients%20logo%201-16.57d4e15541b86675a2e2.png",
        detailImage: "/images/raxio-detail.png"
    },
    {
        name: "Dashen",
        description: "Dashen Bank was established as per the intent of the new policy and the Ethiopian.",
        logo: "https://251communications.com/static/media/Clients%20logo%201-24.86f168b799990264d8b1.png",
        detailImage: "/images/dashen-detail.png"
    }
];
'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import useInView from '../hooks/useInView';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useState, useEffect, useRef } from 'react';

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
        name: "Safaricom",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Safaricom_logo.svg/1200px-Safaricom_logo.svg.png",
    }
];

const Partner = () => {
    const [setRef, isInView] = useInView({ threshold: 0.1 });
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <motion.div 
            ref={containerRef}
            className="relative min-h-screen bg-[#0a0a0a] overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-yellow-500/10 rounded-full blur-3xl"
                        style={{
                            width: Math.random() * 400 + 100,
                            height: Math.random() * 400 + 100,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 py-24">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-7xl md:text-9xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                        PARTNERS
                    </h2>
                    <p className="text-xl md:text-2xl text-yellow-100/60 max-w-2xl mx-auto font-light">
                        Collaborating with global leaders to create extraordinary experiences
                    </p>
                </motion.div>

                {/* Partners Grid with Hover Effects */}
                <motion.div 
                    style={{ y, opacity }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
                >
                    {PARTNERS.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.1,
                                filter: "brightness(1.2)",
                            }}
                            className="group relative bg-yellow-500/5 rounded-2xl p-8 backdrop-blur-sm border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <img 
                                src={partner.logo}
                                alt={partner.name}
                                className="w-full h-20 object-contain filter brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-500"
                            />
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute bottom-4 left-0 right-0 text-center text-yellow-500/70 text-sm"
                            >
                                {partner.name}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Decorative Element */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block p-4 rounded-full bg-yellow-500/10 backdrop-blur-sm">
                        <motion.div
                            animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-12 h-12 border-2 border-yellow-500/30 rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Partner;

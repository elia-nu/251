'use client'
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useState, useEffect } from 'react';

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

const usePartnerGroups = () => {
    const [groups, setGroups] = useState({
        group1: [],
        group2: [],
        group3: []
    });

    useEffect(() => {
        const handleResize = () => {
            const partnersPerGroup = Math.ceil(PARTNERS.length / 3);
            setGroups({
                group1: PARTNERS.slice(0, partnersPerGroup),
                group2: PARTNERS.slice(partnersPerGroup, partnersPerGroup * 2),
                group3: PARTNERS.slice(partnersPerGroup * 2)
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return groups;
};

const Partner = () => {
    const [setRef, isInView] = useInView({ threshold: 0.1 });
    const { group1, group2, group3 } = usePartnerGroups();
    const [speed, setSpeed] = useState(50);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSpeed(30);
            } else if (window.innerWidth < 1024) {
                setSpeed(40);
            } else {
                setSpeed(50);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center"
        >
            <div className="mx-auto w-full max-w-7xl">
                {/* Section Header */}
                <motion.div 
                    variants={itemVariants}
                    className="text-center mb-16 relative"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 bottom-0 left-0"
                    />
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
                        <motion.span 
                            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 inline-block"
                            animate={{ 
                                scale: [1, 1.05, 1],
                                opacity: [0, 1]
                            }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            WHY WE ARE
                        </motion.span>
                    </h2>
                    <motion.p 
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        Trusted by leading brands worldwide
                    </motion.p>
                </motion.div>
    
                {/* Partners Marquee */}
                <motion.div 
                    variants={itemVariants}
                    className="space-y-8 overflow-hidden w-full transform -skew-y-[12deg] py-12"
                >
                    <Marquee gradient={false} speed={speed} direction="left" className="py-4">
                        {PARTNERS.map((partner, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 0.3 }}
                                className="mx-8 flex items-center justify-center"
                            >
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="h-12 md:h-16 w-auto filter brightness-300 invert opacity-70 hover:opacity-100 transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </Marquee>

                    <Marquee gradient={false} speed={speed * 0.8} direction="right" className="py-4">
                        {PARTNERS.map((partner, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 0.3 }}
                                className="mx-8 flex items-center justify-center"
                            >
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="h-12 md:h-16 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </Marquee>

                    <Marquee gradient={false} speed={speed * 1.2} direction="left" className="py-4">
                        {PARTNERS.map((partner, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 0.3 }}
                                className="mx-8 flex items-center justify-center"
                            >
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="h-12 md:h-16 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </Marquee>
                </motion.div>
    
                {/* "ALIVE" text at bottom */}
                <motion.div 
                    variants={itemVariants}
                    className="text-center mt-16"
                >
                    <motion.h3 
                        className="text-6xl md:text-8xl font-black tracking-wider"
                        animate={{ 
                            scale: [0.9, 1],
                            opacity: [0, 1]
                        }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400/20 to-yellow-600/20">
                            ALIVE
                        </span>
                        <motion.svg 
                            animate={{ 
                                scale: [1, 1.2, 1, 1.2, 1],
                                rotate: [0, 10, -10, 10, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-block w-16 h-16 ml-4 text-yellow-500" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 4.248C8.852-1.154 0 .423 0 7.192 0 11.853 5.571 16.619 12 23c6.43-6.381 12-11.147 12-15.808C24 .4 15.125-1.114 12 4.248z"/>
                        </motion.svg>
                    </motion.h3>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Partner;

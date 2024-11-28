// components/Hero.js
'use client'
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            <Navbar/>
            <div className="relative min-h-screen bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#333333] text-white pt-20 overflow-hidden" >
                {/* Animated Bulb Background */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-24 h-24 bg-gradient-to-br from-[#00cc60]/20 to-[#00cc60]/20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                borderRadius: '10%',
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.5, 0.2],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
                    {/* Left Content with Enhanced Animations */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="inline-block bg-gradient-to-r from-[#00cc60] to-[#008000] p-2 sm:p-3 rounded-xl shadow-lg shadow-[#00cc60]/30"
                        >
                            <div className="relative">
                                <Image 
                                    src="/l2.png" 
                                    alt="Speedlify Logo" 
                                    className="h-12 w-12 sm:h-16 sm:w-16 rounded-lg"
                                    width={500}
                                    height={300}
                                />
                                <motion.div
                                    animate={{
                                        opacity: [0.4, 1, 0.4]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                    className="absolute -top-2 -right-2 w-4 h-4 bg-[#00cc60] rounded-full"
                                />
                            </div>
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
                        >
                            <span className="block bg-gradient-to-r from-[#00cc60] via-[#00cc60]/80 to-[#00cc60]/60 bg-clip-text text-transparent">
                                Tech Solutions
                            </span>
                            <span className="block mt-2 sm:mt-3 text-[#008000]">
                                At Light Speed
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0"
                        >
                            Illuminating the path to digital transformation with cutting-edge technology solutions. 
                            Fast, efficient, and brilliantly innovative.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00cc60] to-[#008000] rounded-full font-semibold shadow-lg shadow-[#00cc60]/30 transition-all duration-300 text-black"
                            >
                                Get Started Now
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 sm:px-8 py-3 sm:py-4 border border-[#00cc60] rounded-full font-semibold hover:bg-[#00cc60]/20 transition-all duration-300 backdrop-blur-sm text-white"
                            >
                                Our Solutions →
                            </motion.button>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-12 justify-center lg:justify-start"
                        >
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00cc60]">100+</div>
                                <div className="text-xs sm:text-sm text-gray-300 mt-1">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00cc60]">50+</div>
                                <div className="text-xs sm:text-sm text-gray-300 mt-1">Tech Experts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00cc60]">99%</div>
                                <div className="text-xs sm:text-sm text-gray-300 mt-1">Success Rate</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            {['Innovation', 'Reliability', 'Speed'].map((badge, index) => (
                                <div key={index} className="flex items-center bg-black/30 rounded-full px-4 py-2">
                                    <span className="text-[#00cc60] mr-2">💡</span>
                                    <span className="text-sm text-gray-300">{badge}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content with Enhanced Animations */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-1/2"
                    >
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
                            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20 bg-gradient-to-r from-[#004d00] via-[#00cc60] to-[#006600]"/>
                            <Image 
                                src="/kal1.png"
                                alt="Tech Innovation" 
                                className="absolute inset-0 w-full h-full object-contain"
                                width={500}
                                height={300}
                            />
                        </div>
                        
                        <motion.div 
                            animate={{ 
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -left-4 top-1/4 bg-[#000000]/90 backdrop-blur-lg rounded-2xl p-3 sm:p-4 shadow-lg hidden sm:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#00cc60] rounded-lg">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="text-sm">
                                    <div className="font-semibold text-[#00cc60]">Lightning Fast</div>
                                    <div className="text-xs text-gray-300">Solutions</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ 
                                y: [0, 10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                            className="absolute -right-4 top-1/2 bg-[#000000]/90 backdrop-blur-lg rounded-2xl p-3 sm:p-4 shadow-lg hidden sm:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#00cc60] rounded-lg">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div className="text-sm">
                                    <div className="font-semibold text-[#00cc60]">Smart Solutions</div>
                                    <div className="text-xs text-gray-300">AI-Powered</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Hero;

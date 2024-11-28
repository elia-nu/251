// components/Hero.js
'use client'
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion"; // Adding animation library

const Hero = () => {
    return (
        <>
            <Navbar/>
            <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white pt-20">
                {/* Enhanced Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-[40rem] h-[40rem] -top-48 -left-48 bg-teal-500/20 rounded-full blur-[100px] animate-pulse"/>
                    <div className="absolute w-[40rem] h-[40rem] -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000"/>
                    <div className="absolute w-[30rem] h-[30rem] top-1/2 left-1/2 bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-500"/>
                </div>

                <div className="relative container mx-auto px-4  sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24  flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
                    {/* Left Content with Enhanced Animations */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 p-2 sm:p-3 rounded-xl shadow-lg shadow-teal-500/20"
                        >
                            <Image 
                                src="/l2.png" 
                                alt="GO TRIP Logo" 
                                className="h-12 w-12 sm:h-16 sm:w-16 rounded-lg"
                                width={500}
                                height={300}
                            />
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
                        >
                            <span className="block bg-gradient-to-r from-white via-teal-300 to-blue-300 bg-clip-text text-transparent">
                                Modern Travel
                            </span>
                            <span className="block mt-2 sm:mt-3 text-white">
                                Reimagined
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0"
                        >
                            Experience the future of transportation with our intelligent ride-sharing platform. 
                            Safe, sustainable, and seamlessly connected for your journey ahead.
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
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full font-semibold shadow-lg shadow-teal-500/25 transition-all duration-300"
                            >
                                Book Your Ride Now
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                Explore Features →
                            </motion.button>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-12 justify-center lg:justify-start"
                        >
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400">500K+</div>
                                <div className="text-xs sm:text-sm text-gray-400 mt-1">Happy Riders</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400">1000+</div>
                                <div className="text-xs sm:text-sm text-gray-400 mt-1">Cities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400">24/7</div>
                                <div className="text-xs sm:text-sm text-gray-400 mt-1">Support</div>
                            </div>
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
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"/>
                            <Image 
                                src="/Ca1.png"
                                alt="Modern Vehicle" 
                                className="absolute inset-0 w-full h-full object-contain"
                                width={500}
                                height={300}
                            />
                        </div>
                        
                        {/* Enhanced Floating Features */}
                        <motion.div 
                            animate={{ 
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -left-4 top-1/4 bg-white/10 backdrop-blur-lg rounded-2xl p-3 sm:p-4 shadow-lg hidden sm:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-teal-500 rounded-lg">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-sm">
                                    <div className="font-semibold">Fast Pickup</div>
                                    <div className="text-xs text-gray-300">Within 5 mins</div>
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
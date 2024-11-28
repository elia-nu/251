'use client'
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import Image from 'next/image';

const Customer = () => {
    const [setRef, isInView] = useInView({ threshold: 0.1 });

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900 overflow-hidden pt-20">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                <motion.div
                    ref={setRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row items-center justify-between gap-12"
                >
                    {/* Left content */}
                    <div className="lg:w-1/2 space-y-8">
                        <motion.img 
                            src="/Logowhite.png"
                            alt="Go Trip Logo"
                            className="h-24 mx-auto lg:mx-0"
                            whileHover={{ scale: 1.05 }}
                        />
                        
                        <motion.h1 
                            className="text-4xl lg:text-6xl font-bold text-white"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                Your Journey,
                            </span>
                            <br />
                            <span>Our Priority</span>
                        </motion.h1>

                        <motion.p 
                            className="text-gray-300 text-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Join millions of satisfied riders who trust GO TRIP for their daily commute. 
                            Experience premium service, competitive prices, and a seamless booking experience. 
                            Your safety and comfort are our top priorities.
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-6 pt-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.a 
                                href="https://play.google.com/store/apps/details?id=com.africa.gotrip&hl=en&gl=US"
                                className="group flex items-center bg-gradient-to-r from-teal-400 to-cyan-400 p-4 rounded-2xl text-white shadow-lg shadow-teal-500/25 backdrop-blur-sm border border-teal-400/30"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Play Store" className="h-12 mr-4 group-hover:scale-110 transition-transform" width={500} height={300} />
                                <div>
                                    <div className="text-sm opacity-90">GET IT ON</div>
                                    <div className="text-xl font-bold">Play Store</div>
                                </div>
                            </motion.a>

                            <motion.a 
                                href="https://apps.apple.com/us/app/go-et-trip/id6446171336"
                                className="group flex items-center bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-2xl text-white shadow-lg shadow-gray-800/25 backdrop-blur-sm border border-gray-700/30"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-12 mr-4 group-hover:scale-110 transition-transform" width={500} height={300} />
                                <div>
                                    <div className="text-sm opacity-90">Download on the</div>
                                    <div className="text-xl font-bold">App Store</div>
                                </div>
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right content - Phone mockup */}
                    <motion.div 
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="relative">
                            <motion.img
                                src="/w.png" 
                                alt="Go Trip App"
                                className="w-full max-w-wxl mx-auto rounded-3xl shadow-2xl border border-white/10"
                                animate={{ 
                                    y: [0, -20, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur-[100px] opacity-20 -z-10"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Customer;

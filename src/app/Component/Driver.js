'use client'
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import Image from 'next/image';

const Driver = () => {
    const [setRef1, isInView1] = useInView({ threshold: 0.1 });
    const [setRef2, isInView2] = useInView({ threshold: 0.1 });

    return (
        <div className="relative min-h-screen bg-white pt-20 z-0">
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <motion.div
                        ref={setRef1}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 30 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div className="inline-block">
                            <motion.span 
                                className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-teal-400/20 text-teal-600 backdrop-blur-sm border border-teal-500/30"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                🚘 Join Our Driver Network
                            </motion.span>
                        </div>

                        <motion.h1 
                            className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Drive & Thrive
                            <span className="block text-gray-800 mt-2">With GO TRIP</span>
                        </motion.h1>

                        <motion.p 
                            className="text-xl text-gray-600 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Be part of Ethiopia&apos;s most innovative ride-sharing platform. Experience premium earnings, flexible schedules, and a tech-driven ecosystem designed for your success.
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.a 
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://play.google.com/store/apps/details?id=com.africa.godriver&pcampaignid=web_share"
                                className="group flex items-center bg-gradient-to-r from-teal-400 to-cyan-400 p-4 rounded-2xl text-white shadow-lg shadow-teal-500/25 backdrop-blur-sm border border-teal-400/30"
                            >
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Play Store" className="h-12 mr-4 group-hover:scale-110 transition-transform" width={128} height={128} />
                                <div>
                                    <div className="text-sm opacity-90">GET IT ON</div>
                                    <div className="text-xl font-bold">Play Store</div>
                                </div>
                            </motion.a>

                            <motion.a 
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://apps.apple.com/us/app/go-et-driver/id6446172498"
                                className="group flex items-center bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-2xl text-white shadow-lg shadow-gray-800/25 backdrop-blur-sm border border-gray-700/30"
                            >
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-12 mr-4 group-hover:scale-110 transition-transform" width={128} height={128} />
                                <div>
                                    <div className="text-sm opacity-90">Download on the</div>
                                    <div className="text-xl font-bold">App Store</div>
                                </div>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Modern Phone Mockup */}
                    <motion.div
                        ref={setRef2}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 50 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ 
                                    y: [0, -20, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative z-10"
                            >
                                <Image 
                                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" 
                                    alt="GO TRIP Driver App"
                                    className="w-full h-auto rounded-3xl shadow-2xl"
                                    width={956}
                                    height={637}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Driver;

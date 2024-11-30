'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useInView from '../hooks/useInView';
import Image from 'next/image';
import Navbar from './Navbar';

const News = () => {
    const [ref, isInView] = useInView();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const newsItems = [
        {
            title: "Dodai and EIH",
            date: "October 21, 2024",
            image: "https://251communications.com/static/media/dodai.dd1593bb86985015b2c1.jpeg",
            description: "In an event held on October 21 2024 at the Hyatt Regency, Dodai and Ethiopian Investment Holdings (EIH) announced a transformative partnership aimed at accelerating the growth of sustainable transportation in the country.",
            fullContent: "In a groundbreaking ceremony held at the prestigious Hyatt Regency, Dodai and Ethiopian Investment Holdings (EIH) unveiled their strategic partnership that promises to revolutionize sustainable transportation across Ethiopia. This collaboration marks a significant milestone in the country's journey towards eco-friendly mobility solutions. The partnership will focus on developing electric vehicle infrastructure, implementing smart transportation systems, and creating thousands of green jobs. This initiative aligns perfectly with Ethiopia's Vision 2025 for sustainable development and environmental conservation."
        },
        {
            title: "Partnership Announcement with Leading Tech Firms", 
            date: "March 10, 2024",
            image: "/news2.jpg",
            description: "251 Communications has formed strategic partnerships with leading technology firms to enhance our service offerings.",
            fullContent: "251 Communications is proud to announce groundbreaking partnerships with several leading technology firms, marking a significant expansion of our service capabilities. These collaborations will enable us to offer cutting-edge solutions in artificial intelligence, cloud computing, and digital transformation. Our partners include industry leaders in software development, cybersecurity, and data analytics. This strategic move positions us to better serve our clients with innovative solutions that meet the evolving demands of the digital age."
        },
        {
            title: "Expanding Our Global Reach",
            date: "March 5, 2024",
            image: "/news3.jpg",
            description: "We're proud to announce our expansion into new international markets, bringing our expertise to clients worldwide.",
            fullContent: "251 Communications is thrilled to announce its strategic expansion into key international markets. This expansion includes new offices in Dubai, Singapore, and London, allowing us to better serve our global client base. Our international growth brings with it exciting opportunities for cross-cultural collaboration and innovation. We're particularly focused on bringing Ethiopian excellence to the global stage while incorporating international best practices into our service delivery."
        }
    ];

    const paginate = (direction) => {
        if (direction === "next") {
            setCurrentIndex((prevIndex) => 
                prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
            );
        } else {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <div className="min-h-screen bg-white text-white relative">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            borderRadius: '50%',
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <Navbar home={true}/>
            
            <div className="container mx-auto px-4 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 md:mb-8 relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-text">
                            Latest News
                        </span>
                        <div className="absolute -top-8 -right-8 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-400/10 rounded-full blur-xl"></div>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed px-4">
                        Stay updated with the latest developments and announcements from 251 Communications
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 pb-12 sm:pb-16 md:pb-20 relative z-10">
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {!showDetails ? (
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-w-5xl mx-auto"
                            >
                                <div className="relative aspect-[16/9] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                                    <Image
                                        src={newsItems[currentIndex].image}
                                        alt={newsItems[currentIndex].title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">{newsItems[currentIndex].title}</h2>
                                        <p className="text-base sm:text-lg text-gray-200 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{newsItems[currentIndex].description}</p>
                                        <button 
                                            onClick={() => setShowDetails(true)}
                                            className="px-4 sm:px-6 py-2 bg-[#FFA500] text-black rounded-full font-bold hover:bg-[#FF8C00] transition-colors text-sm sm:text-base"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl max-w-4xl w-full mx-4"
                            >
                                <button 
                                    onClick={() => setShowDetails(false)}
                                    className="mb-4 sm:mb-6 text-gray-600 hover:text-black transition-colors text-sm sm:text-base"
                                >
                                    ← Back to News
                                </button>
                                <Image
                                    src={newsItems[currentIndex].image}
                                    alt={newsItems[currentIndex].title}
                                    width={800}
                                    height={400}
                                    className="rounded-lg sm:rounded-xl mb-4 sm:mb-6 w-full object-cover"
                                />
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">{newsItems[currentIndex].title}</h2>
                                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{newsItems[currentIndex].date}</p>
                                <div className="prose max-w-none">
                                    <p className="text-base sm:text-lg leading-relaxed">{newsItems[currentIndex].fullContent}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!showDetails && (
                        <div className="absolute right-2 sm:right-4 top-2 sm:top-4 flex gap-1 sm:gap-2">
                            {newsItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg flex items-center justify-center text-sm sm:text-base ${
                                        index === currentIndex 
                                            ? 'bg-[#FFA500] text-black' 
                                            : 'bg-black/50 text-white'
                                    }`}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default News;

// components/Hero.js
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Events = () => {
    return (
        <div className="relative bg-gradient-to-b from-white to-gray-100 w-full min-h-screen bg-cover text-white flex flex-col">
            <Navbar/>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full bg-gradient-to-br from-red-50 to-orange-50 px-4 md:px-12 py-16 md:py-24 flex flex-col items-center justify-center pt-40 md:pt-40 shadow-inner"
            >
                <motion.h4 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl md:text-4xl lg:text-5xl font-black font-sans text-black pb-6 md:pb-10 max-w-4xl text-center leading-tight"
                >
                    ET REAL ESTATE AND HOME EXPO <span className="font-normal bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">IS AROUND </span>THE CORNER
                </motion.h4>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-4xl mx-auto backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-lg"
                >
                    <p className="text-xs md:text-sm lg:text-base text-gray-800 text-center leading-relaxed">
                        ORGANIZED ANNUALLY BY 251 COMMUNICATIONS AND MARKETING PLC, IS A PREMIER EVENT HELD EVERY DECEMBER
                        FOR THREE CONSECUTIVE DAYS. THIS YEAR MARKS THE 7TH EDITION OF THE EXPO, WHICH HAS SUCCESSFULLY SHOWCASED A DIVERSE RANGE OF REAL
                        ESTATE AND HOME-RELATED SERVICES. THE EVENT SERVES AS A VITAL PLATFORM FOR PROMOTING INNOVATIVE HOUSING SOLUTIONS, INVESTMENT
                        OPPORTUNITIES, AND SUSTAINABLE LIVING OPTIONS, CREATING A VIBRANT MARKETPLACE THAT BENEFITS BOTH EXHIBITORS AND ATTENDEES ALIKE.
                    </p>
                    <p className="text-xs md:text-sm lg:text-base text-gray-800 text-center leading-relaxed mt-6 md:mt-10 border-t pt-6 border-gray-200">
                        WITH EACH ITERATION HELD EVERY DECEMBER FOR THREE DAYS, THE EXPO CONTINUES TO ELEVATE THE REAL ESTATE LANDSCAPE IN ETHIOPIA, MAKING IT A
                        MUST-ATTEND EVENT FOR ANYONE INTERESTED IN THE SECTOR.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full bg-gradient-to-br from-[#FFA200] to-[#FF8A00] px-4 md:px-12 py-8 md:py-12 flex flex-col items-center justify-center"
            >
                <div className="max-w-4xl w-full hover:scale-105 transition-transform duration-500">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/zz.jpeg" 
                            alt="Events" 
                            className="w-full h-auto object-contain hover:opacity-95 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Events;

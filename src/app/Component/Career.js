'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Career = () => {
    const jobOpenings = [
        {
            title: "Creative Director",
            department: "Creative Department", 
            location: "On-site",
            type: "Full-time",
            id: 1
        },
        {
            title: "Senior Graphic Designer",
            department: "Design Department",
            location: "Hybrid", 
            type: "Full-time",
            id: 2
        },
        {
            title: "Content Writer",
            department: "Content Department",
            location: "Remote",
            type: "Full-time", 
            id: 3
        }
    ];

    return (
        <>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8  sm:pt-24 md:pt-32 pb-16 relative z-10 pt-40'>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-white tracking-tight'
                >
                    Welcome To <span className='text-yellow-400'>251 COMMUNICATIONS</span>
                </motion.h1>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='text-2xl sm:text-3xl text-yellow-400 font-bold mb-8 sm:mb-10 md:mb-12 text-center'
                >
                    JOB OPENINGS
                </motion.h2>
                
                <div className='max-w-3xl mx-auto space-y-4 sm:space-y-6'>
                    {jobOpenings.map((job, index) => (
                        <motion.div 
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                            className='bg-gray-900 rounded-xl shadow-2xl p-6 sm:p-8 hover:shadow-yellow-400/20 transition-all duration-300 border-l-4 border-yellow-400'
                        >
                            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6'>
                                <div className='w-full sm:w-auto'>
                                    <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4'>{job.title}</h3>
                                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-300 text-sm sm:text-base'>
                                        <span className='flex items-center hover:text-yellow-400 transition-colors'>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                                            </svg>
                                            {job.department}
                                        </span>
                                        <span className='flex items-center hover:text-yellow-400 transition-colors'>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                                            </svg>
                                            {job.location}
                                        </span>
                                        <span className='flex items-center hover:text-yellow-400 transition-colors'>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                                            </svg>
                                            {job.type}
                                        </span>
                                    </div>
                                </div>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='w-full sm:w-auto bg-yellow-400 text-black px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 text-sm sm:text-base'
                                >
                                    APPLY NOW
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Career;

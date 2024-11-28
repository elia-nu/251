'use client'
import React from 'react';
import useInView from '../hooks/useInView';

const Team = () => {
    const [heroRef, isHeroInView] = useInView({ threshold: 0.1 });

    return (
        <div className="bg-white">
            {/* Modern Hero Section */}
            <div 
                ref={heroRef}
                className={` relative overflow-hidden transition-all duration-1000 ${
                    isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white"/>
                
                <div className="container mx-auto px-4 py-24 md:py-[140px] relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 to-teal-900 bg-clip-text text-transparent">
                                Revolutionizing Your Journey
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Experience transportation reimagined with cutting-edge technology and unmatched convenience.
                            </p>
                        
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-white mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                                    <p className="text-teal-100">Instant booking and quick arrival times</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-teal-600 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-teal-800 mb-2">Secure Rides</h3>
                                    <p className="text-gray-600">Advanced safety protocols</p>
                                </div>
                            </div>

                            <div className="space-y-6 mt-12">
                                <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-teal-600 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-teal-800 mb-2">Smart Pricing</h3>
                                    <p className="text-gray-600">Competitive & transparent rates</p>
                                </div>

                                <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-white mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Premium Experience</h3>
                                    <p className="text-teal-100">Comfort & quality guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;

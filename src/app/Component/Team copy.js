'use client'
import React from 'react';
import useInView from '../hooks/useInView';
import Image from 'next/image';

const Team = () => {
    const [heroRef, isHeroInView] = useInView({ threshold: 0.1 });
    const [teamRef, isTeamInView] = useInView({ threshold: 0.1 });

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
            {/* Hero Section */}
            <div 
                ref={heroRef}
                className={`relative h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
                    isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-black/70 z-10" />
                    <Image 
                        src="/Ceo.png" 
                        alt="CEO Background" 
                        className="w-full h-full object-cover"
                        width={500}
                        height={300}
                    />
                </div>
                
                <div className="container mx-auto px-4 z-20 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 text-white space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent">
                            Leadership That Drives Innovation
                        </h1>
                        <h2 className="text-2xl lg:text-3xl text-teal-400 font-medium">
                            Mr. Biruk Endale
                        </h2>
                        <p className="text-lg text-gray-200">
                            Founder and Managing Director
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Visionary leader with extensive experience across multiple industries, Mr. Biruk Endale guides GO TRIP towards revolutionizing Ethiopia&apos;s transportation system. His dedication to excellence and innovative approach continues to shape the future of urban mobility.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div 
                ref={teamRef}
                className={`py-20 transition-all duration-1000 ${
                    isTeamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-teal-800 mb-16">
                        Meet Our Leadership Team
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="group relative overflow-hidden rounded-xl">
                            <Image src="/man.jpg" alt="Kalab Berhane" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white">Kalab Berhane</h3>
                                <p className="text-teal-400">Marketing and Sales Manager</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="group relative overflow-hidden rounded-xl">
                            <Image src="/fem.jpg" alt="Bezawit Abebe" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white">Bezawit Abebe</h3>
                                <p className="text-teal-400">Digital Marketing Manager</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="group relative overflow-hidden rounded-xl">
                            <Image src="/sh1.png" alt="Bereket Tesfaye" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white">Bereket Tesfaye</h3>
                                <p className="text-teal-400">HR and Administration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;

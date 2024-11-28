'use client'
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

const FeaturesSection = () => {
    const [setRef, isInView] = useInView({ threshold: 0.1 });

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-32 overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0">
                <div className="absolute w-[40rem] h-[40rem] -top-48 -left-48 bg-teal-100/50 rounded-full blur-[100px]"/>
                <div className="absolute w-[40rem] h-[40rem] -bottom-48 -right-48 bg-blue-100/50 rounded-full blur-[100px]"/>
            </div>

            <div className="relative container mx-auto px-6">
                <motion.div
                    ref={setRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8 mb-20"
                >
                    <motion.span 
                        className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-teal-400/10 text-teal-600"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
                        transition={{ delay: 0.2 }}
                    >
                        ✨ Why Choose GO TRIP
                    </motion.span>

                    <h1 className="text-4xl lg:text-6xl font-bold">
                        <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                            Experience the Future
                        </span>
                        <br />
                        <span className="text-gray-800">of Urban Mobility</span>
                    </h1>

                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                        Discover how we&apos;re transforming everyday travel with cutting-edge technology and unmatched service quality
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Smart Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                        transition={{ delay: 0.3 }}
                        className="group bg-white rounded-3xl p-8 shadow-xl shadow-teal-100/50 hover:shadow-2xl hover:shadow-teal-200/50 transition-all duration-300 hover:-translate-y-2"
                    >
                        <div className="mb-6 bg-gradient-to-br from-teal-500 to-cyan-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Dynamic Pricing</h3>
                        <p className="text-gray-600">Get the most competitive rates with our AI-powered smart pricing system.</p>
                    </motion.div>

                    {/* Security Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                        transition={{ delay: 0.4 }}
                        className="group bg-white rounded-3xl p-8 shadow-xl shadow-blue-100/50 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-2"
                    >
                        <div className="mb-6 bg-gradient-to-br from-blue-500 to-indigo-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Security</h3>
                        <p className="text-gray-600">Real-time tracking and AI monitoring for your peace of mind.</p>
                    </motion.div>

                    {/* Eco-Friendly Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                        transition={{ delay: 0.5 }}
                        className="group bg-white rounded-3xl p-8 shadow-xl shadow-green-100/50 hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-300 hover:-translate-y-2"
                    >
                        <div className="mb-6 bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Eco-Conscious</h3>
                        <p className="text-gray-600">Supporting sustainable transportation with carbon-neutral options.</p>
                    </motion.div>

                    {/* Smart Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                        transition={{ delay: 0.6 }}
                        className="group bg-white rounded-3xl p-8 shadow-xl shadow-purple-100/50 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-300 hover:-translate-y-2"
                    >
                        <div className="mb-6 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Experience</h3>
                        <p className="text-gray-600">One-tap booking with intelligent route optimization.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

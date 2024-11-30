'use client'
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import Image from 'next/image';
import Navbar from './Navbar';

const Services = () => {
    return (
        <>
            <Navbar home={true}/>
            <div className="relative min-h-screen bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#333333]  text-white pt-40 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-400/20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                borderRadius: '50%',
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.2, 0.4, 0.2],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12 relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
                    >
                        Our Services
                    </motion.h1>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {/* Service Cards */}
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-[#1a1a1a]/50 backdrop-blur-lg rounded-xl p-6 hover:bg-[#1a1a1a]/70 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-yellow-400">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
            </div>
        </>
    );
};

const services = [
    {
        title: "Web Development",
        description: "Custom web solutions built with cutting-edge technologies for optimal performance and user experience.",
        icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and services to power your digital transformation.",
        icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    }
];

export default Services;

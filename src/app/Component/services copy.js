'use client'
import { motion, useScroll } from 'framer-motion';
import useInView from '../hooks/useInView';
import Image from 'next/image';
import Navbar from './Navbar';

const Services = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });
    const { scrollY } = useScroll();

    return (
        <>
            <Navbar home={true}/>
            <div className="relative min-h-screen bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#333333] text-white pt-40 overflow-hidden">
                <div className="container mx-auto px-4 py-12 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                        transition={{ duration: 0.8 }}
                        className="w-full flex flex-col items-center mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-4 tracking-tight">
                            Our Services
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-gradient-to-br from-[#1a1a1a]/80 to-[#2a2a2a]/80 rounded-xl p-8 border border-yellow-400/20"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl mb-6 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-yellow-400">{service.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{service.description}</p>
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
        description: "Custom web solutions built with cutting-edge technologies for optimal performance and user experience. We specialize in responsive, scalable, and modern web applications.",
        icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    {
        title: "Mobile Development", 
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences. We create intuitive, high-performance apps for iOS and Android platforms.",
        icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and services to power your digital transformation. We provide secure, efficient, and cost-effective cloud solutions tailored to your needs.",
        icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    }
];

export default Services;

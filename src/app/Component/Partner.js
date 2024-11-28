'use client'
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import Image from 'next/image';

const partners = [
    {
        name: "Cobuilt",
        logo: "/cobuilt.png",
        category: "Construction"
    },
    {
        name: "Simport", 
        logo: "/Simport.png",
        category: "Import/Export"
    },
   
    {
        name: "Sara",
        logo: "/Ssara.png",
        category: "Manufacturing"
    },
    {
        name: "Awash",
        logo: "/Awash.png",
        category: "Banking"
    },
    {
        name: "Ambo",
        logo: "/Awater.png",
        category: "Beverages"
    },
    {
        name: "Steel",
        logo: "/Asteel.png",
        category: "Manufacturing"
    },
    {
        name: "Shawi",
        logo: "/Shawi.png",
        category: "Retail"
    },
    {
        name: "Salt",
        logo: "/SaltSD.png",
        category: "Mining"
    }
];

const Partner = () => {
    const [setRef, isInView] = useInView({ threshold: 0.1 });

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute w-[40rem] h-[40rem] -top-48 -left-48 bg-teal-500/20 rounded-full blur-[100px] animate-pulse"/>
                <div className="absolute w-[40rem] h-[40rem] -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"/>
            </div>

            <div className="relative container mx-auto px-4 py-20">
                <motion.div
                    ref={setRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8 mb-16"
                >
                    <motion.span 
                        className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-teal-400/20 text-teal-300"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
                        transition={{ delay: 0.2 }}
                    >
                        🤝 Trusted Partners
                    </motion.span>

                    <h1 className="text-4xl lg:text-6xl font-bold text-white">
                        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            Growing Stronger
                        </span>
                        <br />
                        <span className="text-white">Together</span>
                    </h1>

                    <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                        Collaborating with industry leaders to revolutionize transportation across Ethiopia
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 0.4, staggerChildren: 0.1 }}
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center group transition-all duration-300 hover:bg-white/20 border border-white/10"
                        >
                            <Image 
                                src={partner.logo} 
                                alt={partner.name}
                                className="h-16 md:h-20 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                                width={500}
                                height={300}
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-white font-semibold">{partner.name}</h3>
                                <p className="text-teal-400 text-sm">{partner.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Partner;

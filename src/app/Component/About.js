'use client'
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

const About = () => {
    const [setRef1, isInView1] = useInView({ threshold: 0.1 });
    const [setRef2, isInView2] = useInView({ threshold: 0.1 });

    return (
        <div className="relative py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden z-0">
            {/* Animated background overlay */}
            <div className="absolute inset-0">
                <div className="absolute w-[40rem] h-[40rem] -top-48 -left-48 bg-teal-500/20 rounded-full blur-[100px] animate-pulse"/>
                <div className="absolute w-[40rem] h-[40rem] -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"/>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                {/* First Section */}
                <motion.div
                    ref={setRef1}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 100 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-32"
                >
                    <motion.h2 
                        className="text-teal-400 text-lg font-semibold mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView1 ? 1 : 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        WHO WE ARE
                    </motion.h2>
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 20 }}
                        transition={{ delay: 0.3 }}
                    >
                        Pioneering Technology Solutions
                    </motion.h1>
                    <motion.p 
                        className="text-gray-300 text-lg md:text-xl max-w-3xl text-center leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView1 ? 1 : 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Africa Technology stands at the forefront of software innovation, crafting solutions that transform communities. Our mission is to simplify daily operations, automate processes, and solve real-world challenges through cutting-edge technology.
                    </motion.p>
                </motion.div>

                {/* Second Section */}
                <motion.div
                    ref={setRef2}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 100 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row items-center gap-12"
                >
                    <div className="lg:w-1/2">
                        <motion.img 
                            src="/Logowhite.png"
                            alt="Go Trip"
                            className="w-full max-w-md mx-auto"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: isInView2 ? 1 : 0, scale: isInView2 ? 1 : 0.8 }}
                            transition={{ delay: 0.2 }}
                        />
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <motion.h2 
                            className="text-3xl md:text-5xl font-bold text-white"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 50 }}
                            transition={{ delay: 0.3 }}
                        >
                            Revolutionizing Transportation in Ethiopia
                        </motion.h2>
                        <motion.p 
                            className="text-gray-300 text-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView2 ? 1 : 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            GO Trip is reshaping the Ethiopian transportation landscape through innovative technology. We&apos;re building a sustainable ecosystem that connects passengers with drivers, ensuring affordable, reliable, and efficient mobility solutions for everyone.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

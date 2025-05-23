'use client'
import React, { useState } from 'react';
import useInView from '../hooks/useInView';
import { motion, useScroll } from "framer-motion";

const Team = () => {
    const [heroRef, isHeroInView] = useInView({ threshold: 0.1 });
    const [selectedMember, setSelectedMember] = useState(null);
    const { scrollY } = useScroll();
    const TEAM_MEMBERS = [
        {
          name: "John Doe", 
          role: "CEO & Founder",
          description:
            "Visionary leader with 15+ years of experience in communications",
          image:
            "https://251communications.com/static/media/Addis.689f494e39ea8d965605.jpg",
        },
        {
          name: "Jane Smith",
          role: "Creative Director", 
          description:
            "Award-winning creative professional specializing in brand strategy",
          image:
            "https://251communications.com/static/media/fantish.6f68c0739191162253b6.png",
        },
        {
          name: "Mike Johnson",
          role: "Technical Lead",
          description: "Technology expert with a passion for innovative solutions",
          image:
            "https://251communications.com/static/media/Naod.31983ab1df093f8a9697.png",
        },
        {
          name: "Sarah Wilson",
          role: "Marketing Manager",
          description:
            "Digital marketing strategist with a focus on growth and engagement",
          image:
            "https://251communications.com/static/media/Bamlak.073590f3fa3e71194257.png",
        },
        {
          name: "David Chen",
          role: "Design Lead",
          description:
            "Innovative designer with expertise in user experience and branding",
          image:
            "https://251communications.com/static/media/Michael.da7e4b1a32486aee015b.png",
        },
        {
          name: "Emma Taylor",
          role: "Communications Director",
          description:
            "Strategic communicator specializing in public relations and media",
          image:
            "https://251communications.com/static/media/Biniam.4e763932f8f8e2251734.png",
        },
      ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
      
    return (
        <motion.div 
            className="bg-black overflow-hidden max-w-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
      
             
      <div   ref={heroRef} className=" bg-black text-white py-20 px-4 sm:px-6 lg:px-8  relative z-20 ">

      <motion.div 
                className="absolute top-[30%] right-20 z-0 bg-gradient-to-br from-yellow-400 to-yellow-900 h-40 w-40 rounded-full blur-xl"
                animate={{
                    y: [50, -20, 50],
                    x: [50, -20, 50],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <motion.div 
                className="absolute top-[50%] left-0 z-0 bg-gradient-to-br from-yellow-400 to-yellow-900 h-40 w-40 rounded-full blur-xl"
                animate={{
                    y: [50, -20, 50],
                    x: [50, -20, 50],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        <div className="max-w-7xl mx-auto">
          {/* Section Header with animated underline */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-7xl pb-2 mb-10 font-bold mb-4 text-yellow-400 relative inline-block  relative inline-block after:content-[''] after:absolute after:-bottom-2 
                                after:left-0 after:w-full after:h-1 after:bg-yellow-400 after:transform after:scale-x-0 
                                after:transition-transform after:duration-300 hover:after:scale-x-100">
              Our Team
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
      
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the passionate professionals behind our success
            </p>
          </motion.div>

          {/* Team Grid with enhanced styling */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm rounded-xl p-6 
                             transition-all duration-500 cursor-pointer
                             border border-yellow-400/20 relative"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-400/30 rounded-tl-xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-400/30 rounded-br-xl"></div>

                {/* Image container with glow effect */}
                <motion.div 
                    className="relative mb-6 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-48 h-full mx-auto object-cover 
                             ring-2 ring-yellow-400/30 ring-offset-2 ring-offset-black/50"
                  />
                </motion.div>

                {/* Text content */}
                <motion.h3
                  className="text-xl font-semibold text-yellow-400 text-center mb-2 
                           group-hover:text-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-gray-400 text-center mb-4 font-medium">
                  {member.role}
                </p>

                {/* Hover overlay with animated entrance - Only on desktop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-black/95 to-black/90 
                           rounded-xl flex items-center justify-center p-6
                           hidden sm:flex"
                >
                  <motion.div 
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 text-center text-sm leading-relaxed">
                      {member.description}
                    </p>
                    {/* Social links */}
                    <div className="flex justify-center space-x-4 mt-4">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="#"
                        className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="#"
                        className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Mobile-only details section */}
                {selectedMember === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block sm:hidden mt-4 border-t border-yellow-400/20 pt-4"
                  >
                    <p className="text-gray-300 text-center text-sm leading-relaxed">
                      {member.description}
                    </p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


        </motion.div>
    );
};

export default Team;

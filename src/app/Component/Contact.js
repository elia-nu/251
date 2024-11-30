"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInView from "../hooks/useInView";
import Image from 'next/image';
import Navbar from "./Navbar";

const Contact = () => {
  const [setRef, isInView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen bg-white py-12 md:py-20 bg-cover bg-center overflow-hidden flex flex-col items-center justify-center pt-40" 
         style={{backgroundImage: 'url("https://251communications.com/static/media/contact-img.e09f745bf9874682e82e.png")'}}>
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md bg-gradient-to-b from-black/50 to-black/70">
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={setRef}
      >
        <div className="flex flex-col md:flex-row gap-16 items-center justify-between max-w-7xl mx-auto">
          {/* Left side - Contact Info */}
          <motion.div 
            className="text-white md:w-1/2"
            variants={itemVariants}
          >
            <div className="text-9xl flex flex-col items-start justify-center">
              <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent leading-tight">
                NOW WE&apos;RE TALKING
              </h1>
              <span className="text-5xl md:text-7xl text-yellow-500 font-bold">&gt;</span>
            </div>
            <div className="space-y-8 mt-12">
              <motion.div 
                className="flex items-center gap-6 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
                  <FontAwesomeIcon icon={faLocationDot} className="w-7 h-7" />
                </div>
                <p className="text-xl font-light">Aster plaza 3rd floor, Meskel flower Bole</p>
              </motion.div>
              <motion.div 
                className="flex items-center gap-6 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
                  <FontAwesomeIcon icon={faPhone} className="w-7 h-7" />
                </div>
                <p className="text-xl font-light">+251116650182</p>
              </motion.div>
              <motion.div 
                className="flex items-center gap-6 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
                  <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7" />
                </div>
                <p className="text-xl font-light">info@251communications.com</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div 
            className="md:w-1/2 w-full"
            variants={itemVariants}
          >
            <div className="bg-white/15 backdrop-blur-lg p-10 rounded-3xl border border-white/30 shadow-2xl">
              <h2 className="text-white text-4xl font-bold mb-8">Contact Us Today</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 rounded-xl bg-white/90 focus:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 rounded-xl bg-white/90 focus:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 placeholder-gray-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-4 rounded-xl bg-white/90 focus:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 placeholder-gray-500 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(234 179 8 / 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-xl hover:shadow-yellow-500/50"
                >
                  REQUEST A CALL BACK
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

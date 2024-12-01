// components/Hero.js
"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
// ... existing imports ...
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import Team from "./Team";

const VISION_SLIDES = [
  {
    image:
      "https://251communications.com/static/media/Vision.b09b7de0f445e5ba875a.png",
    alt: "Vision Slide",
    text: "Our Vision is to transform the way businesses communicate and connect with their audiences worldwide",
  },
  {
    image:
      "https://251communications.com/static/media/Mission.e47b17e2faf74a4130fe.png",
    alt: "Mission Slide",
    text: "Our Mission is to deliver innovative communication solutions that drive meaningful engagement and lasting impact",
  },
  {
    image:
      "https://251communications.com/static/media/Values.fd6eaf44443d3191aceb.png",
    alt: "Values Slide",
    text: "Our Values guide us in creating authentic connections and delivering excellence in everything we do",
  },
];

const Hero = () => {

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
    <div className="bg-white relative">
  
<Navbar home={true}/>
      <div className="relative min-h-[60vh] md:min-h-screen text-white bg-white max-w-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain md:object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>
      <Services/>

     <Vision/>
<div className="bg-black">
<Team/>
      </div>

   
    </>
  );
};

export default Hero;



const Services = () => {

  return (
    <>
   <div className="relative z-20 py-16 md:py-24 bg-gradient-to-b from-black/90 via-black/90 to-black overflow-hidden">

          <div className="container mx-auto px-4 md:px-8 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-10 w-64 h-64 bg-yellow-600 rounded-full blur-[50px]"></div>
          </div>
          <div className="absolute top-0 left-[0]  w-[80vh] h-96 bg-black  blur-[100px]"></div>
          <div className="absolute bottom-20 right-[10%] -skew-x-12 w-[80vh] h-[200vh] bg-gray-900  blur-[100px]"></div>
          <div className="absolute bottom-20 right-[40%] -skew-x-12 w-96 h-[200vh] bg-gray-900  blur-[100px] "></div>
          <div className="absolute bottom-20 right-[50%] -skew-x-12 w-96 h-[200vh] bg-gray-900  blur-[1000px] "></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 relative">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent 
                                inline-block transform hover:scale-105 transition-transform duration-300">
                    What We
                  </span>
                  <br/>
                  <span className="text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 
                                after:left-0 after:w-full after:h-1 after:bg-yellow-400 after:transform after:scale-x-0 
                                after:transition-transform after:duration-300 hover:after:scale-x-100">
                    Offer
                  </span>
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed"
              >
                <p className="transform hover:translate-x-4 transition-all duration-500 hover:text-white">
                  We are a full-service communications and public relations firm with offices in 
                  <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"> Addis Ababa, Ethiopia </span> & 
                  <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"> Washington D.C.</span>
                </p>
                
                <p className="transform hover:translate-x-4 transition-all duration-500 hover:text-white">
                  Our expertise spans across 
                  <span className="relative inline-block group">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors"> communications</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>, 
                  <span className="relative inline-block group">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors"> marketing</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>, 
                  <span className="relative inline-block group">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors"> research</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>, and
                  <span className="relative inline-block group">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors"> media production</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>, delivering comprehensive solutions for both local and international clients.
                </p>
                
                <p className="transform hover:translate-x-4 transition-all duration-500 hover:text-white">
                  From ATL to BTL marketing strategies, we create end-to-end solutions that amplify our clients 
                  market presence through our extensive network of leading service and media partnerships.
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(250, 204, 21, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full 
                          overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Explore Our Services
                </span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
            </div>

            {/* Right Content */}
            <motion.div 
          animate={{ 
            y: [0, -10, 0],
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }}
              className="w-full md:w-1/2"
            >
              <div className="relative group perspective-1000">
                <div className="relative transform transition-all duration-700 group-hover:rotate-y-180">
                  <img 
                    src="/Group 13.svg" 
                    alt="What we offer" 
                    className="w-full h-auto max-h-[600px]  object-contain max-w-xl mx-auto filter  drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]
                             transform transition-all duration-700 group-hover:rotate-1" 
                  />
                           </div>
              </div>
            </motion.div>
          

          </div>
        </div>
      </div>
   
    </>
  );
};

const Vision = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <>
      <div className=" relative bg-gradient-to-br from-black via-black  to-black py-40 px-4 sm:px-6 lg:px-8 max-w-screen overflow-hidden">
        <div className="max-w-9xl mx-auto">
     

          <Slider
            {...carouselSettings}
            className={clsx(
              "w-full max-w-6xl mx-auto",
              "[&_.slick-dots]:bottom-[-40px]",
              "[&_.slick-dots_li_button::before]:text-yellow-400",
              "[&_.slick-dots_li.slick-active_button::before]:text-yellow-500",
              "[&_.slick-dots_li_button::before]:text-sm",
              "[&_.slick-dots_li_button::before]:opacity-70",
              "[&_.slick-dots_li.slick-active_button::before]:opacity-100",
              "[&_.slick-prev]:left-[-50px] [&_.slick-next]:right-[-50px]",
              "[&_.slick-prev],[&_.slick-next]:w-14 [&_.slick-prev],[&_.slick-next]:h-14",
              "[&_.slick-prev],[&_.slick-next]:before:text-yellow-400",
              "[&_.slick-prev],[&_.slick-next]:before:text-3xl",
      
              "[&_.slick-slide]:transition-all [&_.slick-slide]:duration-300"
            )}
          >
            {VISION_SLIDES.map((slide, index) => (
              <div key={index} className="px-4 py-4">
                <div className="bg-gradient-to-br from-gray-800/0 to-gray-900/0 rounded-2xl overflow-hidden shadow-2xl 
                               transition-all duration-500 
                             ">
                  <div className="relative  overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-contain transform  transition-transform duration-700"
                    />
             
                  </div>

                  <div className="px-8">
                    <div className="bg-gradient-to-r  rounded-lg p-6">
                      <p className=" text-base text-yellow-400 sm:text-lg text-center leading-relaxed max-w-3xl mx-auto">
                        {slide.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
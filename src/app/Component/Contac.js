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

const Contac = () => {
  const [setRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <div className="relative min-h-screen bg-white py-8 md:py-16">
      <div className="relative container mx-auto px-3 md:px-4">
        <motion.div
          ref={setRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 md:space-y-6 mb-8 md:mb-16"
        >
          <motion.span
            className="inline-flex items-center px-3 md:px-4 py-1.5 rounded-full text-sm font-medium bg-teal-500/10 text-teal-600"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
            transition={{ delay: 0.2 }}
          >
            📞 Get in Touch
          </motion.span>

          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            <span className="text-teal-600">Ready to Connect?</span>
            <br />
            <span className="text-gray-800">We&apos;re Here for You</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-3">
            Whether you have questions, feedback, or need assistance, our team
            is ready to help make your journey better.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8">
          <div className="flex flex-col md:flex-row lg:flex-col justify-between gap-4 md:gap-6 w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.3 }}
              className="group bg-teal-50 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex-1"
            >
              <ContactCard
                icon={faLocationDot}
                title="Our Location"
                details={["Addis Abeba, Ethiopia"]}
                gradient="from-teal-500 to-teal-600"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.4 }}
              className="group bg-teal-50 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex-1"
            >
              <ContactCard
                icon={faPhone}
                title="Call Center"
                details={["+8787", "+251112175045", "+251147086682"]}
                gradient="from-teal-500 to-teal-600"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.5 }}
              className="group bg-teal-50 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex-1"
            >
              <ContactCard
                icon={faEnvelope}
                title="Email Support"
                details={["gotripsupport@africatechnology.et"]}
                gradient="from-teal-500 to-teal-600"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center">
              <Image
                src="/conc.png"
                alt="Contact Illustration"
                className="w-full max-w-xl rounded-2xl shadow-lg"
                width={400}
                height={240}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, details, gradient }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div
        className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white text-lg md:text-xl transform group-hover:scale-110 transition-transform duration-300`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-base md:text-lg font-bold text-teal-800">{title}</h3>
      <div className="flex flex-col gap-1.5">
        {details.map((detail, index) => (
          <p key={index} className="text-xs md:text-sm text-teal-600">
            <FontAwesomeIcon icon={faPhone} className="text-teal-600 mr-1.5" /> {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Contac;

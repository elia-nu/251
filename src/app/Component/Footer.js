'use client'
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[20rem] sm:w-[30rem] md:w-[40rem] h-[20rem] sm:h-[30rem] md:h-[40rem] -top-24 sm:-top-36 md:-top-48 -left-24 sm:-left-36 md:-left-48 bg-teal-500/20 rounded-full blur-[50px] sm:blur-[75px] md:blur-[100px] animate-pulse"/>
        <div className="absolute w-[5rem] sm:w-[7rem] md:w-[10rem] h-[5rem] sm:h-[7rem] md:h-[10rem] bottom-28 sm:bottom-42 md:bottom-56 -right-24 sm:-right-36 md:-right-48 bg-blue-500/20 rounded-full blur-[50px] sm:blur-[75px] md:blur-[100px] animate-pulse"/>
      </div>
      
      <div className="relative z-10">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {/* Brand Section */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                className="relative w-36 sm:w-48 h-12 sm:h-16"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="/Logowhite.png"
                  alt="Go Trip Logo"
                  className="object-contain w-full h-full"
                />
              </motion.div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Experience the future of transportation with Go Trip. We&apos;re not just moving people - we&apos;re moving progress forward.
              </p>
              <div className="flex space-x-2 sm:space-x-4">
                <motion.a 
                  href="https://www.instagram.com/go8787et" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-2 sm:p-3 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg sm:rounded-xl shadow-lg hover:shadow-pink-500/25"
                >
                  <FaInstagram className="text-lg sm:text-xl" />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/GoAfricaTrip8787" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="p-2 sm:p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg sm:rounded-xl shadow-lg hover:shadow-blue-500/25"
                >
                  <FaFacebook className="text-lg sm:text-xl" />
                </motion.a>
                <motion.a 
                  href="#" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-2 sm:p-3 bg-gradient-to-br from-black to-gray-800 rounded-lg sm:rounded-xl shadow-lg hover:shadow-gray-500/25"
                >
                  <FaTiktok className="text-lg sm:text-xl" />
                </motion.a>
                <motion.a 
                  href="#" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="p-2 sm:p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg sm:rounded-xl shadow-lg hover:shadow-blue-500/25"
                >
                  <FaLinkedin className="text-lg sm:text-xl" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Navigation</h3>
              <ul className="space-y-2 sm:space-y-3">
                {['Home', 'About Us', 'Why-Gotrip', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <a href={`#${item.replace(' ', '')}`} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                      <span className="h-px w-4 bg-teal-400 group-hover:w-6 transition-all"></span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Legal</h3>
              <ul className="space-y-2 sm:space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Partner Privacy', 'Cookie Policy'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                      <span className="h-px w-4 bg-teal-400 group-hover:w-6 transition-all"></span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Get in Touch</h3>
              <address className="not-italic space-y-2 sm:space-y-3 text-gray-300">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-1 text-sm sm:text-base">📍</div>
                  <div className="text-sm sm:text-base">
                    <p>Kirkos Sub city, Woreda 03</p>
                    <p>House no. 1098</p>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </motion.div>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="mailto:africatechnologyethio@gmail.com" 
                  className="flex items-center space-x-3 hover:text-white transition-colors text-sm sm:text-base"
                >
                  <span>✉️</span>
                  <span className="break-all">africatechnologyethio@gmail.com</span>
                </motion.a>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="tel:8787" 
                  className="flex items-center space-x-3 hover:text-white transition-colors text-sm sm:text-base"
                >
                  <span>📞</span>
                  <span>#8787</span>
                </motion.a>
              </address>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center text-gray-400 text-xs sm:text-sm"
            >
              © {new Date().getFullYear()} Go Trip. Pioneering the future of transportation.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
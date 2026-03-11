import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import heroImage from "../assets/1.jpeg";
import heroOverlay from "../assets/1.png"; // Decorative PNG

const Hero = () => {
  const imageRef = useRef();

  // Mouse tilt for hero image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0b0b0b] overflow-hidden py-20 px-6 md:px-12">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b] to-[#1a1a1a] z-0"></div>

      {/* Animated floating circle */}
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-[#caa577]/20 to-[#ffd27f]/20 rounded-full top-[-150px] left-[-150px] filter blur-3xl z-0"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />

      {/* PNG overlay */}
      <motion.img
        src={heroOverlay}
        alt="overlay"
        className="hidden md:block absolute top-12 right-0 w-64 opacity-30 pointer-events-none z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ffd27f] drop-shadow-lg"
          >
            Hello, Welcome!
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
          >
            I’m <span className="text-[#caa577]">Alish Bajracharya</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 text-base sm:text-lg md:text-xl max-w-md md:max-w-lg drop-shadow-lg"
          >
            I specialize in <span className="text-[#ffd27f] font-semibold">MERN Stack</span> and <span className="text-[#caa577] font-semibold">Flutter</span>.  
            Building modern, responsive, and high-performance web and mobile applications with clean UI/UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-[#caa577] text-black font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-[#ffd27f]/50 transition-all duration-300"
            >
              See My Works
            </a>
            <a
              href="mailto:bajracharya.alish587@gmail.com"
              className="px-8 py-4 border border-[#caa577] text-[#caa577] rounded-lg hover:bg-[#caa577] hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <motion.div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            className="relative cursor-pointer w-64 sm:w-80 md:w-96"
          >
            <motion.img
              src={heroImage}
              alt="Alish Bajracharya"
              className="w-full rounded-3xl border-4 border-[#caa577]/30 shadow-2xl object-cover transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#caa577] rounded-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
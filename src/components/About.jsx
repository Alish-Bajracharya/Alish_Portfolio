import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/2.jpeg";

const About = () => {
  // Links directly inside the component
  const linkedinUrl = "https://www.linkedin.com/in/alish-bajracharya";
  const email = "bajracharya.alish587@gmail.com";
  const resumeUrl = "https://drive.google.com/file/d/1STJHSG-r0iMhywNz7dQCNJbGWz6P7TDx/view?usp=sharing";

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="bg-[#0b0b0b] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          className="relative flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.div variants={item} className="relative group">
            <img
              src={aboutImage}
              alt="Alish Bajracharya"
              className="w-[340px] h-[420px] object-cover rounded-2xl border border-[#caa577]/30 shadow-2xl group-hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#caa577] rounded-2xl"></div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.h2 variants={item} className="text-5xl font-bold mb-6">
            About <span className="text-[#caa577]">Me</span>
          </motion.h2>

          <motion.h3 variants={item} className="text-2xl font-semibold text-gray-300 mb-6">
            MERN + Flutter Developer
          </motion.h3>

          <motion.p
            variants={item}
            className="text-gray-400 leading-relaxed mb-6"
          >
            Hello! I’m <span className="text-[#caa577] font-semibold">Alish Bajracharya</span>, 
            a MERN Stack & Flutter developer and the Managing Director of 
            <span className="text-[#caa577] font-semibold"> MorphCode Tech Pvt. Ltd.</span> 
            I specialize in building scalable web and mobile applications with modern technologies, 
            clean UI/UX, and optimized performance. My passion is turning innovative ideas into 
            responsive, interactive, and high-quality digital solutions.
          </motion.p>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 border border-[#caa577]/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <h4 className="text-3xl font-bold text-[#caa577]">20+</h4>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div className="bg-white/5 border border-[#caa577]/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <h4 className="text-3xl font-bold text-[#caa577]">4+</h4>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="bg-white/5 border border-[#caa577]/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <h4 className="text-3xl font-bold text-[#caa577]">10+</h4>
              <p className="text-sm text-gray-400">Technologies</p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#caa577] text-black rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 border border-[#caa577] text-[#caa577] rounded-lg hover:bg-[#caa577] hover:text-black transition-all duration-300"
            >
              Email Me
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
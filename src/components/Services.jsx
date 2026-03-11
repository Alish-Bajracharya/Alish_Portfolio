import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "MERN Stack Development",
      description:
        "Building full-stack web applications using MongoDB, Express, React, and Node.js with scalable architecture.",
      icon: "https://logo.svgcdn.com/logos/react.svg",
    },
    {
      title: "Flutter App Development",
      description:
        "Developing cross-platform mobile applications with Flutter and modern UI/UX design.",
      icon: "https://img.icons8.com/color/96/flutter.png",
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive and interactive websites using React, Tailwind CSS, and advanced animations.",
      icon: "https://img.icons8.com/fluency/96/source-code.png",
    },
    {
      title: "UI / UX Design",
      description:
        "Designing modern user interfaces focused on usability, aesthetics, and seamless user experience.",
      icon: "https://img.icons8.com/color/96/web-design.png",
    },
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, y: -10, boxShadow: "0px 20px 40px rgba(202, 165, 119, 0.4)" },
  };

  return (
    <section id="services" className="py-20 bg-[#0b0b0b] text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          My <span className="text-[#caa577]">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg md:text-xl"
        >
          I provide modern development solutions combining performance, scalability, and beautiful user experiences.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-[#caa577]/20 cursor-pointer transition-all duration-500"
            >
              <img src={service.icon} className="w-16 mx-auto mb-6" alt={service.title} />

              <h3 className="text-xl font-semibold mb-4 text-[#caa577]">{service.title}</h3>

              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
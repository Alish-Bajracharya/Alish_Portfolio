import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactData = [
    {
      type: "Phone",
      icon: "https://img.icons8.com/bubbles/100/000000/phone.png",
      details: ["+977-9824071911"],
    },
    {
      type: "Email",
      icon: "https://img.icons8.com/bubbles/100/000000/new-post.png",
      details: ["bajracharya.alish587@gmail.com"],
    },
    {
      type: "Address",
      icon: "https://img.icons8.com/bubbles/100/000000/map-marker.png",
      details: ["Lalitpur, Nepal"],
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  // Variants for cards
  const cardContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Form fields animation
  const formContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const formItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#caa577] via-[#ffd27f] to-[#caa577]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Cards */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 gap-8"
  variants={cardContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {contactData.map((item, idx) => (
    <motion.div
      key={idx}
      variants={cardItem}
      className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#1f1f1f]/90 border border-[#caa577]/50 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 backdrop-blur-md"
    >
      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center mb-5 bg-[#0d0d0d]/90 rounded-full shadow-inner group hover:shadow-lg transition-shadow duration-300">
        <img
          src={item.icon}
          alt={item.type}
          className="w-12 h-12 transition-transform duration-300 group-hover:scale-125"
        />
      </div>

      {/* Type */}
      <h3 className="text-2xl font-bold text-[#ffd27f] mb-2">{item.type}</h3>

      {/* Details */}
      <div className="flex flex-col gap-1">
        {item.details.map((detail, i) => (
          <motion.p
            key={i}
            variants={cardItem}
            className="text-gray-200 text-base font-medium drop-shadow-sm"
          >
            {detail}
          </motion.p>
        ))}
      </div>
    </motion.div>
  ))}
</motion.div>
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-[#caa577]/20 shadow-lg"
            variants={formContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-[#caa577] text-center mb-4"
              variants={formItem}
            >
              Send a Message
            </motion.h3>

            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-4 rounded-lg bg-white/10 border border-[#caa577]/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#caa577] focus:border-transparent transition-all duration-300"
              required
              variants={formItem}
            />

            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-4 rounded-lg bg-white/10 border border-[#caa577]/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#caa577] focus:border-transparent transition-all duration-300"
              required
              variants={formItem}
            />

            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="p-4 rounded-lg bg-white/10 border border-[#caa577]/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#caa577] focus:border-transparent transition-all duration-300"
              required
              variants={formItem}
            />

            <motion.button
              type="submit"
              className="relative overflow-hidden bg-[#caa577] text-black font-semibold py-3 rounded-lg hover:bg-gradient-to-r hover:from-[#ffd27f] hover:via-[#caa577] hover:to-[#ffd27f] transition-all duration-300"
              variants={formItem}
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
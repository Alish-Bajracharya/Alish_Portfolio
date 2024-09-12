import React from "react";
import bgImage from '../assets/ime.jpg';
import '../Styles/Hero.css';  // Import your custom CSS file

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start px-8">
        <div className="relative animate-text-reveal">
          <h1 className="text-6xl font-bold mb-2 w-40">
            Hello, <span></span>
          </h1>
          <h1 className="text-6xl font-bold mb-2 w-96">
            My Name is <span></span>
          </h1>
          <h1 className="text-6xl font-bold mb-6">
            Alish Bajracharya <span></span>
          </h1>
        </div>
        <a
          href="#projects"
          className="text-white border border-white px-6 py-2 hover:bg-red-500 hover:border-red-500 transition duration-300"
        >
          Portfolio
        </a>
      </div>
    </section>
  );
};

export default Hero;

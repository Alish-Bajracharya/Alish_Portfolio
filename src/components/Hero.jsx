import React from "react";
import PropTypes from 'prop-types';
import Image from '../assets/ime.jpg';
import Hero1 from '../Styles/Hero1.css'

const Hero = ({ bgImage, title, subtitle, name, buttonText, buttonLink }) => {
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
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start px-8">
        <div className="relative animate-text-reveal">
          <h1 className="text-6xl font-bold mb-2">
            {title} <span></span>
          </h1>
          <h1 className="text-6xl font-bold mb-2">
            {subtitle} <span></span>
          </h1>
          <h1 className="text-6xl font-bold mb-6">
            {name} <span></span>
          </h1>
        </div>
        <a
          href={buttonLink}
          className="text-white border border-white px-6 py-2 hover:bg-red-500 hover:border-red-500 transition duration-300"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

Hero.propTypes = {
  bgImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired
};

Hero.defaultProps = {
  bgImage: Image, 
  title: 'Hello,',
  subtitle: 'My Name is',
  name: 'Alish Bajracharya',
  buttonText: 'See My Works',
  buttonLink: '#projects'
};

export default Hero;

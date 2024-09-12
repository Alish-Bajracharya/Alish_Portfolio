import React from 'react';
import '../Styles/About.css';
import aboutImage from '../assets/aaalish.png';  // Correct image path

const About = () => {
  return (
    <section id="about" className="py-24 flex justify-center items-center bg-gray-100">
      <div className="about container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl text-center md:text-left">
        {/* Left Column: Image */}
        <div className="col-left w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="about-img relative w-64 h-96 border-8 border-white">
            <img src={aboutImage} alt="Alish" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 border-4 border-red-600 h-full w-full transform -translate-x-8 -translate-y-4"></div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="col-right w-full md:w-1/2 p-6">
          <h1 className="text-5xl font-bold mb-6 whitespace-nowrap flex items-center text-black">
            About <span className="text-red-600 ml-2">me</span>
          </h1>
          <h2 className="text-2xl font-semibold tracking-wide mb-4">
            Front End Developer
          </h2>
          <p className="mb-6">
            Hello! I'm Bajracharya Alish, a third-year Computing student with a passion for front-end development. With a strong foundation in technology and a commitment to continuous learning, I aim to advance my career in the IT industry. Beyond coding, I enjoy designing and love to interact with people from different social backgrounds, and I'm dedicated to continuous learning and exploring new technologies. Connect with me via <a href="https://www.linkedin.com/in/alish-bajracharya" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> or email at <a href="mailto:bajracharya.alish587@gmail.com" className="text-blue-500 hover:underline">bajracharya.alish587@gmail.com</a> to collaborate on exciting web projects!
          </p>
          <a
            href="https://drive.google.com/file/d/1jnHtTAEL1PqCsWsySQGyvDEVZqa8sMDK/view?usp=sharing"
            className="inline-block bg-red-600 text-white py-3 px-6 rounded-full text-xl hover:bg-red-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

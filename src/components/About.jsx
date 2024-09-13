import React from 'react';
import PropTypes from 'prop-types';

const About = ({ image, heading, subheading, text, linkedinUrl, email, resumeUrl }) => {
  return (
    <section id="about" className="py-24 flex justify-center items-center bg-gray-100">
      <div className="about container mx-auto flex flex-col md:flex-row items-center justify-between max-w-7xl text-center md:text-left">
        {/* Left Column: Image */}
        <div className="col-left w-full md:w-1/2 flex justify-center md:justify-center mb-8 md:mb-0">
          <div className="about-img relative w-64 h-80 border-8 border-white left-12">
            <img src={image} alt="About" className="w-full h-full object-cover" />
            <div className="absolute top-5 left-9 border-4 border-red-600 h-full w-full transform -translate-x-8 -translate-y-4"></div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="col-right w-full md:w-2/3 p-4">
          <h1 className="text-5xl font-bold mb-6 whitespace-nowrap flex items-center text-black">
            {heading} <span className="text-red-600 ml-2">me</span>
          </h1>
          <h2 className="text-2xl font-semibold tracking-wide mb-4">
            {subheading}
          </h2>
          <p className="mb-6">
            {text} Connect with me via <a href={linkedinUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> or email at <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a> to collaborate on exciting web projects!
          </p>
          <a
            href={resumeUrl}
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

About.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  resumeUrl: PropTypes.string.isRequired
};

About.defaultProps = {
  image: '../assets/aaalish.png', 
  heading: 'About',
  subheading: 'Front End Developer',
  text: 'Hello! I`m Bajracharya Alish, a third-year Computing student with a passion for front-end development.  With a strong foundation in technology and a commitment to continuous learning, I aim to advance my career in the IT industry. Beyond coding, I enjoy designing and love to interact with people from different social background, and I`m dedicated to continuous learning and exploring new technologies...',
  linkedinUrl: 'https://www.linkedin.com/in/alish-bajracharya',
  email: 'bajracharya.alish587@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1jnHtTAEL1PqCsWsySQGyvDEVZqa8sMDK/view?usp=sharing'
};

export default About;

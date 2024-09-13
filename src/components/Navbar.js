import React, { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={`fixed top-0 w-full p-4 z-10 transition-all duration-300 ${click ? 'bg-gray-800' : 'bg-gray-800 bg-opacity-60'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="home" className="text-2xl font-bold text-white">
          Alish <span className="text-red-500">Bajracharya</span>
        </a>
        <ul className={`flex space-x-8 ${click ? 'block' : 'hidden'} md:flex md:space-x-6 md:block`}>
          <li>
            <a href="#hero" className="text-white font-medium hover:text-red-500 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-white font-medium hover:text-red-500 transition-colors duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white font-medium hover:text-red-500 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="text-white font-medium hover:text-red-500 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white font-medium hover:text-red-500 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden" onClick={handleClick}>
          <i className={`fas ${click ? 'fa-times' : 'fa-bars'} text-white text-2xl`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

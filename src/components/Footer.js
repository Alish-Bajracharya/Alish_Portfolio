import React from 'react';
import '../Styles/Footer.css'; 

const Footer = () => {
  return (
    <section id="footer" className="footer-section py-8">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="footer-heading text-white text-3xl font-bold mb-4 whitespace-nowrap flex justify-center items-center">
          <span className="text-red-500">A</span>LISH <span className="text-red-500 ml-2">B</span>AJRACHARYA
        </h1>
      
        <h2 className="footer-subtext text-white text-sm font-light mb-2">
          Your Complete Web Solution
        </h2>

        <div className="social-icons flex justify-center">
          <a href="https://www.linkedin.com/in/alish-bajracharya-3256b5260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="mx-2 w-12 h-12">
            <img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/alish_.bajracharya?igsh=YXN2MDNkbWx1dXQ4" className="mx-2 w-12 h-12">
            <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://github.com/Alish-Bajracharya" className="mx-2 w-12 h-12">
            <img src="https://img.icons8.com/bubbles/100/000000/github.png" alt="GitHub" className="social-icon" />
          </a>
        </div>

        <p className="text-white text-sm -mb-9">
          Copyright © 2024 Alish. All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;

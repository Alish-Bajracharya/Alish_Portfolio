import React from 'react';

const Footer = () => {
  const name = "Alish Bajracharya";
  const tagline = "Your Complete Web Solution";
  const copyrightYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alish-bajracharya', icon: 'https://img.icons8.com/bubbles/100/000000/linkedin.png' },
    { name: 'Instagram', url: 'https://www.instagram.com/alish_.bajracharya', icon: 'https://img.icons8.com/bubbles/100/000000/instagram-new.png' },
    { name: 'GitHub', url: 'https://github.com/Alish-Bajracharya', icon: 'https://img.icons8.com/bubbles/100/000000/github.png' },
  ];

  return (
    <footer className="bg-[#0b0b0b] py-10 border-t border-[#caa577]/30">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4 px-6 md:px-0">
        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#caa577] via-[#ffd27f] to-[#caa577]">
          {name}
        </h1>

        {/* Tagline */}
        <p className="text-gray-300 text-sm md:text-base">{tagline}</p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-3">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-125 hover:shadow-[0_0_15px_#caa577] rounded-full"
            >
              <img src={link.icon} alt={link.name} className="w-10 h-10 md:w-12 md:h-12" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 mt-6 text-sm md:text-base">
          © {copyrightYear} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
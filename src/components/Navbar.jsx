import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  // Links data inside same file
  const links = [
    { href: '#hero', text: 'Home' },
    { href: '#services', text: 'Services' },
    { href: '#projects', text: 'Projects' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' },
  ];

  const brandName = 'Alish Bajracharya';

  // Toggle mobile menu
  const handleClick = () => setClick(!click);

  // Scroll listener for navbar background
  const handleScroll = () => setScroll(window.scrollY > 50);

  // Active link detection
  const handleSetActive = (to) => setActiveLink(`#${to}`);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu animation
  const mobileMenuVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { x: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  // Scroll to top when brand is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveLink('#hero');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll ? 'bg-[#0b0b0b]/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Brand */}
        <div
          onClick={scrollToTop}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#caa577] via-[#ffd27f] to-[#caa577] cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          {brandName}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-8">
          {links.map((link, idx) => (
            <li key={idx} className="relative group">
              <Link
                to={link.href.replace('#', '')}
                smooth
                duration={500}
                offset={-70}
                className={`cursor-pointer font-medium text-white hover:text-[#caa577] transition-colors duration-300 ${
                  activeLink === link.href ? 'text-[#caa577]' : ''
                }`}
                onSetActive={handleSetActive}
              >
                {link.text}
              </Link>
              {/* Animated underline */}
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 h-0.5 bg-[#caa577] rounded-full"
                animate={{ width: activeLink === link.href ? '100%' : '0%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <div
            className="relative z-50 w-8 h-8 flex flex-col justify-between items-center cursor-pointer transition-transform duration-500"
            onClick={handleClick}
          >
            <span
              className={`block h-1 w-full bg-[#caa577] rounded-lg transform transition duration-300 ${
                click ? 'rotate-45 translate-y-3.5' : ''
              }`}
            />
            <span
              className={`block h-1 w-full bg-[#caa577] rounded-lg transition-all duration-300 ${
                click ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-1 w-full bg-[#caa577] rounded-lg transform transition duration-300 ${
                click ? '-rotate-45 -translate-y-3.5' : ''
              }`}
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {click && (
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col justify-center items-center z-40"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col justify-center items-center space-y-8">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.href.replace('#', '')}
                      smooth
                      duration={500}
                      offset={-70}
                      className="text-white text-3xl font-semibold cursor-pointer hover:text-[#caa577] transition-colors duration-300"
                      onClick={() => setClick(false)}
                      onSetActive={handleSetActive}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
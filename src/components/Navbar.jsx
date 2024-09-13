import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ brandName, brandColor, links, bgColor, textColor }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav
      className={`fixed top-0 w-full p-4 z-10 transition-all duration-300 ${click ? bgColor : `${bgColor} bg-opacity-60`}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="home" className={`text-2xl font-bold ${brandColor}`}>
          {brandName}
        </a>
        <ul className={`flex space-x-8 ${click ? 'block' : 'hidden'} md:flex md:space-x-6 md:block`}>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`text-${textColor} font-medium hover:text-red-500 transition-colors duration-300`}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden" onClick={handleClick}>
          <i className={`fas ${click ? 'fa-times' : 'fa-bars'} text-${textColor} text-2xl`}></i>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
  brandColor: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};

Navbar.defaultProps = {
  brandColor: 'text-red-500',
  bgColor: 'bg-gray-800',
  textColor: 'white'
};

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Footer.css'; 

const Footer = ({ name, tagline, socialLinks, copyrightYear }) => {
  return (
    <section id="footer" className="footer-section py-8">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="footer-heading text-white text-3xl font-bold mb-4 whitespace-nowrap flex justify-center items-center">
          <span className="text-red-500">{name.charAt(0)}</span>
          {name.slice(1)} 
        </h1>
      
        <h2 className="footer-subtext text-white text-sm font-light mb-2">
          {tagline}
        </h2>

        <div className="social-icons flex justify-center">
          {socialLinks.map((link, index) => (
            <a href={link.url} className="mx-2 w-12 h-12" key={index}>
              <img src={link.icon} alt={link.name} className="social-icon" />
            </a>
          ))}
        </div>

        <p className="text-white text-sm -mb-9">
          Copyright © {copyrightYear} {name}. All rights reserved
        </p>
      </div>
    </section>
  );
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired,
  copyrightYear: PropTypes.number.isRequired,
};

export default Footer;

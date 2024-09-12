import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      <div className="social-links">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </footer>
  );
};

export default Footer;

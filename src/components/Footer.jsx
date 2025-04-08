// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="footer-links">
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">BEHANCE</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        </div>

        <div className="footer-email">
          <a href="mailto:jenny237k@gmail.com">EMAIL: JENNY237K@GMAIL.COM</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 ALL WORKS DESIGNED BY JENNY.
      </div>
    </footer>
  );
};

export default Footer;

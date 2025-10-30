import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About Federation</h4>
            <p>
              15 Gaon Cricket Federation is dedicated to promoting cricket 
              excellence across 15 villages, fostering talent, and organizing 
              competitive tournaments.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/news">News & Updates</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/registration">Registration</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Our Teams</h4>
            <ul>
              <li><Link to="/committee">Committee</Link></li>
              <li><Link to="/umpire-panel">Umpire Panel</Link></li>
              <li><Link to="/scorer-panel">Scorer Panel</Link></li>
              <li><Link to="/commentators">Commentators</Link></li>
              <li><Link to="/pride-of-15-gao">Pride of 15 Gao</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>📧 info@15gaoncricket.com</li>
              <li>📱 +91 98765 43210</li>
              <li>📍 15 Gaon, Maharashtra, India</li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} 15 Gaon Cricket Federation. All rights reserved.</p>
          <p>Designed with ❤️ for Cricket</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


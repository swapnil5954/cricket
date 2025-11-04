import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [totalVisits, setTotalVisits] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // Simulate visitor counter (in a real app, this would come from backend/analytics)
    const storedVisits = localStorage.getItem('totalVisits');
    const visits = storedVisits ? parseInt(storedVisits) : 15420;
    setTotalVisits(visits + 1);
    localStorage.setItem('totalVisits', (visits + 1).toString());

    // Simulate active users (would normally come from real-time analytics)
    setActiveUsers(Math.floor(Math.random() * 50) + 10);
  }, []);

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
            <div className="footer-stats">
              <div className="stat-item-footer">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span className="stat-label">Total Visits:</span>
                <span className="stat-value">{totalVisits.toLocaleString()}</span>
              </div>
              <div className="stat-divider">•</div>
              <div className="stat-item-footer">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <circle cx="12" cy="12" r="8" fill="#4ade80"/>
                  <circle cx="12" cy="12" r="3" fill="#fff"/>
                </svg>
                <span className="stat-label">Active Users:</span>
                <span className="stat-value active">{activeUsers}</span>
              </div>
            </div>
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
            <div className="social-section">
              <h5>Follow Us</h5>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
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


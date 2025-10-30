import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <div className="logo-container">
            <div className="logo-image-wrapper">
              <img 
                src="https://i.ibb.co/zRYzQDq/15gaon-logo.png"
                alt="15 Gaon Cricket Federation Logo" 
                className="logo-image"
                onError={(e) => {
                  e.target.src = "/logo.png"; // Fallback to local if hosted fails
                }}
              />
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-text">15 गाव क्रिकेट फेडरेशन</span>
              {/* <span className="logo-subtitle">15 Gaon Cricket Federation</span> */}
            </div>
          </div>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'hamburger active' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={isOpen ? 'nav-wrapper active' : 'nav-wrapper'}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className={`nav-link ${isActive('/news')}`} onClick={closeMenu}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`} onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tournaments" className={`nav-link ${isActive('/tournaments')}`} onClick={closeMenu}>
                Tournaments
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-trigger">Teams & Villages <span className="dropdown-arrow">▾</span></span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/all-teams" className="dropdown-link" onClick={closeMenu}>
                    All Teams (40)
                  </Link>
                </li>
                <li>
                  <Link to="/villages" className="dropdown-link" onClick={closeMenu}>
                    15 Gaon Villages
                  </Link>
                </li>
                <li>
                  <Link to="/committee" className="dropdown-link" onClick={closeMenu}>
                    Committee
                  </Link>
                </li>
                <li>
                  <Link to="/umpire-panel" className="dropdown-link" onClick={closeMenu}>
                    Umpire Panel
                  </Link>
                </li>
                <li>
                  <Link to="/scorer-panel" className="dropdown-link" onClick={closeMenu}>
                    Scorer Panel
                  </Link>
                </li>
                <li>
                  <Link to="/commentators" className="dropdown-link" onClick={closeMenu}>
                    Commentators
                  </Link>
                </li>
                <li>
                  <Link to="/pride-of-15-gao" className="dropdown-link" onClick={closeMenu}>
                    Pride of 15 Gao
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="nav-actions">
            <Link to="/registration" className="nav-link-simple" onClick={closeMenu}>
              Register
            </Link>
            <Link to="/login" className="nav-link-simple login-link" onClick={closeMenu}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


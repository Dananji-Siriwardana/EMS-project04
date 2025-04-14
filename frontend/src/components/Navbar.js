import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import profileIcon from '../assets/images/profile-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile view navigation
  const MobileNavigation = () => (
    <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="mobile-top">
        <div className="profile-section">
          <div className="profile-icon-container">
            <img src={profileIcon} alt="Profile" className="mobile-profile-img" />
          </div>
          <button className="mobile-sign-in">Sign in</button>
        </div>
        
        <div className="mobile-nav-links">
          <Link to="/" className="mobile-nav-item" onClick={() => setIsOpen(false)}>
            <span className="mobile-nav-icon">🏠</span>
            <span>Home</span>
          </Link>
          <Link to="/about" className="mobile-nav-item" onClick={() => setIsOpen(false)}>
            <span className="mobile-nav-icon">📄</span>
            <span>About Us</span>
          </Link>
          <Link to="/contact" className="mobile-nav-item" onClick={() => setIsOpen(false)}>
            <span className="mobile-nav-icon">💬</span>
            <span>Contact Us</span>
          </Link>
          <Link to="/profile" className="mobile-nav-item" onClick={() => setIsOpen(false)}>
            <span className="mobile-nav-icon">👤</span>
            <span>Profile</span>
          </Link>
        </div>
      </div>
      
      <div className="mobile-bottom">
        <Link to="/" className="mobile-company-brand">
          <img src={logo} alt="Company Logo" className="mobile-logo" />
          <span className="mobile-company-name">Gamage Recruiters<br /> (PVT) LTD</span>
        </Link>
      </div>
    </div>
  );

  // Desktop navigation (your existing code)
  const DesktopNavigation = () => (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Company Logo" className="logo" />
          <span className="company-name">Gamage Recruiters (PVT) LTD</span>
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-item" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="navbar-item" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="navbar-item" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <div className="auth-section">
            <button className="sign-in">Sign in</button>
            <div className="profile-icon">
              <img src={profileIcon} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>

        <div className={`navbar-burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {isMobile ? (
        <>
          <div className="mobile-header">
            <div className="mobile-menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <MobileNavigation />
        </>
      ) : (
        <DesktopNavigation />
      )}
    </>
  );
};

export default Navbar;
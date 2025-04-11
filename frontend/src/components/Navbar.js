import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import profileIcon from '../assets/images/profile-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
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
};

export default Navbar;
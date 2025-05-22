// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle, faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <Router>
      <div className="app">
        <header className="navbar">
          <h1>Gamage Recruiters (PVT) LTD</h1>
          <div className="navbar-items">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/about" className="navbar-link">About Us</Link>
            <Link to="/contact" className="navbar-link">Contact Us</Link>
            <FontAwesomeIcon icon={faBars} className="icon" onClick={toggleSidebar} />
            <FontAwesomeIcon icon={faBell} className="icon" />
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
          </div>
        </header>

        {navbarVisible && (
          <div className="navbar-dropdown">
            <button className="close-btn" onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul>
              <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
              <li><Link to="/about" onClick={toggleNavbar}>About Us</Link></li>
              <li><Link to="/contact" onClick={toggleNavbar}>Contact Us</Link></li>
              <li><Link to="/profile" onClick={toggleNavbar}>Profile</Link></li>
            </ul>
          </div>
        )}

        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <main className="content">
          <div style={{ position: 'relative' }}>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<h1>About Us</h1>} />
            <Route path="/contact" element={<h1>Contact Us</h1>} />
            <Route path="/profile" element={<h1>Profile Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

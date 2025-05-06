// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle, faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarVisible, setNavbarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleNavbar = () => {
        setNavbarVisible(!navbarVisible);
    };
    return (
        <div className="app">
            <header className="navbar">
                <h1>Gamage Recruiters (PVT) LTD</h1>
                <div className="navbar-items">
                    <a href="#home" className="navbar-link">Home</a>
                    <a href="#about" className="navbar-link">About Us</a>
                    <a href="#contact" className="navbar-link">Contact Us</a>
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
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Profile</li>
                    </ul>
                </div>
            )}            
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className="content">
                <div style={{ position: 'relative' }}>
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" placeholder="Search..." className="search-bar" />
                </div>
                {/* Add additional content here */}
            </div>
        </div>
    );
};

export default App;
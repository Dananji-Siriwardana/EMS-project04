import React from 'react';
import '../Style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>INFORMATION</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>News & Events</li>
            <li>Offices</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>My Account</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>USER SPECIFIC LINKS</h4>
          <ul>
            <li>Employee</li>
            <li>dashboard</li>
            <li>Admin dashboard</li>
            <li>Apply for leave</li>
            <li>Task Management</li>
            <li>Learning Hub</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>POLICIES</h4>
          <ul>
            <li>Privacy</li>
            <li>Policy</li>
            <li>Terms of Use</li>
          </ul>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-column contact-form">
          <h4>GET IN TOUCH WITH US</h4>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="3"></textarea>
          <button type="submit">SUBMIT</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faClipboardList, faCalendarAlt, faTasks, faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={toggleSidebar}>✖</button>
                
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        <span>My Dashboard</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserPlus} className="icon" />
                        <span>Intern Registration</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faClipboardList} className="icon" />
                        <span>Intern Daily Diaries</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                        <span>Leave Management</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faTasks} className="icon" />
                        <span>Task Management</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBook} className="icon" />
                        <span>Learning Resource Management</span>
                    </li>
                </ul>
                <hr className="separator" />
                <ul className="additional-links">
                    <li>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        <span>Home</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserPlus} className="icon" />
                        <span>About Us</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faClipboardList} className="icon" />
                        <span>Contact Us</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserPlus} className="icon" />
                        <span>Profile</span>
                    </li>
                </ul>
                <button className="logout">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                </button>
            </div>

            {/* Optional overlay */}
            {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </>
    );
};

export default Sidebar;
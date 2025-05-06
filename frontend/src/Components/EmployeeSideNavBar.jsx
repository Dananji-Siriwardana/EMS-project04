import React, { useState, useEffect, useRef, } from "react";
import "../Style/sidebar.css";
import logo from "../assets/image.png";
import { Home, ClipboardList, CalendarCheck, ListChecks, Power, Bell, User, Menu, MessageCircle, File} from 'lucide-react';

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="app-container">
            <div className="top-content">
                <div className="topbar">
                    <div className="logo-section">
                        <img src={logo} alt="Logo" className="logo" />
                        <h2>Gamage Recruiters (PVT) LTD</h2>
                    </div>

                    <div className="nav-menu desktop-only">
                        <span>Home</span>
                        <span>About Us</span>
                        <span>Contact Us</span>
                    </div>

                    <div className="icons">
                        <Bell className="icon" />
                        <User className="icon" />
                    </div>
                </div>
            </div>



            <div className="main-content">
                <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} ref={sidebarRef}>
                    <div className="nav-links">
                        <div className="nav-item"><Home className="icon" /><span>My Dashboard</span></div>
                        <div className="nav-item"><ClipboardList className="icon" /><span>Intern Dairy Submit</span></div>
                        <div className="nav-item"><CalendarCheck className="icon" /><span>Apply for Leave</span></div>
                        <div className="nav-item"><ListChecks className="icon" /><span>Task Management</span></div>
                    </div>
                    <div className="nav-men mobile-only">
                        <hr></hr>
                        <div className="nav-item"><Home className="icon" /><span>Home</span></div>
                        <div className="nav-item"><File className="icon" /><span>About Us</span></div>
                        <div className="nav-item"><MessageCircle className="icon" /><span>Contact Us</span></div>
                        <div className="nav-item"><User className="icon" /><span>Profile</span></div>
                    </div>

                    <div className="learning-hub">
                        <div className="learning-box">
                            <div className="question-mark">?</div>
                            <h4>Learning Hub</h4>
                            <p>Having Trouble in Learning. Please contact us for more questions.</p>
                            <button className="learning-btn">Go To Learning Hub</button>
                        </div>
                    </div>

                    <button className="logout-btn"><Power className="icon" /> Log Out</button>
                </div>
                <div className="container">
                    <div className="inside-bar">
                        <Menu className="menu-icon mobile-only" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                        <div className="search-bar">
                            <input type="text" placeholder="Search ...." />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

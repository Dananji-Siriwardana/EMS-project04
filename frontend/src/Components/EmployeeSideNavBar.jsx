import React from "react";
// Make sure Sidebar.css exists in the same folder or adjust path accordingly
import "../Style/sidebar.css";
import logo from "../assets/image.png"
import { Home, ClipboardList, CalendarCheck, ListChecks, Power, Bell, User } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="app-container">

            <div className="top-content">
                <div className="topbar">
                    <div className="logo-section">
                        <img src={logo} alt="Logo" className="logo" />
                        <h2>Gamage Recruiters (PVT) LTD</h2>
                    </div>
                    
                    <div className="nav-menu">
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
                <div className="sidebar">

                    <div className="nav-links">
                        <div className="nav-item">
                            <Home className="icon" />
                            <span>My Dashboard</span>
                        </div>
                        <div className="nav-item">
                            <ClipboardList className="icon" />
                            <span>Intern Dairy Submit</span>
                        </div>
                        <div className="nav-item">
                            <CalendarCheck className="icon" />
                            <span>Apply for Leave</span>
                        </div>
                        <div className="nav-item">
                            <ListChecks className="icon" />
                            <span>Task Management</span>
                        </div>
                    </div>

                    <div className="learning-hub">
                        <div className="learning-box">
                            <div className="question-mark">?</div>
                            <h4>Learning Hub</h4>
                            <p>Having Trouble in Learning. Please contact us for more questions.</p>
                            <button className="learning-btn">Go To Learning Hub</button>
                        </div>
                    </div>

                    <button className="logout-btn">
                        <Power className="icon" /> Log Out
                    </button>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search ...." />
                </div>
            </div>

        </div>
    );
}

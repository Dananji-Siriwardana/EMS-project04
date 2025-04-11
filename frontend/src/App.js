import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<h1>About Us</h1>} />
            <Route path="/contact" element={<h1>Contact Us</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

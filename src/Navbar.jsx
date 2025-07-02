// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">Hot Beans Web</div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>        
        <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
        <li><NavLink to="/staff" activeClassName="active">Staff Profiles</NavLink></li>
        <li><NavLink to="/courses" activeClassName="active">Web Courses</NavLink></li>
        <li><NavLink to="/apply" activeClassName="active">Application form</NavLink></li>
      </ul>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <span>☰</span>
      </div>
    </nav>
  );
}


// src/components/Footer.jsx
import React from 'react';
import '../styles.css';

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/staff">Staff Profiles</a>
          <a href="/courses">Web Courses</a>
          <a href="/apply">Application form</a>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Hot Beans Web. All rights reserved.</p>
      </div>
    </footer>
  );
}

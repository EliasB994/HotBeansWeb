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

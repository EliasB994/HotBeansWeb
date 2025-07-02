// src/pages/Home.jsx
import React from 'react';
import '../styles.css';

export default function Home() {
  return (
    <main className="container">
      <section className="hero text-center mt-4">
        <h1>Welcome to Hot Beans Web Careers</h1>
        <p>Your journey to join our cutting-edge team starts here.</p>
        <button className="btn mt-4" onClick={() => window.location.href = '/apply'}>
          Apply Now
        </button>
      </section>

      <section className="about mt-4">
        <h2>Who We Are</h2>
        <p>
          Hot Beans Web specializes in delivering innovative web solutions. We’re \"hot\" on
          creative development and passionate about brewing digital excellence.
        </p>
      </section>

      <section className="features mt-4">
        <h2>Core Features</h2>
        <ul>
          <li>Multi-page React app with fluid routing</li>
          <li>Responsive design for all devices</li>
          <li>Interactive job listings and application form</li>
          <li>Engaging animations and micro-interactions</li>
        </ul>
      </section>
    </main>
  );
}

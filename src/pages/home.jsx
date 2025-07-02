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


// src/pages/AboutUs.jsx
import React from 'react';
import '../styles.css';

export default function AboutUs() {
  return (
    <main className="container mt-4">
      <h1>About Us</h1>
      <p>
        At Hot Beans Web, our mission is to empower businesses with cutting-edge web technologies.
        Our team blends technical expertise with creative flair to deliver outstanding digital experiences.
      </p>
    </main>
  );
}


// src/pages/StaffProfiles.jsx
import React from 'react';
import '../styles.css';

export default function StaffProfiles() {
  const staff = [
    { name: 'Alice Johnson', role: 'Front-end Developer' },
    { name: 'Bob Smith', role: 'Back-end Engineer' },
    { name: 'Charlie Lee', role: 'UI/UX Designer' },
  ];

  return (
    <main className="container mt-4">
      <h1>Our Team</h1>
      <div className="profiles">
        {staff.map((member, idx) => (
          <div key={idx} className="card mt-4">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}


// src/pages/WebCourses.jsx
import React from 'react';
import '../styles.css';

export default function WebCourses() {
  const courses = [
    { title: 'React for Beginners', link: '#' },
    { title: 'Advanced Node.js', link: '#' },
    { title: 'UI/UX Design Principles', link: '#' },
  ];

  return (
    <main className="container mt-4">
      <h1>Web Courses</h1>
      <ul>
        {courses.map((course, idx) => (
          <li key={idx} className="mt-2">
            <a href={course.link} className="btn">
              {course.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}


// src/pages/ApplicationForm.jsx
import React from 'react';
import '../styles.css';

export default function ApplicationForm() {
  return (
    <main className="container mt-4">
      <h1>Application Form</h1>
      {/* Paste your form code into this section */}
      <section className="form-placeholder mt-4"></section>
    </main>
  );
}

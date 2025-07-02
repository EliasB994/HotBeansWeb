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

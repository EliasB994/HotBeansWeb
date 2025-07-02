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

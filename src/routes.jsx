/* src/routes.js */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import StaffProfiles from './pages/StaffProfiles';
import WebCourses from './pages/WebCourses';
import ApplicationForm from './pages/ApplicationForm';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/staff" element={<StaffProfiles />} />
      <Route path="/courses" element={<WebCourses />} />
      <Route path="/apply" element={<ApplicationForm />} />
    </Routes>
  );
}

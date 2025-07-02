/* src/index.js */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


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


/* src/App.jsx */
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import './App.css';

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <div className="page-content">
            <AppRoutes />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}


/* src/App.css */
.page-content {
  padding-top: 80px; /* account for sticky nav height */
  min-height: calc(100vh - 160px); /* nav + footer */
}

/* fade-enter, exit classes handled in global styles.css */


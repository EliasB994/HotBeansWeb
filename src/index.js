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


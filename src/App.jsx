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

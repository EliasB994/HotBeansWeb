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




/* src/App.css */
.page-content {
  padding-top: 80px; /* account for sticky nav height */
  min-height: calc(100vh - 160px); /* nav + footer */
}

/* fade-enter, exit classes handled in global styles.css */


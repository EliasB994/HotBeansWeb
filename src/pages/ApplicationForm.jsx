// src/pages/ApplicationForm.jsx
import React, { useEffect } from 'react';
import '../styles.css';

const ApplicationForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/jsform/251673401019349';
    script.type = 'text/javascript';
    script.async = true;
    document.getElementById('jotform-form-container').appendChild(script);
  }, []);

  return (
    <main className="container mt-4">
      <h1>Application Form</h1>
      <section
        id="jotform-form-container"
        className="form-placeholder mt-4"
      >
        {/* JotForm will inject the form here */}
      </section>
    </main>
  );
};

export default ApplicationForm;

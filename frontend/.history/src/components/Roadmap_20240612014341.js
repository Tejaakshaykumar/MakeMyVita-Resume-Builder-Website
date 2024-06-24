import React, { useState } from 'react';
import './Roadmap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Roadmap = () => {
  const [darkMode, setDarkMode] = useState(false);
  const steps = [
    { label: 'Select Template', icon: 'bi bi-layout-text-window-reverse', status: 'completed' },
    { label: 'Personal Details', icon: 'bi bi-person', status: 'completed' },
    { label: 'Education Details', icon: 'bi bi-book', status: 'in-progress' },
    { label: 'Courses & Skills', icon: 'bi bi-tools', status: '' },
    { label: 'Experience', icon: 'bi bi-briefcase', status: '' },
    { label: 'Projects', icon: 'bi bi-folder', status: '' },
    { label: 'Additional Sections', icon: 'bi bi-plus-circle', status: '' },
    { label: 'Finish', icon: 'bi bi-check-circle', status: '' },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="toggle">
        <span>☀️</span>
        <input type="checkbox" id="toggle-switch" checked={darkMode} onChange={toggleDarkMode} />
        <label htmlFor="toggle-switch"></label>
        <span>🌙</span>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`step ${step.status}`}>
              {step.status === 'completed' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              ) : step.status === 'in-progress' ? (
                <div className="preloader"></div>
              ) : null}
              <div className={`label ${step.status}`}>{step.label}</div>
              <div className={`icon ${step.status}`}>
                <i className={step.icon}></i>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`line ${step.status === 'in-progress' ? 'next-step-in-progress' : ''} ${steps[index + 1].status === 'in-progress' ? 'prev-step-in-progress' : step.status === 'completed' ? 'completed' : ''}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;

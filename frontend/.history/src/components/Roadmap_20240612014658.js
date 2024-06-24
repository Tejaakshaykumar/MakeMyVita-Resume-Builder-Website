import React, { useState } from 'react';
import './Roadmap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Roadmap = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const steps = [
    { label: 'Select Template', icon: 'bi bi-layout-text-window-reverse' },
    { label: 'Personal Details', icon: 'bi bi-person' },
    { label: 'Education Details', icon: 'bi bi-book' },
    { label: 'Courses & Skills', icon: 'bi bi-tools' },
    { label: 'Experience', icon: 'bi bi-briefcase' },
    { label: 'Projects', icon: 'bi bi-folder' },
    { label: 'Additional Sections', icon: 'bi bi-plus-circle' },
    { label: 'Finish', icon: 'bi bi-check-circle' },
  ];

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <div className="main-container">
      <div className="toggle">
        <span>☀️</span>
        <input type="checkbox" id="toggle-switch" onChange={toggleDarkMode} />
        <label htmlFor="toggle-switch"></label>
        <span>🌙</span>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`step ${index < currentStep ? 'completed' : index === currentStep ? 'in-progress' : ''}`}>
              {index < currentStep ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              ) : index === currentStep ? (
                <div className="preloader"></div>
              ) : null}
              <div className={`label ${index < currentStep ? 'completed' : index === currentStep ? 'loading' : ''}`}>
                {step.label}
              </div>
              <div className={`icon ${index < currentStep ? 'completed' : index === currentStep ? 'in-progress' : ''}`}>
                <i className={step.icon}></i>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`line ${
                  index < currentStep - 1
                    ? 'completed'
                    : index === currentStep - 1
                    ? 'next-step-in-progress'
                    : ''
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;

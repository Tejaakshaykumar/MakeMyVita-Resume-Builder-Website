import React from 'react';
import './Roadmap.css';

const Roadmap = ({ steps, currentStep, icons }) => {
  return (
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
            <div className={`icon ${index < currentStep ? 'completed' : index === currentStep ? 'in-progress' : ''}`}>
              <i className={icons[index]}></i>
            </div>
            <div className={`label ${index < currentStep ? 'completed' : index === currentStep ? 'loading' : ''}`}>
              {step}
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
  );
};

export default Roadmap;

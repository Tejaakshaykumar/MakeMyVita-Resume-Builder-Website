import React from 'react';
import './Roadmap.css';

const Roadmap = ({ steps, currentStep }) => {
  return (
    <div className="roadmap">
      {steps.map((step, index) => (
        <div key={index} className={`roadmap-step ${index <= currentStep ? 'active' : ''}`}>
          {step}
        </div>
      ))}
    </div>
  );
};

export default Roadmap;

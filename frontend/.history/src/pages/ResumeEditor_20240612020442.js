import React, { useState } from 'react';
import Roadmap from './Roadmap';
import './ResumeEditor.css';

const ResumeEditor = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Select Template',
    'Personal Details',
    'Education Details',
    'Courses and Tech Skills',
    'Experience',
    'Projects',
    'Additional Sections',
    'Finish'
  ];

  const icons = [
    'bi bi-layout-text-window-reverse',
    'bi bi-person',
    'bi bi-book',
    'bi bi-tools',
    'bi bi-briefcase',
    'bi bi-folder',
    'bi bi-plus-circle',
    'bi bi-check-circle'
  ];

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="resume-editor">
      <Roadmap steps={steps} currentStep={currentStep} icons={icons} />
      {/* Render your steps here */}
    </div>
  );
};

export default ResumeEditor;

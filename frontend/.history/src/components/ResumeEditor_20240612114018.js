import React, { useState } from 'react';
import Roadmap from './Roadmap';
import Step1Template from './Step1Template';
import Step2PersonalDetails from './Step2PersonalDetails';
import Step3EducationDetails from './Step3EducationDetails';
import Step4Skills from './Step4Skills';
import Step5Experience from './Step5Experience';
import Step6Projects from './Step6Projects';
import Step7AdditionalSections from './Step7AdditionalSections';
import Step8Finish from './Step8Finish';
// import './ResumeEditor.css';

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

function ResumeEditor() {
  const [currentStep, setCurrentStep] = useState(0);

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
      <div className='editor-top'>
      <Roadmap steps={steps} currentStep={currentStep} />
      </div>
      <div className='editor-temp'>
        
      </div>
      {currentStep === 1 && <Step2PersonalDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}
      {currentStep === 2 && <Step3EducationDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}
      {currentStep === 3 && <Step4Skills goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}
      {currentStep === 4 && <Step5Experience goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}
      {currentStep === 5 && <Step6Projects goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}
      {currentStep === 6 && <Step7AdditionalSections goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}
      {currentStep === 7 && <Step8Finish goToPreviousStep={goToPreviousStep} />}
    </div>
  );
}

export default ResumeEditor;

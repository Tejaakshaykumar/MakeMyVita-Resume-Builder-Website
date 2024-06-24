import React from 'react';
import './Step8Finish.css';

const Step8Finish = ({ goToPreviousStep }) => {
  const handleDownload = () => {
    // Logic to handle downloading the resume
  };

  return (
    <div className="step-container">
      <h2>Finish</h2>
      <p>Review your resume and click the download button to get your resume.</p>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default Step8Finish;

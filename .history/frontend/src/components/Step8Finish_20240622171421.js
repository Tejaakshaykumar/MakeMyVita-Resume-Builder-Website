
import React, { useState } from 'react';
import './components.css';

const Step8Finish = ({ goToPreviousStep,handleSubmit }) => {

  return (
    <div className="step-container">
      <h2>Finish</h2>
      <p>Review your resume and click the download button to get your resume.</p>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={() => { handleSubmit();  }}></button>
      </div>
    </div>
  );
};

export default Step8Finish;
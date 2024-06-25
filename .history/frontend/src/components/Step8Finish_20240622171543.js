
import React, { useState } from 'react';
import './components.css';
import { useNavigation } from 'react-router-dom';

const Step8Finish = ({ goToPreviousStep,handleSubmit }) => {
const navigate=useNavigation();
const finish
  return (
    <div className="step-container">
      <h2>Finish</h2>
      <p>Review your resume and click the download button to get your resume.</p>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={() => { handleSubmit(),  finish()}}>Finish</button>
      </div>
    </div>
  );
};

export default Step8Finish;
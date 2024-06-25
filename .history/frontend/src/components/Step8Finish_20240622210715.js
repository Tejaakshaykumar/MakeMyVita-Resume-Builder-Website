
import React, { useState } from 'react';
import './components.css';
import { useNavigate } from 'react-router-dom';

const Step8Finish = ({ goToPreviousStep,handleSubmit, ResumeDetails, setResumeDetails }) => {
const navigate=useNavigate();
const finish= ()=>{
  navigate('./dashboard');
}
  return (
    <div className="step-container">
      <h2>Finish</h2>
      <p>Review your resume and click the download button to get your resume.</p>
      <div>
        <label>Font Color:</label>
        <input 
          type="color" 
          name="fontColor" 
          value={ResumeDetails.fontColor} 
          onChange={handleChange} 
        />
      </div>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={() => { handleSubmit();  finish()}}>Finish</button>
      </div>
    </div>
  );
};

export default Step8Finish;

import React, { useState } from 'react';
import './components.css';
import { useNavigate } from 'react-router-dom';

const Step8Finish = ({ goToPreviousStep,handleSubmit, ResumeDetails, setResumeDetails }) => {
const navigate=useNavigate();
const finish= ()=>{
  navigate('./dashboard');
}

const handleChange = (e) => {
  const { name, value } = e.target;
  setResumeDetails({
    ...ResumeDetails,
    [name]: value,
  });
};

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
      <div>
        <label> Color:</label>
        <input 
          type="color" 
          name="fontColor" 
          value={ResumeDetails.fontColor} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Font Family:</label>
        <select 
          name="fontFamily" 
          value={ResumeDetails.fontFamily} 
          onChange={handleChange}
        >
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={() => { handleSubmit();  finish()}}>Finish</button>
      </div>
    </div>
  );
};

export default Step8Finish;
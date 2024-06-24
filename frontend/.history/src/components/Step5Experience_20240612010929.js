import React, { useState } from 'react';
import './.css';

const Step5Experience = ({ goToNextStep, goToPreviousStep }) => {
  const [experience, setExperience] = useState({
    companyName: '',
    jobTitle: '',
    jobDescription: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value
    });
  };

  return (
    <div className="step-container">
      <h2>Experience</h2>
      <form>
        <label>Company Name:</label>
        <input type="text" name="companyName" value={experience.companyName} onChange={handleChange} />

        <label>Job Title:</label>
        <input type="text" name="jobTitle" value={experience.jobTitle} onChange={handleChange} />

        <label>Job Description:</label>
        <input type="text" name="jobDescription" value={experience.jobDescription} onChange={handleChange} />

        <label>Start Date:</label>
        <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} />

        <label>End Date:</label>
        <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} />
      </form>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step5Experience;

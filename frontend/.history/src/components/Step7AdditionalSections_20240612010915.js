import React, { useState } from 'react';
import './components.css';

const Step7AdditionalSections = ({ goToNextStep, goToPreviousStep }) => {
  const [additionalSections, setAdditionalSections] = useState({
    achievements: '',
    awards: '',
    certifications: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalSections({
      ...additionalSections,
      [name]: value
    });
  };

  return (
    <div className="step-container">
      <h2>Additional Sections</h2>
      <form>
        <label>Achievements:</label>
        <input type="text" name="achievements" value={additionalSections.achievements} onChange={handleChange} />

        <label>Awards:</label>
        <input type="text" name="awards" value={additionalSections.awards} onChange={handleChange} />

        <label>Certifications:</label>
        <input type="text" name="certifications" value={additionalSections.certifications} onChange={handleChange} />
      </form>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step7AdditionalSections;

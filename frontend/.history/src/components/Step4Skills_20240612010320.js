import React, { useState } from 'react';
import './Step4Skills.css';

const Step4Skills = ({ goToNextStep, goToPreviousStep }) => {
  const [skills, setSkills] = useState({
    courses: '',
    techSkills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkills({
      ...skills,
      [name]: value
    });
  };

  return (
    <div className="step-container">
      <h2>Courses and Tech Skills</h2>
      <form>
        <label>Courses:</label>
        <input type="text" name="courses" value={skills.courses} onChange={handleChange} />

        <label>Technical Skills:</label>
        <input type="text" name="techSkills" value={skills.techSkills} onChange={handleChange} />
      </form>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step4Skills;

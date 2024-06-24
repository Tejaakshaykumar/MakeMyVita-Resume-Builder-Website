import React, { useState } from 'react';
import './components.css';

const Step6Projects = ({ goToNextStep, goToPreviousStep }) => {
  const [projects, setProjects] = useState({
    projectName: '',
    projectDescription: '',
    projectLink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjects({
      ...projects,
      [name]: value
    });
  };

  return (
    <div className="step-container">
      <h2>Projects</h2>
      <form>
        <label>Project Name:</label>
        <input type="text" name="projectName" value={projects.projectName} onChange={handleChange} />

        <label>Project Description:</label>
        <input type="text" name="projectDescription" value={projects.projectDescription} onChange={handleChange} />

        <label>Project Link:</label>
        <input type="url" name="projectLink" value={projects.projectLink} onChange={handleChange} />
      </form>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step6Projects;

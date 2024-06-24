import React, { useState } from 'react';
import './components.css';

const Step6Projects = ({ goToNextStep, goToPreviousStep }) => {
  const [projects, setProjects] = useState([
    {
      projectName: '',
      projectDescription: '',
      projectLink: '',
      submissionDate: ''
    }
  ]);

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[index][name] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        projectName: '',
        projectDescription: '',
        projectLink: '',
        submissionDate: ''
      }
    ]);
  };

  return (
    <div className="step-container">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-entry">
          <label>Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={project.projectName}
            onChange={(e) => handleProjectChange(index, e)}
          />

          <label>Project Description:</label>
          <input
            type="text"
            name="projectDescription"
            value={project.projectDescription}
            onChange={(e) => handleProjectChange(index, e)}
          />

          <label>Project Link:</label>
          <input
            type="url"
            name="projectLink"
            value={project.projectLink}
            onChange={(e) => handleProjectChange(index, e)}
          />

          <label>Date of Submission:</label>
          <input
            type="date"
            name="submissionDate"
            value={project.submissionDate}
            onChange={(e) => handleProjectChange(index, e)}
          />
        </div>
      ))}
      <button type="button" onClick={addProject}>Add Another Project</button>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step6Projects;

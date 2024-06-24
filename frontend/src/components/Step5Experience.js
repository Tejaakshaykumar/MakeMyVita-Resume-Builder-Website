import React, { useState } from "react";
import "./components.css";

const Step5Experience = ({ goToNextStep, goToPreviousStep, experiences, setExperiences }) => {

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        companyName: "",
        jobTitle: "",
        jobDescription: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const deleteExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  return (
    <div className="step-container">
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-entry">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={experience.companyName}
            onChange={(e) => handleExperienceChange(index, e)}
          />

          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={experience.jobTitle}
            onChange={(e) => handleExperienceChange(index, e)}
          />

          <label>Job Description:</label>
          <textarea
            type="text"
            name="jobDescription"
            value={experience.jobDescription}
            onChange={(e) => handleExperienceChange(index, e)}
            rows={5}
            cols={80}
          />

          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={experience.startDate}
            onChange={(e) => handleExperienceChange(index, e)}
          />

          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={experience.endDate}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <button type="button" onClick={() => deleteExperience(index)}>Delete</button>
          <hr />
        </div>
      ))}
      <button type="button" onClick={addExperience}>
        Add Another Experience
      </button>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step5Experience;

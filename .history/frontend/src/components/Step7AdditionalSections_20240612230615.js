import React, { useState } from 'react';
import './components.css';

const Step7AdditionalSections = ({ goToNextStep, goToPreviousStep }) => {
  const [additionalSections, setAdditionalSections] = useState({
    achievements: [''],
    awards: [''],
    certifications: [''],
    competitiveProgramming: ['']
  });

  const handleChange = (section, index, e) => {
    const { value } = e.target;
    const newSection = [...additionalSections[section]];
    newSection[index] = value;
    setAdditionalSections({
      ...additionalSections,
      [section]: newSection
    });
  };

  const addSectionItem = (section) => {
    setAdditionalSections({
      ...additionalSections,
      [section]: [...additionalSections[section], '']
    });
  };

  return (
    <div className="step-container">
      <h2>Additional Sections</h2>

      {['achievements', 'awards', 'certifications', 'competitiveProgramming'].map((section) => (
        <div key={section} className="additional-section">
          <h3>{section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
          {additionalSections[section].map((item, index) => (
            <input
              key={index}
              type="text"
              value={item}
              onChange={(e) => handleChange(section, index, e)}
              placeholder={`Enter ${section.slice(0, -1)} ${index + 1}`}
            />
          ))}
          <button type="button" onClick={() => addSectionItem(section)}>Add Another {section.slice(0, -1)}</button>
        </div>
      ))}

      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step7AdditionalSections;

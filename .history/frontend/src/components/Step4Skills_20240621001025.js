import React from 'react';
import './components.css';

const Step4Skills = ({ goToNextStep, goToPreviousStep, skills, setSkills,courses,set }) => {
  const handleChange = (section, index, e) => {
    const { value } = e.target;
    const newSkills = [...skills[section]];
    newSkills[index] = value;
    setSkills({
      ...skills,
      [section]: newSkills
    });
  };

  const addSkillItem = (section) => {
    setSkills({
      ...skills,
      [section]: [...skills[section], '']
    });
  };

  const deleteSkillItem = (section, index) => {
    const newSkills = [...skills[section]];
    newSkills.splice(index, 1);
    setSkills({
      ...skills,
      [section]: newSkills
    });
  };

  return (
    <div className="step-container">
      <h2>Courses and Tech Skills</h2>
      <form>
        <div className="skills-section">
          <label>Courses:</label>
          {skills.courses.map((course, index) => (
            <div key={index} className="skill-entry">
              <input
                type="text"
                value={course}
                onChange={(e) => handleChange('courses', index, e)}
                placeholder={`Course ${index + 1}`}
              />
              <button type="button" onClick={() => deleteSkillItem('courses', index)}>Delete</button>
            </div>
          ))}
          <button type="button" onClick={() => addSkillItem('courses')}>Add Another Course</button>
        </div>
        
        <div className="skills-section">
          <label>Technical Skills:</label>
          {skills.techSkills.map((techSkill, index) => (
            <div key={index} className="skill-entry">
              <input
                type="text"
                value={techSkill}
                onChange={(e) => handleChange('techSkills', index, e)}
                placeholder={`Technical Skill ${index + 1}`}
              />
              <button type="button" onClick={() => deleteSkillItem('techSkills', index)}>Delete</button>
            </div>
          ))}
          <button type="button" onClick={() => addSkillItem('techSkills')}>Add Another Skill</button>
        </div>
      </form>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step4Skills;

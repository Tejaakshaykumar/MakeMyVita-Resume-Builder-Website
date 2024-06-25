// import React from 'react';
// import './components.css';

// const Step4Skills = ({ goToNextStep, goToPreviousStep, skills, setSkills,courses,setCourses }) => {
//   const handleChange = (section, index, e) => {
//     const { value } = e.target;
//     const newSkills = [...skills];
//     newSkills[index] = value;
//     setSkills({
//       ...skills,
//       [section]: newSkills
//     });
//   };

//   const addSkillItem = (section) => {
//     setSkills({
//       ...skills,
//       [section]: [...skills[section], '']
//     });
//   };

//   const deleteSkillItem = (section, index) => {
//     const newSkills = [...skills[section]];
//     newSkills.splice(index, 1);
//     setSkills({
//       ...skills,
//       [section]: newSkills
//     });
//   };

//   return (
//     <div className="step-container">
//       <h2>Courses and Tech Skills</h2>
//       <form>
//         <div className="skills-section">
//           <label>Courses:</label>
//           {skills.courses.map((course, index) => (
//             <div key={index} className="skill-entry">
//               <input
//                 type="text"
//                 value={course}
//                 onChange={(e) => handleChange('courses', index, e)}
//                 placeholder={`Course ${index + 1}`}
//               />
//               <button type="button" onClick={() => deleteSkillItem('courses', index)}>Delete</button>
//             </div>
//           ))}
//           <button type="button" onClick={() => addSkillItem('courses')}>Add Another Course</button>
//         </div>
        
//         <div className="skills-section">
//           <label>Technical Skills:</label>
//           {skills.techSkills.map((techSkill, index) => (
//             <div key={index} className="skill-entry">
//               <input
//                 type="text"
//                 value={techSkill}
//                 onChange={(e) => handleChange('techSkills', index, e)}
//                 placeholder={`Technical Skill ${index + 1}`}
//               />
//               <button type="button" onClick={() => deleteSkillItem('techSkills', index)}>Delete</button>
//             </div>
//           ))}
//           <button type="button" onClick={() => addSkillItem('techSkills')}>Add Another Skill</button>
//         </div>
//       </form>
//       <div className="buttons">
//         <button onClick={goToPreviousStep}>Back</button>
//         <button onClick={goToNextStep}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Step4Skills;

import React from 'react';
import './components.css';

const Step4Skills = ({ goToNextStep, goToPreviousStep, skills, setSkills, courses, setCourses }) => {
  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...skills];
    newSkills[index] = {
      ...newSkills[index],
      [name]: value
    };
    setSkills(newSkills);
  };

  const handleCourseChange = (index, e) => {
    const { name, value } = e.target;
    const newCourses = [...courses];
    newCourses[index] = {
      ...newCourses[index],
      [name]: value
    };
    setCourses(newCourses);
  };

  const addSkillItem = () => {
    setSkills([...skills, { skillName: '', proficiency: '' }]);
  };

  const addCourseItem = () => {
    setCourses([...courses, { skillName: '', proficiency: '' }]);
  };

  const deleteSkillItem = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const deleteCourseItem = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  return (
    <div className="step-container">
      <h2>Courses and Tech Skills</h2>
      <form>
        <div className="skills-section">
          <label>Courses:</label>
          {courses.map((course, index) => (
            <div key={index} className="skill-entry">
              <input
                type="text"
                name="skillName"
                value={course.skillName}
                onChange={(e) => handleCourseChange(index, e)}
                placeholder={`Course ${index + 1}`}
              />
              <input
                type="text"
                name="proficiency"
                value={course.proficiency}
                onChange={(e) => handleCourseChange(index, e)}
                placeholder={`Proficiency ${index + 1}`}
              />
              <button type="button" onClick={() => deleteCourseItem(index)}>Delete</button>
            </div>
          ))}
          <button type="button" onClick={addCourseItem}>Add Another Course</button>
        </div>
        
        <div className="skills-section">
          <label>Technical Skills:</label>
          {skills.map((skill, index) => (
            <div key={index} className="skill-entry">
              <input
                type="text"
                name="skillName"
                value={skill.skillName}
                onChange={(e) => handleSkillChange(index, e)}
                placeholder={`Technical Skill ${index + 1}`}
              />
              <input
                type="text"
                name="proficiency"
                value={skill.proficiency}
                onChange={(e) => handleSkillChange(index, e)}
                placeholder={`Proficiency ${index + 1}`}
              />
              <button type="button" onClick={() => deleteSkillItem(index)}>Delete</button>
            </div>
          ))}
          <button type="button" onClick={addSkillItem}>Add Another Skill</button>
        </div>
      </form>
      <div className="buttons">
        <button type="button" onClick={goToPreviousStep}>Back</button>
        <button type="button" onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step4Skills;


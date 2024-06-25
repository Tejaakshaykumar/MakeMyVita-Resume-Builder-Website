// import React, { useState } from 'react';
// import './components.css';

// const Step7AdditionalSections = ({ goToNextStep, goToPreviousStep }) => {
//   const [additionalSections, setAdditionalSections] = useState({
//     achievements: [''],
//     awards: [''],
//     certifications: [''],
//     competitiveProgramming: ['']
//   });

//   const handleChange = (section, index, e) => {
//     const { value } = e.target;
//     const newSection = [...additionalSections[section]];
//     newSection[index] = value;
//     setAdditionalSections({
//       ...additionalSections,
//       [section]: newSection
//     });
//   };

//   const addSectionItem = (section) => {
//     setAdditionalSections({
//       ...additionalSections,
//       [section]: [...additionalSections[section], '']
//     });
//   };

//   const deleteSectionItem = (section, index) => {
//     const newSection = [...additionalSections[section]];
//     newSection.splice(index, 1);
//     setAdditionalSections({
//       ...additionalSections,
//       [section]: newSection
//     });
//   };

//   return (
//     <div className="step-container">
//       <h2>Additional Sections</h2>

//       {['achievements', 'awards', 'certifications', 'competitiveProgramming'].map((section) => (
//         <div key={section} className="additional-section">
//           <h3>{section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
//           {additionalSections[section].map((item, index) => (
//             <div key={index} className="section-item">
//               <input
//                 type="text"
//                 value={item}
//                 onChange={(e) => handleChange(section, index, e)}
//                 placeholder={`Enter ${section.slice(0, -1)} ${index + 1}`}
//               />
//               <button type="button" onClick={() => deleteSectionItem(section, index)}>Delete</button>
//             </div>
//           ))}
//           <button type="button" onClick={() => addSectionItem(section)}>Add Another {section.slice(0, -1)}</button>
//         </div>
//       ))}

//       <div className="buttons">
//         <button onClick={goToPreviousStep}>Back</button>
//         <button onClick={goToNextStep}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Step7AdditionalSections;

import React, { useState } from 'react';
import './components.css';

const Step7AdditionalSections = ({ goToNextStep, goToPreviousStep }) => {
  const [sections, setSections] = useState([{ 
    sectionName: '', 
    descriptions: ['']
  }]);

  const handleSectionNameChange = (index, e) => {
    const { value } = e.target;
    const newSections = [...sections];
    newSections[index].sectionName = value;
    setSections(newSections);
  };

  const handleDescriptionChange = (sectionIndex, descriptionIndex, e) => {
    const { value } = e.target;
    const newSections = [...sections];
    newSections[sectionIndex].descriptions[descriptionIndex] = value;
    setSections(newSections);
  };

  const addDescription = (sectionIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].descriptions.push('');
    setSections(newSections);
  };

  const deleteDescription = (sectionIndex, descriptionIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].descriptions.splice(descriptionIndex, 1);
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { sectionName: '', descriptions: [''] }]);
  };

  const deleteSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  return (
    <div className="step-container">
      <h2>Additional Sections</h2>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="additional-section">
          <input
            type="text"
            value={section.sectionName}
            onChange={(e) => handleSectionNameChange(sectionIndex, e)}
            placeholder="Enter Section Name"
          />
          {section.descriptions.map((description, descriptionIndex) => (
            <div key={descriptionIndex} className="section-item">
              <input
                type="text"
                value={description}
                onChange={(e) => handleDescriptionChange(sectionIndex, descriptionIndex, e)}
                placeholder={`Enter Description ${descriptionIndex + 1}`}
              />
              <button type="button" onClick={() => deleteDescription(sectionIndex, descriptionIndex)}>
                Delete
              </button>
              <button type="button" onClick={() => addDescription(sectionIndex)}>
                Add Another Description
              </button>
            </div>
          ))}
          <button type="button" onClick={() => deleteSection(sectionIndex)}>
            Delete Section
          </button>
        </div>
      ))}

      <button type="button" onClick={addSection}>Add Another Section</button>

      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step7AdditionalSections;


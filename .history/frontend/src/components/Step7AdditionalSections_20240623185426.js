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

import React from 'react';
import './components.css';

const Step7AdditionalDetails = ({ goToNextStep, goToPreviousStep, additionalDetails, setAdditionalDetails }) => {

  const handleSectionNameChange = (index, e) => {
    const { value } = e.target;
    const newDetails = [...additionalDetails];
    newDetails[index].sectionName = value;
    setAdditionalDetails(newDetails);
  };

  const handleDescriptionChange = (sectionIndex, descriptionIndex, e) => {
    const { value } = e.target;
    const newDetails = [...additionalDetails];
    newDetails[sectionIndex].descriptions[descriptionIndex] = value;
    setAdditionalDetails(newDetails);
  };

  const addDescription = (sectionIndex) => {
    const newDetails = [...additionalDetails];
    newDetails[sectionIndex].descriptions.push('');
    setAdditionalDetails(newDetails);
  };

  const deleteDescription = (sectionIndex, descriptionIndex) => {
    const newDetails = [...additionalDetails];
    newDetails[sectionIndex].descriptions.splice(descriptionIndex, 1);
    setAdditionalDetails(newDetails);
  };

  const addSection = () => {
    setAdditionalDetails([...additionalDetails, { sectionName: '', descriptions: [''] }]);
  };

  const deleteSection = (index) => {
    const newDetails = [...additionalDetails];
    newDetails.splice(index, 1);
    setAdditionalDetails(newDetails);
  };

  return (
    <div className="step-container">
      <h2>Additional Details</h2>

      {additionalDetails.map((detail, sectionIndex) => (
        <div key={sectionIndex} className="additional-section">
          <input
            type="text"
            value={detail.sectionName}
            onChange={(e) => handleSectionNameChange(sectionIndex, e)}
            placeholder="Enter Section Name"
          />
          {detail.descriptions.map((description, descriptionIndex) => (
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
              <br></br>
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
      <hr></hr>
      <button type="button" onClick={addSection}>Add Another Section</button>

      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step7AdditionalDetails;

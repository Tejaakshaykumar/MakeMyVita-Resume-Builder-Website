import React, { useState } from 'react';
import './components.css';

const Step3EducationDetails = ({ goToNextStep, goToPreviousStep }) => {
  const [educationDetails, setEducationDetails] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    graduationYear: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails({
      ...educationDetails,
      [name]: value
    });
  };

  return (
    <div className="step-container">
      <h2>Education Details</h2>
      <form>
        <label>School:</label>
        <input type="text" name="school" value={educationDetails.school} onChange={handleChange} />

        <label>Degree:</label>
        <input type="text" name="degree" value={educationDetails.degree} onChange={handleChange} />

        <label>Field of Study:</label>
        <input type="text" name="fieldOfStudy" value={educationDetails.fieldOfStudy} onChange={handleChange} />

        <label>Graduation Year:</label>
        <input type="text" name="graduationYear" value={educationDetails.graduationYear} onChange={handleChange} />
      </form>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step3EducationDetails;

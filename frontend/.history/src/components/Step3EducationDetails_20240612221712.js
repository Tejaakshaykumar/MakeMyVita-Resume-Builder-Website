import React, { useState } from 'react';
import './components.css';

const Step3EducationDetails = ({ goToNextStep, goToPreviousStep }) => {
  const [educationDetails, setEducationDetails] = useState([
    {
      school: '',
      degree: '',
      fieldOfStudy: '',
      graduationYear: '',
      cgpa: '',
      rollNo: '',
      department: '',
      institute: ''
    }
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducationDetails = [...educationDetails];
    newEducationDetails[index][name] = value;
    setEducationDetails(newEducationDetails);
  };

  const addEducation = () => {
    setEducationDetails([
      ...educationDetails,
      {
        school: '',
        degree: '',
        fieldOfStudy: '',
        graduationYear: '',
        cgpa: '',
        rollNo: '',
        department: '',
        institute: ''
      }
    ]);
  };

  return (
    <div className="step-container">
      <h2>Education Details</h2>
      {educationDetails.map((education, index) => (
        <div key={index} className="education-entry">
          <label>School/College/University:</label>
          <input type="text" name="school" value={education.school} onChange={(e) => handleChange(index, e)} />

          <label>Degree:</label>
          <input type="text" name="degree" value={education.degree} onChange={(e) => handleChange(index, e)} />

          <label>Field of Study:</label>
          <input type="text" name="fieldOfStudy" value={education.fieldOfStudy} onChange={(e) => handleChange(index, e)} />

          <label>Graduation Year:</label>
          <input type="text" name="graduationYear" value={education.graduationYear} onChange={(e) => handleChange(index, e)} />

          <label>CGPA/%:</label>
          <input type="text" name="cgpa" value={education.cgpa} onChange={(e) => handleChange(index, e)} />

          {/* <label>Roll Number:</label>
          <input type="text" name="rollNo" value={education.rollNo} onChange={(e) => handleChange(index, e)} />

          <label>Department:</label>
          <input type="text" name="department" value={education.department} onChange={(e) => handleChange(index, e)} />

          <label>Institute Name:</label>
          <input type="text" name="institute" value={education.institute} onChange={(e) => handleChange(index, e)} /> */}
        </div>
      ))}
      <button type="button" onClick={addEducation}>Add Another Education</button>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step3EducationDetails;

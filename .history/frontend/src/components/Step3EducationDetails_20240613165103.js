import React, { useState } from 'react';
import './components.css';

const Step3EducationDetails = ({ goToNextStep, goToPreviousStep }) => {
  // const [educationDetails, setEducationDetails] = useState([
  //   {
  //     school: '',
  //     degree: '',
  //     fieldOfStudy: '',
  //     graduationYear: '',
  //     cgpa: ''
  //   }
  // ]);

  const [studentDetails, setStudentDetails] = useState({
    rollNo: '',
    department: '',
    institute: ''
  });

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducationDetails = [...educationDetails];
    newEducationDetails[index][name] = value;
    setEducationDetails(newEducationDetails);
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({
      ...studentDetails,
      [name]: value
    });
  };

  const addEducation = () => {
    setEducationDetails([
      ...educationDetails,
      {
        school: '',
        degree: '',
        fieldOfStudy: '',
        graduationYear: '',
        cgpa: ''
      }
    ]);
  };

  return (
    <div className="step-container">
      <h2>Education Details</h2>
      {educationDetails.map((education, index) => (
        <div key={index} className="education-entry">
          <label>School/College/University:</label>
          <input type="text" name="school" value={education.school} onChange={(e) => handleEducationChange(index, e)} />

          <label>Degree:</label>
          <input type="text" name="degree" value={education.degree} onChange={(e) => handleEducationChange(index, e)} />

          <label>Field of Study:</label>
          <input type="text" name="fieldOfStudy" value={education.fieldOfStudy} onChange={(e) => handleEducationChange(index, e)} />

          <label>Graduation Year:</label>
          <input type="text" name="graduationYear" value={education.graduationYear} onChange={(e) => handleEducationChange(index, e)} />

          <label>CGPA/%:</label>
          <input type="text" name="cgpa" value={education.cgpa} onChange={(e) => handleEducationChange(index, e)} />
          <hr></hr>
        </div>
      ))}
      <button type="button" onClick={addEducation}>Add Another Education</button>
      <h2>Student Details</h2>
      <p>**only for the freshers**</p>
      <div className="student-details">
        <label>Roll Number:</label>
        <input type="text" name="rollNo" value={studentDetails.rollNo} onChange={handleStudentChange} />

        <label>Department:</label>
        <input type="text" name="department" value={studentDetails.department} onChange={handleStudentChange} />

        <label>Institute Name:</label>
        <input type="text" name="institute" value={studentDetails.institute} onChange={handleStudentChange} />
      </div>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step3EducationDetails;

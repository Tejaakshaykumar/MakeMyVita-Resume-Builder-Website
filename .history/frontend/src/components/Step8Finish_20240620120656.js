

// import React from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import axios from 'axios'; 
// import './components.css';

// const Step8Finish = ({ goToPreviousStep, personalDetails, educationDetails, skills, experiences, projects, imageSrc }) => {
//   const handleDownload = () => {
//     const input = document.getElementById('resume');

//     const saveData = async () => {
//       try {
//         const personalDetailsResponse = await axios.post('http://localhost:5000/api/resume/personal-details', personalDetails);
//         console.log('Personal Details saved successfully:', personalDetailsResponse.data);

//         const educationDetailsResponse = await axios.post('http://localhost:5000/api/resume/education-details', educationDetails);
//         console.log('Education Details saved successfully:', educationDetailsResponse.data);
    
//         const skillsResponse = await axios.post('http://localhost:5000/api/resume/skills', skills);
//         console.log('Skills saved successfully:', skillsResponse.data);
    
//         const experiencesResponse = await axios.post('http://localhost:5000/api/resume/experience', experiences);
//         console.log('Experiences saved successfully:', experiencesResponse.data);
    
//         const projectsResponse = await axios.post('http://localhost:5000/api/resume/projects', projects);
//         console.log('Projects saved successfully:', projectsResponse.data);
//       } catch (error) {
//         console.error('Error saving data:', error);
//       }
//     };

//     saveData().then(() => {
//       html2canvas(input).then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save('resume.pdf');
//       });
//     });
//   };

//   return (
//     <div className="step-container">
//       <h2>Finish</h2>
//       <p>Review your resume and click the download button to get your resume.</p>
//       <div className="buttons">
//         <button onClick={goToPreviousStep}>Back</button>
//         <button onClick={handleDownload}>Download</button>
//       </div>
//     </div>
//   );
// };

// export default Step8Finish;

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import './components.css';

const Step8Finish = ({ goToPreviousStep,handleSubmit }) => {


  const handleDownload = () => {
    const input = document.getElementById('resume');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('resume.pdf');
    });
  };
  return (
    <div className="step-container">
      <h2>Finish</h2>
      <p>Review your resume and click the download button to get your resume.</p>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={handleDownload ,handl}>Download</button>
      </div>
    </div>
  );
};

export default Step8Finish;
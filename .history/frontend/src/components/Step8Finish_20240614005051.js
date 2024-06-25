// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// import './components.css';

// const Step8Finish = ({ goToPreviousStep }) => {


//   const handleDownload = () => {
//     const input = document.getElementById('resume');
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 0, 0);
//       pdf.save('resume.pdf');
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

import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios'; // Added Axios
import './components.css';

const Step8Finish = ({ goToPreviousStep, personalDetails, educationDetails, skills, experiences, projects, imageSrc }) => {
  const handleDownload = () => {
    const input = document.getElementById('resume');

    // Send data to backend
    const saveData = async () => {
      try {
        
        const response = await axios.post('http://localhost:5000/api/resume', {
          personalDetails,
          educationDetails,
          skills,
          experiences,
          projects,
          imageSrc
        });
        console.log('Data saved successfully:', response.data);
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };

    saveData().then(() => {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('resume.pdf');
      });
    });
  };

  return (
    <div className="step-container">
      <h2>Finish</h2>
      <p>Review your resume and click the download button to get your resume.</p>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default Step8Finish;

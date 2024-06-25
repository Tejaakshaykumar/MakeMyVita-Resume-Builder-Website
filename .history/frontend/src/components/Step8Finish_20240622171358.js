
import React, { useState } from 'react'

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
        <button onClick={() => { handleSubmit(); }}>Download</button>
      </div>
    </div>
  );
};

export default Step8Finish;
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import FormPanel from './components/FormPanel';
// import Resume from './components/Resume';
import Temp1 from '../templates/temp1';
import './components.css';

const Step8Finish = ({ goToPreviousStep }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


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
      {/* <FormPanel formData={formData} handleChange={handleChange} /> */}
      {/* <Resume formData={formData} /> */}
      <
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default Step8Finish;

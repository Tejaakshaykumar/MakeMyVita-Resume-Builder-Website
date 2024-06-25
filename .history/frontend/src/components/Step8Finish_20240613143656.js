import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import FormPanel from './components/FormPanel';
import Resume from './components/Resume';
import './components.css';

const App = () => {
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


  return (
    <div className="App">
      <FormPanel formData={formData} handleChange={handleChange} />
      <Resume formData={formData} />
      <button onClick={handleDownload}>Download as PDF</button>
    </div>
  );
};

export default App;

const Step8Finish = ({ goToPreviousStep }) => {
  const handleDownload = () => {
    // Logic to handle downloading the resume
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

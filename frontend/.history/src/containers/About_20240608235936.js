import React from 'react';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  return (
    <div className="resume-builder-container">
      <div className="resume-builder-content">
        <h1>Your Ultimate Resume Building Tool</h1>
        <p>
          Our Resume Builder web app is designed to simplify the resume creation process. Featuring an easy-to-use interface and customizable templates, you can seamlessly input and format your personal and professional details. Whether you are a veteran in your field or just beginning your career, our app provides the tools necessary to craft an impressive resume.
        </p>
        <button className="create-now-button">Create Now</button>
      </div>
      <div className="resume-builder-image">
        <img src="/path/to/your/image.jpg" alt="Man holding resume" />
      </div>
    </div>
  );
};

export default ResumeBuilder;

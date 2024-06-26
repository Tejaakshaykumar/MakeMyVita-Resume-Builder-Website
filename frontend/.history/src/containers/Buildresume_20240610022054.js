import React from 'react';
import './cont.css';
import Image from '../images/Resources_2x.png';
const Buildresume = () => {
  return (
    <div className="resume-builder-container1">
      <div className="resume-builder-image" style={{width:'80vh'}}>
        <img src={Image} alt="Man holding resume" />
      </div>
      <div className="resume-builder-content1">
        <p>
        you can effortlessly input and format your personal and professional details, ensuring that your resume stands out. Whether you are a seasoned professional with years of experience or a fresh graduate just starting your career journey, our app equips you with the tools you need to create a compelling and polished resume.
        </p>
        <button className="aboutbutton" style={{marginLeft:'0%'
        }}>Build Your Resume</button>
      </div>
    </div>
  );
};

export default Buildresume;

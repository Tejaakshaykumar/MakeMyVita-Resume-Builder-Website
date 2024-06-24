import React from 'react';
import './cont.css';
import Image from '../images/Untitled design.png';
const About = () => {
  return (
    <div className="resume-builder-container">
      <div className="resume-builder-content">
        <h1>Your Ultimate Resume Building Tool</h1>
        <p>
          
          </p>
        <button className="aboutbutton">Create Now</button>
      </div>
      <div className="resume-builder-image">
        <img src={Image} alt="Man holding resume" />
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import './cont.css';
import Image from '../images/Untitled design.png';
const About = () => {
  return (
    <div className="resume-builder-container">
      <div className="resume-builder-content">
        <h1>Your Ultimate Resume Building Tool</h1>
        <p>
        Welcome to our <span style={{fontSize:'700'}}>Make My Vita</span> web app, your ultimate partner in crafting the perfect resume. Our platform is designed to streamline the resume creation process, offering a user-friendly interface coupled with a variety of customizable templates.  
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

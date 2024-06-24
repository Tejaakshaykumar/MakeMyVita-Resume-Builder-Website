import React from 'react';
import './cont.css';
// import Image from '../images/Resources_2x.png';
import Image from '../images/Untitled design.png';
const About = () => {
  return (
    <div className="resume-builder-container">
     <div className="resume-builder-image" style={{width:'80vh'}}>
        <img src={Image} alt="Man holding resume" />
      </div>
      <div className="resume-builder-content">
        <h1>Your Ultimate Resume Building Tool</h1>
        <p>
        Welcome to our <span style={{fontWeight:'700'}}>Make My Vita</span> web app, your ultimate partner in crafting the perfect resume. Our platform is designed to streamline the resume creation process, offering a user-friendly interface coupled with a variety of customizable templates.  
        {/* you can effortlessly input and format your personal and professional details, ensuring that your resume stands out. Whether you are a seasoned professional with years of experience or a fresh graduate just starting your career journey, our app equips you with the tools you need to create a compelling and polished resume. */}
        </p>
        <button className="aboutbutton">Create Now</button>
      </div>
    </div>
  );
};

export default About;

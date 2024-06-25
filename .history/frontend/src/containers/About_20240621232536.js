import React from 'react';
import './cont.css';
// import Image from '../images/Resources_2x.png';
import Image from '../images/Untitled design.png';
import { useNavigate } from 'react-router-dom';
import 
const About = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate('/resume');
  };
  return (
    <div className="resume-builder-container">
      <div className="resume-builder-content">
        <h1>Your Ultimate Resume Building Tool</h1>
        <p>
        Welcome to our <span style={{fontWeight:'700'}}>Make My Vita</span> web app, your ultimate partner in crafting the perfect resume. Our platform is designed to streamline the resume creation process, offering a user-friendly interface coupled with a variety of customizable templates.  
        </p>
        <button className="aboutbutton" onClick={handleCreate}>Create Now</button>
      </div>
      <div className="resume-builder-image" style={{width:'80vh'}}>
        <img src={Image} alt="Man holding resume" />
      </div>
    </div>
  );
};

export default About;

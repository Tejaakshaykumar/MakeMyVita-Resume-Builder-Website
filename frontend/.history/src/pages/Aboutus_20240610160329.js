import React from 'react';
import './pagestyles.css';
import aboutImage from '../images/pexels-adrien-olichon-2387793.jpg'; 

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-top">
        <img src={aboutImage} alt="About" className="about-image" />
        <div className="about-content">
          <h1>About Me: Building Your Dream Resume on makemyvita.com</h1>
          <p>Hey everyone!</p>
        <p>
          I'm Teja Akshay Kumar, a student passionate about making the job search process smoother for everyone.
        </p>
        <p>
          I created makemyvita.com because, let's be honest, building a resume can be a real pain. It's time-consuming, confusing, and often leaves you feeling frustrated.
        </p>
        <p>
          That's why I designed makemyvita.com specifically for students and job seekers like you and me. I want to help you craft a resume that stands out from the crowd and lands you the interview you deserve.
        </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;

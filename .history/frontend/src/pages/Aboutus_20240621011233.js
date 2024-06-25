import React from "react";
import "./pagestyles.css";
import aboutImage from "../images/pexels-adrien-olichon-2387793.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-top">
        <img src={aboutImage} alt="About" className="about-image" />
        <div className="about-content">
          <h1>About Me: Building Your Dream Resume on makemyvita.com</h1>
          <p>Hey everyone!</p>
          <p>
            I'm <span style={{fontWeight:'bolder',fontSize:'1.3rem'}}>Teja Akshay Kumar</span>, a student passionate about making the job
            search process smoother for everyone.
          </p>
          <p>
            I created makemyvita.com because, let's be honest, building a resume
            can be a real pain. It's time-consuming, confusing, and often leaves
            you feeling frustrated.
          </p>
          <p>
            That's why I designed makemyvita.com specifically for students and
            job seekers like you and me. I want to help you craft a resume that
            stands out from the crowd and lands you the interview you deserve.
          </p>
        </div>
      </div>
      <div className="about-bottom">
        
        <h2>
          Want to stay connected? Follow me on social media!
        </h2>
        <h3>Instagram: <a href='https://www.instagram.com' style={{textDecoration:'none'}}>teja_akshay_kumar</a></h3>
        <h3>Facebook: <a href='https://www.facebook.com' style={{textDecoration:'none'}}>teja akshay kumar</a></h3>
        {/* <h2>Why this is better:</h2>
        <p>
          Personal story: It connects with your audience by highlighting your
          experience as a student and your empathy for their struggles.
        </p>
        <p>
          Focus on benefits: You emphasize the value proposition of
          makemyvita.com - ease of use, modern templates, and customization.
        </p>
        <p>
          Call to action: A clear call to action encourages visitors to explore
          the platform.
        </p> */}
        <h1>
          Let's build your dream resume together! Sign up for a free account on
          makemyvita.com today.
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;

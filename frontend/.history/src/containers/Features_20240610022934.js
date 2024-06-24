import React from 'react';
import './cont.css';
import Images from './Images'; // Adjust the path if necessary

export default function Features() {
  return (
    <section>
      <div className='' style={{ height: "70vh", width: "100%", display: "flex", justifyContent: "flex-start", flexWrap: "wrap", paddingLeft: "8%", paddingRight: "8%" }}>
        <div className="feature">
          <img src={Images.logoImage1} alt="Step-by-Step Guidance" />
          <h3>Step-by-Step Guidance</h3>
          <p>Our step-by-step wizard guides you through the entire resume-building process. Receive tips and examples at each stage to ensure your resume includes all the critical information employers are looking for.</p>
        </div>
        <div className="feature">
          <img src={Images.logoImage2} alt="Professional Templates" />
          <h3>Professional Templates</h3>
          <p>Choose from a variety of professionally designed templates. Whether you're in a creative field or a more traditional industry, we have a template to match your style and enhance your resume's impact.</p>
        </div>
        <div className="feature">
          <img src={Images.logoImage3} alt="Easy Customization" />
          <h3>Easy Customization</h3>
          <p>Customize every aspect of your resume with ease. From fonts and colors to section order and content, our user-friendly interface allows you to personalize your resume to reflect your unique personality and career goals.</p>
        </div>
        <div className="feature">
          <img src={Images.logoImage4} alt="Live Preview" />
          <h3>Live Preview</h3>
          <p>Instantly see how your resume looks as you build it. Our live preview feature allows you to make adjustments in real-time, ensuring your resume is perfect before you download or share it.</p>
        </div>
        <div className="feature">
          <img src={Images.logoImage5} alt="Multiple File Formats" />
          <h3>Multiple File Formats</h3>
          <p>Download your resume in various formats, including PDF, DOCX, and TXT. This flexibility allows you to meet different application requirements with ease.</p>
        </div>
        <div className="feature">
          <img src={Images.logoImage6} alt="Secure Storage" />
          <h3>Secure Storage</h3>
          <p>Save your resumes securely in our cloud storage. Access and update your resumes anytime, from any device, without worrying about losing your work.</p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './temp1.css'; 
import personalDetails from '../'
const Temp1 = () => {
  return (
    <div className="resume-container" id='resume'>
      <div className="left-panel">
        <div className="profile-pic">
          <img src="images.jpg" alt="Profile Picture" />
        </div>
        <hr />
        <div className="contact-info">
          <h2>CONTACT</h2>
          <p><span className="icon">&#128222;</span> 123.456.7890</p>
          <p><span className="icon">&#9993;</span> youremailhere@gmail.com</p>
          <p><span className="icon">&#127968;</span> City, State</p>
          <p><span className="icon">&#127760;</span> yourwebsitehere.com</p>
        </div>
        <hr />
        <div className="education">
          <h2>EDUCATION</h2>
          <h3>Master's Degree</h3>
          <p>Education</p>
          <p>University Name</p>
          <p>2013 - 2015</p>
          <h3>Bachelor of Science</h3>
          <p>Education</p>
          <p>University Name</p>
          <p>2010 - 2013</p>
        </div>
        <hr />
        <div className="skills">
          <h2>PROFESSIONAL SKILLS</h2>
          <ul>
            <li>Attention to Detail</li>
            <li>Leadership</li>
            <li>Negotiation</li>
            <li>Accountability</li>
            <li>Risk Management</li>
            <li>IT Applications</li>
            <li>Business Planning</li>
          </ul>
        </div>
      </div>
      <div className="right-panel">
        <h1 style={{ fontSize: '6vh', fontFamily: 'Trebuchet MS' }}>ELIZABETH WILSON</h1>
        <h2>MARKETING MANAGER</h2>
        <hr />
        <div className="experience">
          <h2>EXPERIENCE</h2>
          <h3>POSITION TITLE HERE</h3>
          <p style={{ fontSize: '0.8rem', padding: '0%' }}>Company / Location / Date Range</p>
          <ul>
            <li>Highlight your most relevant qualifications for the job by listing them first in the job description.</li>
            <li>While it is important to keep descriptions short, adding tion.</li>
            <li>Employers want to know what you accomplished. Make it easy for them to see what you've done by using numbers and percentages.</li>
            <li>For example: Negoomer annual transportation savings of over $500,000 per year.</li>
          </ul>
          <hr />
          <h2>PROJECTS</h2>
          <h3>PROJECT 1 TITLE HERE</h3>
          <ul>
            <li>Highlight your most relevant qualifications for the job by listing</li>
            <li>While it is important to keep descriptions short, adding details and atch for the position.</li>
            <li>Employers want to know what you accomplished. Make it easy for them to s.</li>
            <li>For example: Negotiated pricing points for customers on a in customer annual transportation savings of over $500,000 per year.</li>
          </ul>
          <h3>PROJECT 2 TITLE HERE</h3>
          <ul>
            <li>Highlight your most relevant qualifications for the job by listing</li>
            <li>While it is important to keep descriptions short, adding details and atch for the position.</li>
            <li>Employers want to know what you accomplished. Make it easy for them to s.</li>
            <li>For example: Negotiated pricing points for customers on a in customer annual transportation savings of over $500,000 per year.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Temp1;

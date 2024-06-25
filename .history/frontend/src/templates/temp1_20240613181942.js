import React from 'react';
import './temp1.css'; 

const Temp1 = ({ personalDetails,educationDetails,skills,experiences,projects }) => {
  
  return (
    <div className="resume-container" id='resume'>
      <div className="left-panel">
        <div className="profile-pic">
          <img src="images.jpg" alt="Profile Picture" />
        </div>
        <hr />
        <div className="contact-info">
          <h2>CONTACT</h2>
          <p><span className="icon">&#128222;</span>{personalDetails.phone || '123-456-7890'}</p>
          <p><span className="icon">&#9993;</span>{personalDetails.professionalEmail || 'youremailhere@gmail.com'} </p>
          <p><span className="icon">&#127968;</span>{personalDetails.city || 'City'},{personalDetails.state || 'State'},{personalDetails.country || 'Country'}</p>
          <p><span className="icon">&#127760;</span>{personalDetails.website || 'yourwebsitehere.com'} </p>
        </div>
        <hr />
        <div className="education">
          <h2>EDUCATION</h2>
          {educationDetails.map((education, index) => (
            <div key={index}>
              <h3>{education.school || 'Degree'}</h3>
              <p>{education.degree || 'Field of Study'}</p>
              <p>{education.fieldOfStudy || 'Institution'}</p>
              <p>{education.graduationYear || 'Graduation Year'}</p>
              <p>{education.cgpa || 'CGPA/Percentage'}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="skills">
          <h2>COURSES</h2>
          <ul>
          {skills.courses.map((course, index) => (
            <li key={index}>{course || 'data Structures'}</li>
          ))}
          </ul>
          <h2>TECHNICAL SKILLS</h2>
          <ul>
          {skills.techSkills.map((techSkill, index) => (
            <li key={index}>{techSkill || 'JAVA'}</li>
          ))}
          </ul>
        </div>
  
      </div>
      <div className="right-panel">
        <h1 style={{ fontSize: '6vh', fontFamily: 'Trebuchet MS' }}>{ (personalDetails.firstName || personalDetails.lastName) ? `${personalDetails.firstName} ${personalDetails.lastName}` : 'ELIZABETH WILSON'}</h1>
        <h2>{personalDetails.role || 'MARKETING MANAGER'}</h2>
        <hr />
        <div className="experience">
          <h2>EXPERIENCE</h2>
          {experiences.map((experience, index) => (
            <div key={index}>
              <h3>{experience.jobTitle || 'POSITION TITLE HERE'}</h3>
              <p style={{ fontSize: '0.8rem', padding: '0%' }}>{experience.companyName || 'Company / Location '} / {experience.endDate || ' endDate'}</p>
              <ul>
                <li>{experience.jobDescription || 'Highlight your most relevant qualifications for the job by listing them first in the job description.'} </li>
              </ul>
            </div>
          ))}
          {/* <h3>POSITION TITLE HERE</h3>
          <p style={{ fontSize: '0.8rem', padding: '0%' }}>Company / Location / Date Range</p>
          <ul>
            <li>Highlight your most relevant qualifications for the job by listing them first in the job description.</li>
            <li>While it is important to keep descriptions short, adding tion.</li>
            <li>Employers want to know what you accomplished. Make it easy for them to see what you've done by using numbers and percentages.</li>
            <li>For example: Negoomer annual transportation savings of over $500,000 per year.</li>
          </ul> */}
          <hr />
          <h2>PROJECTS</h2>
          {projects.map((project, index) => (
            <div key={index}>
              <h3>{project.projectName || 'PROJECT TITLE HERE'}</h3>
              <p style={{ fontSize: '0.8rem', padding: '0%' }}>{project.projectLink || 'project Link'} / {project.submissionDate || 'submission Date'}</p>
              <ul>
                <li>{project.projectDescription || 'Highlight your most relevant qualifications for the job by listing'} </li>
              </ul>
            </div>
          {/* <h3>PROJECT 1 TITLE HERE</h3>
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
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Temp1;


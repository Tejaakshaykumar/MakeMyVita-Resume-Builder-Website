import React,{ useEffect, useState } from 'react';
import './temp1.css'; 
const Temp1 = ({ personalDetails,imageSrc,educationDetails,skills,courses,experiences,projects,ResumeDetails,Resume,additionalDetails,studentDetails }) => {
  const templateStyle = {
    color: Resume?Resume.fontColor:ResumeDetails.fontColor,
    fontFamily: Resume?Resume.fontFamily: ResumeDetails.fontFamily,
  };
  const templateColor ={
    background: Resume?Resume.templateColor :ResumeDetails.templateColor
  }
  const nl2br = (str) => {
    return str.split('\n').map((line, index, array) => (
      <>
        {line}
        {index < array.length - 1 && <br />}
      </>
    ));
  };
  return (
    <div className="resume-container" id='resume' style={templateStyle}>
      <div className="left-panel" style={templateColor}>
        <div className="profile-pic">
        <img src={imageSrc} alt="Profile" />
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
              <h3>{education.instituteName || 'Degree'}</h3>
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
          {courses.map((course, index) => (
            <li key={index}>{course.skillName || 'data Structures'}</li>
          ))}
          </ul>
          <h2>TECHNICAL SKILLS</h2>
          <ul>
          {skills.map((techSkill, index) => (
            <li key={index}>{techSkill.skillName || 'JAVA'}</li>
          ))}
          </ul>
        </div>
  
      </div>
      <div className="right-panel">
        <h1 style={{ fontSize: '6vh',  }}>{ (personalDetails.firstName || personalDetails.lastName) ? `${personalDetails.firstName} ${personalDetails.lastName}` : 'ELIZABETH WILSON'}</h1>
        <h2>{personalDetails.role || 'MARKETING MANAGER'}</h2>
        <hr />
        <div className="experience">
          <h2>EXPERIENCE</h2>
          {experiences.map((experience, index) => (
            <div key={index}>
              <h3>{experience.jobTitle || 'POSITION TITLE HERE'}</h3>
              <p style={{ fontSize: '0.8rem', padding: '0%' }}>{experience.companyName || 'Company / Location '} / {experience.endDate || ' endDate'}</p>
              <ul>
                <li>{nl2br(experience.jobDescription) || ('Highlight your most relevant qualifications for the job by listing them first in the job description.')} </li>
              </ul>
            </div>
          ))}
          
          <hr />
          <h2>PROJECTS</h2>
          {projects.map((project, index) => (
            <div key={index}>
              <h3>{project.projectName || 'PROJECT TITLE HERE'}</h3>
              <p style={{ fontSize: '0.8rem', padding: '0%' }}>{project.projectLink || 'project Link'} / {project.submitDate || 'submission Date'}</p>
              <ul>
                <li>{nl2br(project.projectDescription) || ('Highlight your most relevant qualifications for the job by listing')} </li>
              </ul>
            </div>
          ))}
          
           <hr />
          <h2>ADDITIONAL DETAILS</h2>
          {additionalDetails.map((section, index) => (
            <div key={index}>
              <h3>{section.sectionName || 'Section Title Here'}</h3>
              <ul>
                {section.descriptions.map((description, descIndex) => (
                  <li key={descIndex}>{description || 'Description here'}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Temp1;


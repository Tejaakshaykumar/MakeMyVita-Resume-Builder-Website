import React from 'react';
import defaultimg from '../images/images.jpg';

const Temp5 = ({ personalDetails, imageSrc, educationDetails, skills, experiences, projects }) => {
  return (
    <div className="resume-container" id="resume">
      <header>
        <img src={imageSrc || defaultimg} alt="Profile" className="profile-pic" />
        <h1>{`${personalDetails.firstName} ${personalDetails.lastName}` || 'Name'}</h1>
        <h2>{personalDetails.role || 'Role'}</h2>
      </header>
      <div className="contact-info">
        <p>{personalDetails.phone || 'Phone'}</p>
        <p>{personalDetails.professionalEmail || 'Email'}</p>
      </div>
      <div className="education">
        <h2>Education</h2>
        {educationDetails.map((edu, index) => (
          <p key={index}>{edu.degree}, {edu.school}</p>
        ))}
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.techSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <p key={index}>{exp.jobTitle}, {exp.companyName}</p>
        ))}
      </div>
      <div className="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <p key={index}>{project.projectName}</p>
        ))}
      </div>
    </div>
  );
}

export default Temp6;

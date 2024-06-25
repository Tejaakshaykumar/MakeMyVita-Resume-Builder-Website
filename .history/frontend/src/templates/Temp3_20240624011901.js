import React from 'react';
import './temp3.css';

const Temp3 = ({
  personalDetails,
  imageSrc,
  educationDetails,
  skills,
  courses,
  experiences,
  projects,
  ResumeDetails,
  Resume,
  additionalDetails,
}) => {
  const templateStyle = {
    color: Resume ? Resume.fontColor : ResumeDetails.fontColor,
    fontFamily: Resume ? Resume.fontFamily : ResumeDetails.fontFamily,
  };
  const templateColor = {
    background: Resume ? Resume.templateColor : ResumeDetails.templateColor,
  };

  const nl2br = (str) => {
    return str.split('\n').map((line, index, array) => (
      <>
        {line}
        {index < array.length - 1 && <br />}
      </>
    ));
  };

  return (
    <div className="container" style={templateStyle}>
      <div className="sidebar" style={templateColor}>
        <img src={imageSrc} alt={personalDetails.fullName || 'Profile Image'} className="profile-img" />
        <h1>{`${personalDetails.firstName || 'First'} ${personalDetails.lastName || 'Last'}`}</h1>
        <h2>{personalDetails.role || 'Job Title'}</h2>
        <address>
          {nl2br(personalDetails.address || 'Your Address')}<br />
          {personalDetails.phone || '123-456-7890'}<br />
          {personalDetails.professionalEmail || 'youremail@example.com'}
        </address>
        <div className="key-skills">
          <h3>Key Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill.skillName || 'Skill'}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main-content">
        <section className="summary">
          <p>{nl2br(personalDetails.summary || 'A brief summary about yourself.')}</p>
        </section>
        <section className="experience">
          <h3>Professional Experience</h3>
          {experiences.map((experience, index) => (
            <div key={index}>
              <h4>{experience.jobTitle || 'POSITION TITLE HERE'}</h4>
              <p style={{ fontSize: '0.8rem', padding: '0%' }}>
                {experience.companyName || 'Company / Location'} / {experience.endDate || 'End Date'}
              </p>
              <ul>
                <li>{nl2br(experience.jobDescription) || 'Highlight your most relevant qualifications for the job by listing them first in the job description.'}</li>
              </ul>
            </div>
          ))}
        </section>
        <section className="education">
          <h3>Education</h3>
          {educationDetails.map((education, index) => (
            <div key={index}>
              <p>
                {education.instituteName || 'Institute Name'}<br />
                {education.degree || 'Degree'}, {education.fieldOfStudy || 'Field of Study'}<br />
                {education.graduationYear || 'Graduation Year'}<br />
                CGPA: {education.cgpa || 'CGPA/Percentage'}
              </p>
            </div>
          ))}
        </section>
        <section className="certifications">
          <h3>Courses</h3>
          <ul>
            {courses.map((course, index) => (
              <li key={index}>{course.skillName || 'Course Name'}</li>
            ))}
          </ul>
        </section>
        <section className="projects">
          <h3>Projects</h3>
          {projects.map((project, index) => (
            <div key={index}>
              <h4>{project.projectName || 'Project Title'}</h4>
              <p style={{ fontSize: '0.8rem', padding: '0%' }}>
                {project.projectLink || 'Project Link'} / {project.submitDate || 'Submission Date'}
              </p>
              <ul>
                <li>{nl2br(project.projectDescription) || 'Project Description'}</li>
              </ul>
            </div>
          ))}
        </section>
        <section className="additional-details">
          <h3>Additional Details</h3>
          {additionalDetails.map((section, index) => (
            <div key={index}>
              <h4>{section.sectionName || 'Section Title'}</h4>
              <ul>
                {section.descriptions.map((description, descIndex) => (
                  <li key={descIndex}>{description || 'Description'}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Temp3;

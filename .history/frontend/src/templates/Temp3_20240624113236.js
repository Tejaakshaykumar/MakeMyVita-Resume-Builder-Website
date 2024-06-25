import React from 'react';
import './nitw.css'; 
import image from "../images/nitwlogo.png";

const Temp2 = ({
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
  studentDetails,
}) => {
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
    <div className="resume" id="resume" style={{...templateStyle, ...templateColor}}>
      <header className="header">
        <div className="top-left">
          <div className="image">
            <img src={imageSrc} alt="nitwlogo" />
          </div>
          <div className="myself">
            <h1>{`${personalDetails.firstName || 'firstName'} ${personalDetails.lastName || 'lastName'}`}</h1>
            <p>{personalDetails.role || 'role'}</p>
          </div>
        </div>
        <div className="top-right">
          <p><i class="bi bi-telephone-fill"></i> {personalDetails.phone || '123-456-7890'}</p>
          <p><i class="bi bi-envelope-fill"></i> {personalDetails.professionalEmail || 'youremailhere@gmail.com'}</p>
          <p><i class="bi bi-envelope-fill"></i> {personalDetails.studentEmail || 'studentemail@student.com'}</p>
          <p><i class="bi bi-github"></i> GitHub: {personalDetails.github || 'GitHub Username'}</p>
          <p><i class="bi bi-linkedin"></i> LinkedIn: {personalDetails.linkedin || 'LinkedIn Profile'}</p>
        </div>
      </header>

      <section className="education">
        <h2>Education</h2>
        <ul>
          {educationDetails.map((education, index) => (
            <li key={index} className="edu">
              <div className="l">
                <strong>{education.instituteName || 'Institute Name'}</strong>
                <p>{education.degree || 'Degree'}</p>
              </div>
              <div className="r">
                <p>{education.graduationYear || 'Graduation Year'}</p>
                <p>CGPA: {education.cgpa || 'CGPA'}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="education">
        <h2>Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}><strong>{course.skillName || 'Course Name'}</strong></li>
          ))}
        </ul>
      </section>

      <section className="education">
        <h2>Technical Skills</h2>
        <ul>
          {skills.map((techSkill, index) => (
            <li key={index}>
              <strong>{techSkill.skillName || 'Skill Name'}</strong>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="education">
        <h2>Experience</h2>
        <ul>
          {experienceDetails.map((experience, index) => (
            <li key={index} className="edu">
              <div className="l">
                <strong>{experience.companyName || 'Institute Name'}</strong>
                <p>{experience.jobTitle || 'Degree'}</p>
                
              </div>
              <div className="r">
                <p>{experience.graduationYear || 'Graduation Year'}</p>
                <p>CGPA: {education.cgpa || 'CGPA'}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="education">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <strong>{project.projectName || 'projectName'}</strong>
            <p>{project.submitDate || 'Submission Date'}</p>
            <p>{project.projectLink || 'Project Link'}</p>
            <ul>
              <li>{nl2br(project.projectDescription) || 'Project Description'}</li>
            </ul>
          </div>
        ))}
      </section>

        {additionalDetails.map((section, index) => (
          <section className="education" key={index}>
            <h2>{section.sectionName || 'Section Title'}</h2>
            <ul>
              {section.descriptions.map((description, descIndex) => (
                <li key={descIndex}>{description || 'Description'}</li>
              ))}
            </ul>
          </section>
        ))}
    </div>
  );
};

export default Temp2;


import React from 'react';
import './nitw.css'; 

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
            <img src={imageSrc} alt="nitwlogo" style={{width:'1.5in'}}/>
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
          {experiences.map((experience, index) => (
            <li key={index} className="edu">
              <div className="l">
                <strong>{experience.companyName || 'companyName'}</strong>
                <p>{experience.jobTitle || 'jobTitle'}</p>
                <ul>
                  <li>{nl2br(experience.jobDescription) || 'jobDescription'}</li>
                </ul>
              </div>
              <div className="r">
                <p>End Date:{experience.startDate || 'date'}</p>
                <p>Start Date: {experience.endDate || 'date'}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="education">
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="edu">
              <div className="l">
                <strong>{project.projectName || 'projectName'}</strong>
                <p>{project.projectLink || 'projectLink'}</p>
                <ul>
                  <li>{nl2br(project.projectDescription) || 'projectDescription'}</li>
                </ul>
              </div>
              <div className="r">
                <p>Submit Date:{project.submitDate || 'date'}</p>
              </div>
            </li>
          ))}
        </ul>
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


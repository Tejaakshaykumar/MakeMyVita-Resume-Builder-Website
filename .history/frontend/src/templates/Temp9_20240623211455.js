import React from 'react';
import './nitw.css'; // Assuming you have a temp1.css file for styling
import image from "../images/nitwlogo.png";

const Temp9 = ({
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
    color: ResumeDetails?ResumeDetails.fontColor: Resume.fontColor,
    fontFamily: ResumeDetails? ResumeDetails.fontFamily: Resume.fontFamily,
  };
  const style={templateStyle} ={
    background: ResumeDetails?ResumeDetails.templateColor : Resume.templateColor 
  }
  return (
    <div className="resume" id="resume" style={{templateStyle style={templateStyle}}}>
      <header className="header">
        <div className="top-left">
          <div className="image">
            <img src={image} alt="nitwlogo" />
          </div>
          <div className="myself">
            <h1>{`${personalDetails.firstName || 'firstName'} ${personalDetails.lastName || 'lastName'}`}</h1>
            <p>Roll No.:{studentDetails.rollNo || 'your RollNo'}</p>
            <p>{studentDetails.degree || 'Degree'}</p>
            <p>{studentDetails.department || 'Field of Study'}</p>
            <p>{studentDetails.institute || 'Institute'}</p>
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
            <li key={index}>
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
            <li key={index}>{course.skillName || 'Course Name'}</li>
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
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <strong>{project.projectName || 'projectName'}</strong>
            {/* {project.submitDate || 'Submission Date'} */}
            <p>{project.projectLink || 'Project Link'}</p>
            <ul>
              <li>{project.projectDescription || 'Project Description'}</li>
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

export default Temp9;

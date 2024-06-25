// import React from 'react';
// import './temp2.css';

// const SaanviPatelResume1 = () => {
//   return (
//     <div className="container">
//       <div className="resume-header">
//         <div>
//           <h1>Saanvi Patel</h1>
//           <div className="contact-info">
//             <a href="mailto:saanvipatel@sample.in">saanvipatel@sample.in</a>
//             <span>+91 22 1234 5677</span>
//             <span>New Delhi, India 110034</span>
//           </div>
//         </div>
//       </div>
//       <div className="section">
//         <div className="section-title">Professional Summary</div>
//         <p>Motivated Sales Associate with 5 years of experience boosting sales and customer loyalty through individualized service. Resourceful expert at learning customer needs, directing to desirable merchandise and upselling to meet sales quotas. Committed to strengthening customer experiences with positivity and professionalism when answering requests and processing sales.</p>
//       </div>
//       <div className="section">
//         <div className="section-title">Skills</div>
//         <ul className="skill-list">
//           <li>Store opening and closing</li>
//           <li>Sales expertise</li>
//           <li>Accurate Money Handling</li>
//           <li>Store Merchandising</li>
//           <li>Loss prevention</li>
//           <li>Product promotions</li>
//           <li>Guest Services</li>
//           <li>Point of Sale Systems</li>
//         </ul>
//       </div>
//       <div className="section">
//         <div className="section-title">Work History</div>
//         <h3>H&M - Retail Sales Associate</h3>
//         <p>New Delhi • 05/2016 - Current</p>
//         <ul>
//           <li>Effectively upsold products by introducing accessories and other add-ons, adding ₹3000 to average monthly sales.</li>
//           <li>Generated brand awareness and positive product impressions to increase sales 22%.</li>
//           <li>Used consultative sales approach to understand customer needs and recommend relevant offerings.</li>
//         </ul>
//         <h3>Starbucks - Barista</h3>
//         <p>New Delhi • 01/2015 - 03/2016</p>
//         <ul>
//           <li>Created over 60 drinks per hour with consistently positive customer satisfaction scores.</li>
//           <li>Learned every menu preparation and numerous off-label drinks to meet all customer needs.</li>
//           <li>Upsold baked goods and extra shots with beverages, increasing store sales ₹3800 per month.</li>
//         </ul>
//       </div>
//       <div className="section">
//         <div className="section-title">Education</div>
//         <p>Oxford Software Institute & Oxford School of English</p>
//         <p>New Delhi, India • June 2016</p>
//         <p>Diploma: Financial Accounting</p>
//       </div>
//       <div className="section">
//         <div className="section-title">Languages</div>
//         <ul className="language-list">
//           <li>Hindi: Native Language</li>
//           <li>English: Proficient (C2)</li>
//           <li>Bengali: Upper Intermediate (B2)</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SaanviPatelResume1;

import React from 'react';
import './nitw.css'; 
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
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <strong>{project.projectName || 'projectName'}</strong>
            {/* {project.submitDate || 'Submission Date'} */}
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

export default Temp9;


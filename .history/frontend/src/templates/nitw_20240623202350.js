// import React from "react";
// import "./temp2.css";
// import image from "../images/nitwlogo.png";

// const Temp2 = () => {
//   return (
//     <div className="resume" id="resume">
//       <header className="header">
//         <div className="top-left">
//           <div className="image">
//             <img src={image}></img>
//           </div>
//           <div className="myself">
//             <h1>Dhyey Gokani</h1>
//             <p>Roll No.: 21CSB0A19</p>
//             <p>Bachelor of Technology</p>
//             <p>Computer Science and Engineering</p>
//             <p>National Institute Of Technology, Warangal</p>
//           </div>
//         </div>
//         <div className="top-right">
//           <p>📞 +91-8347087029</p>
//           <p>✉️ dhyeygokani2312@gmail.com</p>
//           <p>✉️ gd21csb0a19@student.nitw.ac.in</p>
//           <p>GitHub: Dhyeygokani</p>
//           <p>LinkedIn: Dhyey Gokani</p>
//         </div>
//       </header>

//       <section className="education">
//         <h2>Education</h2>
//         <ul>
//           <li className="edu">
//             <div className="l">
//             <strong>National Institute of Technology, Warangal</strong>
//             <p>BTech in Computer Science and Engineering</p>
//             </div>
//             <div  className="r">
//             <p>2021-present </p>
//             <p> CGPA: 9.24</p>
//             </div>
//           </li>
          
//           <li className="edu">
//             <div  className="l">
//             <strong>Modi School</strong>
//             <p>Class XII, GHSEB (Gujarat State Board)</p>
//             </div>
//             <div  className="r">
//             <p>2021 </p>
//             <p> Percentile Rank: 99.98</p>
//             </div>
//           </li>
//           <li className="edu">
//             <div  className="l">
//             <strong>G.T. Sheth School</strong>
//             <p>Class X, GHSEB (Gujarat State Board)</p>
//             </div>
//             <div  className="r">
//             <p>2019 </p>
//             <p> Percentile Rank: 99.99</p>
//             </div>
//           </li>
//         </ul>
//       </section>

//       <section className="education">
//         <h2>Courses</h2>
//         <ul>
//           <li>Data Structures</li>
//           <li>Object Oriented Programming (JAVA)</li>
//           <li>Design and Analysis of Algorithm</li>
//           <li>Database Management System (DBMS)</li>
//         </ul>
//       </section>

//       <section className="education">
//         <h2>Technical Skills</h2>
//         <ul>
//           <li>
//             <strong>Programming:</strong> C++, JAVA, SQL
//           </li>
//           <li>
//             <strong>Development:</strong> HTML, CSS, Django (Back end)
//           </li>
//         </ul>
//       </section>

//       <section className="education">
//         <h2>Competitive Programming</h2>
//         <ul>
//           <li>
//             <strong>Codeforces:</strong> Highest Rating: 1606 (Expert) -
//             dhyey_gokani
//           </li>
//           <li>
//             <strong>Codechef:</strong> Highest Rating: 1862 (4 STAR) -
//             dhyey_gokani11
//           </li>
//           <li>
//             <strong>Leetcode:</strong> Highest Rating: 1950 (Knight) -
//             Dhyey_Gokani
//           </li>
//           <li>
//             <strong>Global Rank 61</strong> in Codechef Starters 76 (Div 4) - 1
//             Feb, 2023
//           </li> 
//         </ul>
//       </section>

//       <section className="education">
//         <h2>Projects</h2>
//         <ul>
//           <li>
//             <strong>Database for UPI Payment</strong> (April, 2023)
//             <p>DBMS group project developed using SQL</p>
//             <p>
//               Designed an entity-relationship (ER) model and corresponding
//               relational model. Database containing important data regarding
//               bank accounts, UPI users, transactions, merchants, and numerous
//               services such as ticket booking, bill payment, and more. For more
//               details checkout here
//             </p>
//           </li>
//           <li>
//             <strong>E-Commerce Website: One-Click Pick</strong> (June, 2023)
//             <p>
//               E-commerce website developed using HTML, CSS, Bootstrap, and
//               Django
//             </p>
//             <p>
//               Shopping section allows users to browse a variety of products,
//               place orders, and track their orders. The blog section allows
//               users to express their thoughts by writing blogs. For more
//               information click here
//             </p>
//           </li>
//         </ul>
//       </section>

//       <section className="education">
//         <h2>Achievements</h2>
//         <ul>
//           <li>Institute Merit Scholarship, NITW (2022-2023)</li>
//           <li>JEE MAIN AIR 1278 and JEE Advance AIR 3482 (2021)</li>
//           <li>Qualified KVPY examination with AIR 1340 (2020-2021)</li>
//           <li>Gujarat 1st in Class X and 2nd in Class XII (2019, 2021)</li>
//         </ul>
//       </section>

//       <section className="education">
//         <h2>Positions of Responsibility</h2>
//         <ul>
//           <li>Executive member of FINVIZ club, NITW (2022-present)</li>
//           <li>
//             Executive member of Dance and Dramatics (DND) club (2022-present)
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Temp2;

import React from 'react';
import './nitw.css'; // Assuming you have a temp1.css file for styling
import defaultimg from '../images/images.jpg'; // Import your default image here if needed

const Temp1 = ({
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
  return (
    <div className="resume" id="resume">
      <header className="header">
        <div className="top-left">
          <div className="image">
            <img src={imageSrc || defaultimg} alt="Profile" />
          </div>
          <div className="myself">
            <h1>{`${personalDetails.firstName || ''} ${personalDetails.lastName || ''}`}</h1>
            <p>{personalDetails.role || 'Role'}</p>
            <p>{personalDetails.degree || 'Degree'}</p>
            <p>{personalDetails.fieldOfStudy || 'Field of Study'}</p>
            <p>{personalDetails.instituteName || 'Institute'}</p>
          </div>
        </div>
        <div className="top-right">
          <p>📞 {personalDetails.phone || '123-456-7890'}</p>
          <p>✉️ {personalDetails.professionalEmail || 'youremailhere@gmail.com'}</p>
          <p>✉️ {personalDetails.studentEmail || 'studentemail@student.com'}</p>
          <p>GitHub: {personalDetails.github || 'GitHub Username'}</p>
          <p>LinkedIn: {personalDetails.linkedin || 'LinkedIn Profile'}</p>
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
              <strong>{techSkill.skillName || 'Skill Name'}</strong>: {techSkill.skillDetails || 'Skill Details'}
            </li>
          ))}
        </ul>
      </section>

      <section className="education">
        <h2>Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.jobTitle || 'Job Title'}</h3>
            <p>{experience.companyName || 'Company Name'}</p>
            <p>{experience.startDate} - {experience.endDate}</p>
            <ul>
              <li>{experience.jobDescription || 'Job Description'}</li>
            </ul>
          </div>
        ))}
      </section>

      <section className="education">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.projectName || 'Project Name'}</h3>
            <p>{project.projectLink || 'Project Link'}</p>
            <p>{project.submitDate || 'Submission Date'}</p>
            <ul>
              <li>{project.projectDescription || 'Project Description'}</li>
            </ul>
          </div>
        ))}
      </section>

      <section className="education">
        <h2>Additional Details</h2>
        {additionalDetails.map((section, index) => (
          <div key={index}>
            <h3>{section.sectionName || 'Section Title'}</h3>
            <ul>
              {section.descriptions.map((description, descIndex) => (
                <li key={descIndex}>{description || 'Description'}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Temp1;

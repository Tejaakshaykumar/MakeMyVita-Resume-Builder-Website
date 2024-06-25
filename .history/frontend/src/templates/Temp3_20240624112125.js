// import React from 'react';
// import './temp3.css';

// const Temp3 = () => {
//     return (
//         <div className="container">
//             <div className="sidebar">
//                 <img src="path_to_image.jpg" alt="Juan Hernandez" className="profile-img" />
//                 <h1>Juan Hernandez</h1>
//                 <h2>Sales Executive</h2>
//                 <address>
//                     4759 Sunnydale Lane, Plano, Texas, United States, 75071<br />
//                     123-456-7890<br />
//                     email@youremail.com
//                 </address>
//                 <div className="key-skills">
//                     <h3>Key Skills</h3>
//                     <ul>
//                         <li>Account Management</li>
//                         <li>Consultative Selling</li>
//                         <li>Strategic Selling</li>
//                         <li>Cross-functional Collaboration</li>
//                         <li>Sales Management</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="main-content">
//                 <section className="summary">
//                     <p>A Sales Executive with 10+ years of professional experience building multi-million-dollar customer pipelines and driving growth for enterprise accounts. Adept at collaborating with C-level executives and cross-functional teams to develop sales strategies and drive penetration across market verticals.</p>
//                 </section>
//                 <section className="experience">
//                     <h3>Professional Experience</h3>
//                     <div className="job">
//                         <h4>Senior Account Manager</h4>
//                         <p>Accelerate Software | February 2017 - Present</p>
//                         <ul>
//                             <li>Oversee 35+ enterprise customer accounts generating over $20M+ in yearly revenue, build strategic partnerships with Fortune 500 clients, and lead initiatives to drive business development and accelerate account growth.</li>
//                             <li>Lead sales meetings with C-level executives to close new business.</li>
//                             <li>Serve as the point of contact for client accounts and identify value-added services to drive customer success, which has improved account growth by 25% on average.</li>
//                             <li>Lead a team of 10+ Account Executives, provide training and mentorship on sales best practices, and deliver support throughout the sales cycle.</li>
//                         </ul>
//                     </div>
//                     <div className="job">
//                         <h4>Sales Account Executive</h4>
//                         <p>Celeste Inc. | June 2013 - February 2017</p>
//                         <ul>
//                             <li>Managed 20+ client accounts generating $150K to $800K in annual revenue.</li>
//                             <li>Attended high-level sales meetings, educated prospects on technology products, and recommended customer solutions based on client business needs.</li>
//                             <li>Drove business development activities, qualified leads, identified potential prospects, and developed new strategies to enhance sales performance.</li>
//                             <li>Collaborated with cross-functional teams and the Marketing Department to enhance product visibility and drive revenue across emerging markets.</li>
//                         </ul>
//                     </div>
//                 </section>
//                 <section className="education">
//                     <h3>Education</h3>
//                     <p>University of Florida, Gainesville, FL<br />Bachelor of Science (B.S.) in Marketing, September 2011 - June 2013</p>
//                     <p>City Colleges, Chicago, IL<br />Associate of Arts in Business, January 2008 - September 2010</p>
//                 </section>
//                 <section className="certifications">
//                     <h3>Certifications</h3>
//                     <ul>
//                         <li>Certified Professional Sales Leader (CPSL), NASP, 2017</li>
//                         <li>Salesforce Certification, Salesforce.com, 2015</li>
//                         <li>Certified Sales Development Representative, AA-ISP, 2013</li>
//                         <li>Professional Program Certificate in Retail, Tacoma College, 2016</li>
//                     </ul>
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default Temp3;
import React from 'react';

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


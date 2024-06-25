// import React from 'react';
// import './temp3.css';

// const Temp3 = () => {
//   return (
//     <div className="resume-container">
//       <div className="sidebar">
//         <div className="photo">
//           <img src="path_to_photo.jpg" alt="Profile" />
//         </div>
//         <div className="contact-info">
//           <p>4670 Garrett Street</p>
//           <p>Philadelphia</p>
//           <p>US</p>
//           <p>Tel 267-981-2091</p>
//           <p>jason@developer.com</p>
//           <p>www.JasonMBou.com</p>
//           <p>LinkedIn: JasonMBou</p>
//           <p>Twitter: @JasonMBou</p>
//         </div>
//         <div className="skills">
//           <h3>Project Management</h3>
//           <ul>
//             <li>Jira</li>
//             <li>Slack</li>
//             <li>Trello</li>
//           </ul>
//           <h3>Design & Coding</h3>
//           <ul>
//             <li>HTML, CSS</li>
//             <li>JavaScript, jQuery</li>
//             <li>Front End frameworks (Angular, Ember, React)</li>
//             <li>Responsive UI Design</li>
//             <li>WordPress</li>
//             <li>Adobe Photoshop</li>
//             <li>Visual Studio</li>
//           </ul>
//         </div>
//       </div>
//       <div className="main-content">
//         <header>
//           <h1>Jason M. Bourassa</h1>
//           <p>Front End Developer with a keen eye for detail</p>
//         </header>
//         <section className="profile">
//           <h2>Profile</h2>
//           <p>
//             Seasoned and independent Front End Developer with 5 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.
//           </p>
//           <p>Very passionate about aesthetics and UI design.</p>
//         </section>
//         <section className="experience">
//           <h2>Experience</h2>
//           <div className="job">
//             <h3>Front End Developer / Henser Ltd.</h3>
//             <p>Philadelphia, PA</p>
//             <p>Sep 2017 - currently employed</p>
//             <ul>
//               <li>Deliver engaging user experience through optimization of images, code, and cross-browser compatibility, increasing Time on Page by +60 seconds for +50 websites</li>
//               <li>Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement</li>
//               <li>Designed dynamic and browser compatible pages using HTML5, CSS3, jQuery, and Javascript</li>
//               <li>Built single page applications (SPA), responsive web design, UI using HTML5 grid layouts, CSS3 media queries where its an expression and can be used to either true or false</li>
//               <li>Ensure efficient web development by supporting designers and app developers while resolving website performance issues</li>
//             </ul>
//           </div>
//           <div className="job">
//             <h3>Front End Developer / Henser Ltd.</h3>
//             <p>Philadelphia, PA</p>
//             <p>Sep 2014 - Aug 2017</p>
//             <ul>
//               <li>Delivered responsive, cross-browser compatible and accessibility compliant websites, achieving 19% faster load time than industry average</li>
//               <li>Produced stunning visual elements of web applications by translating UI/UX design wireframes into code while producing high quality, reusable markup using HTML5 and CSS3</li>
//               <li>Designing frontend within object-oriented Javascript frameworks like Angular.Js and Ext.Js.</li>
//             </ul>
//           </div>
//         </section>
//         <section className="education">
//           <h2>Education</h2>
//           <div className="education-item">
//             <h3>Associate in Computer Science / Saint Maria University</h3>
//             <p>Sep 2011 - Jul 2014</p>
//             <p>Graduated with the highest academy remarks.</p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Temp3;

import React from 'react';
import './temp2.css';

const SaanviPatelResume1 = () => {
  return (
    <div className="container">
      <div className="resume-header">
        <div>
          <h1>Saanvi Patel</h1>
          <div className="contact-info">
            <a href="mailto:saanvipatel@sample.in">saanvipatel@sample.in</a>
            <span>+91 22 1234 5677</span>
            <span>New Delhi, India 110034</span>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">Professional Summary</div>
        <p>Motivated Sales Associate with 5 years of experience boosting sales and customer loyalty through individualized service. Resourceful expert at learning customer needs, directing to desirable merchandise and upselling to meet sales quotas. Committed to strengthening customer experiences with positivity and professionalism when answering requests and processing sales.</p>
      </div>
      <div className="section">
        <div className="section-title">Skills</div>
        <ul className="skill-list">
          <li>Store opening and closing</li>
          <li>Sales expertise</li>
          <li>Accurate Money Handling</li>
          <li>Store Merchandising</li>
          <li>Loss prevention</li>
          <li>Product promotions</li>
          <li>Guest Services</li>
          <li>Point of Sale Systems</li>
        </ul>
      </div>
      <div className="section">
        <div className="section-title">Work History</div>
        <h3>H&M - Retail Sales Associate</h3>
        <p>New Delhi • 05/2016 - Current</p>
        <ul>
          <li>Effectively upsold products by introducing accessories and other add-ons, adding ₹3000 to average monthly sales.</li>
          <li>Generated brand awareness and positive product impressions to increase sales 22%.</li>
          <li>Used consultative sales approach to understand customer needs and recommend relevant offerings.</li>
        </ul>
        <h3>Starbucks - Barista</h3>
        <p>New Delhi • 01/2015 - 03/2016</p>
        <ul>
          <li>Created over 60 drinks per hour with consistently positive customer satisfaction scores.</li>
          <li>Learned every menu preparation and numerous off-label drinks to meet all customer needs.</li>
          <li>Upsold baked goods and extra shots with beverages, increasing store sales ₹3800 per month.</li>
        </ul>
      </div>
      <div className="section">
        <div className="section-title">Education</div>
        <p>Oxford Software Institute & Oxford School of English</p>
        <p>New Delhi, India • June 2016</p>
        <p>Diploma: Financial Accounting</p>
      </div>
      <div className="section">
        <div className="section-title">Languages</div>
        <ul className="language-list">
          <li>Hindi: Native Language</li>
          <li>English: Proficient (C2)</li>
          <li>Bengali: Upper Intermediate (B2)</li>
        </ul>
      </div>
    </div>
  );
};

export default SaanviPatelResume1;
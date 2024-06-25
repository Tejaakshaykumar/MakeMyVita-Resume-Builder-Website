import React from 'react';
import './temp3.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="sidebar">
        <div className="photo">
          <img src="path_to_photo.jpg" alt="Profile" />
        </div>
        <div className="contact-info">
          <p>4670 Garrett Street</p>
          <p>Philadelphia</p>
          <p>US</p>
          <p>Tel 267-981-2091</p>
          <p>jason@developer.com</p>
          <p>www.JasonMBou.com</p>
          <p>LinkedIn: JasonMBou</p>
          <p>Twitter: @JasonMBou</p>
        </div>
        <div className="skills">
          <h3>Project Management</h3>
          <ul>
            <li>Jira</li>
            <li>Slack</li>
            <li>Trello</li>
          </ul>
          <h3>Design & Coding</h3>
          <ul>
            <li>HTML, CSS</li>
            <li>JavaScript, jQuery</li>
            <li>Front End frameworks (Angular, Ember, React)</li>
            <li>Responsive UI Design</li>
            <li>WordPress</li>
            <li>Adobe Photoshop</li>
            <li>Visual Studio</li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h1>Jason M. Bourassa</h1>
          <p>Front End Developer with a keen eye for detail</p>
        </header>
        <section className="profile">
          <h2>Profile</h2>
          <p>
            Seasoned and independent Front End Developer with 5 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.
          </p>
          <p>Very passionate about aesthetics and UI design.</p>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <div className="job">
            <h3>Front End Developer / Henser Ltd.</h3>
            <p>Philadelphia, PA</p>
            <p>Sep 2017 - currently employed</p>
            <ul>
              <li>Deliver engaging user experience through optimization of images, code, and cross-browser compatibility, increasing Time on Page by +60 seconds for +50 websites</li>
              <li>Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement</li>
              <li>Designed dynamic and browser compatible pages using HTML5, CSS3, jQuery, and Javascript</li>
              <li>Built single page applications (SPA), responsive web design, UI using HTML5 grid layouts, CSS3 media queries where its an expression and can be used to either true or false</li>
              <li>Ensure efficient web development by supporting designers and app developers while resolving website performance issues</li>
            </ul>
          </div>
          <div className="job">
            <h3>Front End Developer / Henser Ltd.</h3>
            <p>Philadelphia, PA</p>
            <p>Sep 2014 - Aug 2017</p>
            <ul>
              <li>Delivered responsive, cross-browser compatible and accessibility compliant websites, achieving 19% faster load time than industry average</li>
              <li>Produced stunning visual elements of web applications by translating UI/UX design wireframes into code while producing high quality, reusable markup using HTML5 and CSS3</li>
              <li>Designing frontend within object-oriented Javascript frameworks like Angular.Js and Ext.Js.</li>
            </ul>
          </div>
        </section>
        <section className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Associate in Computer Science / Saint Maria University</h3>
            <p>Sep 2011 - Jul 2014</p>
            <p>Graduated with the highest academy remarks.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;

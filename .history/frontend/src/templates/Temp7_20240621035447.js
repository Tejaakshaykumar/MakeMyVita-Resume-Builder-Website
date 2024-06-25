import React from 'react';
import './VeronJonesResume.css';

const VeronJonesResume = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="photo">
          <img src="veron-photo-url" alt="Veron Jones" />
        </div>
        <div className="contact">
          <h1>Veron Jones</h1>
          <h2>Data Entry Specialist</h2>
          <p><a href="mailto:veron@novoresume.com">veron@novoresume.com</a></p>
          <p>7481 345678</p>
          <p>Chicago, IL</p>
          <p><a href="https://linkedin.com/in/veron.jones">linkedin.com/in/veron.jones</a></p>
          <p><a href="https://skype:veron.jones">veron.jones</a></p>
        </div>
      </div>
      <div className="section">
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Data Entry Specialist</h3>
          <p>Shugar Programs</p>
          <span>08/2017 - Present</span>
          <ul>
            <li>Extract data of patients from various sources and manage it in an organize computer base system.</li>
            <li>Precise consumer demographics information data entry and access in all relevant electronic data system.</li>
            <li>Immediate transfer of Emergency Department documents into MHWIN computer program system.</li>
            <li>Execute and ensure on-time delivery of all necessary Emergency Department consumer assessment packets.</li>
            <li>Actively cultivates strong working relationships with colleagues and manager increasing work productivity.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Data Entry Specialist</h3>
          <p>White & Shade P.C.</p>
          <span>12/2013 - 07/2017</span>
          <ul>
            <li>Assisted the lien department by updating over 2,000 client's information using both Excel and WIS effectively.</li>
            <li>Trained and mentored new employees on proper protocols, work standards and in updating client information.</li>
            <li>Maintained and managed data entry requirements by following data program techniques and procedures.</li>
            <li>Fulfilled all general duties such as preparing, checking, verifying, and processing client's data and information.</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2>Education</h2>
        <p>BS in Business Administration - Finance</p>
        <p>Sheridan Institute of Technology and Advanced Learning</p>
        <span>08/2010 - 06/2013</span>
      </div>
      <div className="section">
        <h2>Awards and Recognitions</h2>
        <ul>
          <li>Employee of the Month (8 times over a 4 years period) - White & Shade P.C.</li>
          <li>Star Employee (2019) - Shugar Programs</li>
        </ul>
      </div>
      <div className="section">
        <h2>Interests</h2>
        <ul className="interests">
          <li>Meditation</li>
          <li>Calligraphy</li>
          <li>Sailing</li>
          <li>Sustainability</li>
        </ul>
      </div>
      <div className="section">
        <h2>Languages</h2>
        <ul className="languages">
          <li>English</li>
          <li>Spanish</li>
          <li>French</li>
          <li>German</li>
        </ul>
      </div>
    </div>
  );
};

export default VeronJonesResume;

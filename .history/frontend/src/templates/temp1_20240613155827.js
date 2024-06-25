import React from 'react';
import './temp1.css';

const Temp1 = ({ personalDetails }) => {
  const {
    firstName = '',
    lastName = '',
    role = '',
    professionalEmail = '',
    personalEmail = '',
    phone = '',
    city = '',
    state = '',
    country = '',
    website = '',
    linkedin = '',
    github = ''
  } = personalDetails;

  return (
    <div className="resume-container" id="resume">
      <div className="left-panel">
        <div className="profile-pic">
          <img src="images.jpg" alt="Profile Picture" />
        </div>
        <hr />
        <div className="contact-info">
          <h2>CONTACT</h2>
          <p><span className="icon">&#128222;</span>{phone}</p>
          <p><span className="icon">&#9993;</span>{professionalEmail}</p>
          <p><span className="icon">&#127968;</span>{city}, {state}</p>
          <p><span className="icon">&#127760;</span>{website}</p>
        </div>
        <hr />
        <div className="education">
          <h2>EDUCATION</h2>
          <h3>Master's Degree</h3>
          <p>Education</p>
          <p>University Name</p>
          <p>2013 - 2015</p>
          <h3>Bachelor of Science</h3>
          <p>Education</p>
          <p>University Name</p>
          <p>

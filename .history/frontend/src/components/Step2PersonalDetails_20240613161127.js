import React, { useState } from 'react';
import './components.css';

const Step2PersonalDetails = ({ goToNextStep, goToPreviousStep, personalDetails = {}, handleChange }) => {
  // const [personalDetails, setPersonalDetails] = useState({
  //   firstName: '',
  //   lastName: '',
  //   role: '',
  //   professionalEmail: '',
  //   personalEmail: '',
  //   phone: '',
  //   city: '',
  //   state: '',
  //   country: '',
  //   website: '',
  //   linkedin: '',
  //   github: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setPersonalDetails({
  //     ...personalDetails,
  //     [name]: value
  //   });
  // };
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
    
    <div className="step-container-personal-details">
      <h2>Personal Details</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={personalDetails.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Role:</label>
          <input type="text" name="role" value={role} onChange={handleChange} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Professional Email:</label>
            <input type="email" name="professionalEmail" value={personalDetails.professionalEmail} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Personal Email:</label>
            <input type="email" name="personalEmail" value={personalDetails.personalEmail} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={personalDetails.phone} onChange={handleChange} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City:</label>
            <input type="text" name="city" value={city} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input type="text" name="state" value={state} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input type="text" name="country" value={country} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Professional Website / Portfolio:</label>
          <input type="text" name="website" value={website} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>LinkedIn:</label>
          <input type="text" name="linkedin" value={linkedin} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>GitHub:</label>
          <input type="text" name="github" value={github} onChange={handleChange} />
        </div>

        <div className="buttons">
          <button type="button" onClick={goToPreviousStep}>Back</button>
          <button type="button" onClick={goToNextStep}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step2PersonalDetails;


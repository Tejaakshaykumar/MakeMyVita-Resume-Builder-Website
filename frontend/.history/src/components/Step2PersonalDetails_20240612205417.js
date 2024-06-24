import React, { useState } from 'react';
import './components.css';

const Step2PersonalDetails = ({ goToNextStep, goToPreviousStep }) => {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value
    });
  };

  return (
    <div className="step-container-personal-details">
      <h2>Personal Details</h2>
      <form>
        <label>First Name:</label>
        <input type="text" name="name" value={personalDetails.name} onChange={handleChange} />
        
        <label>Last Name:</label>
        <input type="text" name="name" value={personalDetails.name} onChange={handleChange} />

        <label>Role:</label>
        <input type="text" name="name" value={personalDetails.name} onChange={handleChange} />

        <label>Email(proffesional):</label>
        <input type="email" name="email" value={personalDetails.email} onChange={handleChange} />
        
        <label>Email(personal):</label>
        <input type="email" name="email" value={personalDetails.email} onChange={handleChange} />

        <label>Phone:</label>
        <input type="tel" name="phone" value={personalDetails.phone} onChange={handleChange} />

        <label>City:</label>
        <input type="text" name="address" value={personalDetails.address} onChange={handleChange} />

        <label>State:</label>
        <input type="text" name="address" value={personalDetails.address} onChange={handleChange} />
        
        <label>Country:</label>
        <input type="text" name="address" value={personalDetails.address} onChange={handleChange} />

        <label>proffesional Website / Portfolio:</label>
        <input type="email" name="email" value={personalDetails.email} onChange={handleChange} />

        <label>LinkedIn:</label>
        <input type="email" name="email" value={personalDetails.email} onChange={handleChange} />

        <label>Email(personal):</label>
        <input type="email" name="email" value={personalDetails.email} onChange={handleChange} />

      </form>
      <div className="buttons">
        <button onClick={goToPreviousStep}>Back</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step2PersonalDetails;

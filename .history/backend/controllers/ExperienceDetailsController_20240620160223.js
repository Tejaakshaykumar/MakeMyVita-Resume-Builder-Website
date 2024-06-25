const PersoalDetails = require('../models/ExperienceDetails');

exports.createExperienceDetails = async (req, res) => {
  const { 
    companyName,
    jobTitle,
    jobDescription,
    startDate,
    endDate,
  } = req.body;
  try {
    const newPersonalDetails = new ({
      firstName,
      lastName,
      professionalEmail,
      personalEmail,
      role,
      phone,
      city,
      state,
      country,
      website,
      linkedin,
      github
    });
    const personalDetails = await newPersonalDetails.save();
    res.json(personalDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

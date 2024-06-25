const PersonalDetails = require('../models/ExperienceDetails');

exports.createExperienceDetails = async (req, res) => {
  const { 
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    jobDescription: { type: String, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
  } = req.body;
  try {
    const newPersonalDetails = new PersonalDetails({
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

const PersonalDetails = require('../models/ExperienceDetails');

exports.createPersonalDetails = async (req, res) => {
  const { firstName, lastName, professionalEmail,personalEmail,role,phone,city,state,country,website,linkedin,github} = req.body;
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

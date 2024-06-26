const EducationDetails = require('../models/EducationDetails');

exports.createEducationDetails = async (req, res) => {
  const { instituteName, degree, fieldOfStudy, graduationYear, cgpa } = req.body;
  try {
    const newEducationDetails = new EducationDetails({
      instituteName,
      degree,
      fieldOfStudy,
      graduationYear,
      cgpa
    });
    const educationDetails = await newEducationDetails.save();
    res.json(educationDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};



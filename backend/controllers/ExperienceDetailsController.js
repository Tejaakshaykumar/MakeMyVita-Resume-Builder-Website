const ExperienceDetails = require('../models/ExperienceDetails');

exports.createExperienceDetails = async (req, res) => {
  const { 
    companyName,
    jobTitle,
    jobDescription,
    startDate,
    endDate,
  } = req.body;
  try {
    const newExperienceDetails = new ExperienceDetails({
        companyName,
        jobTitle,
        jobDescription,
        startDate,
        endDate,
    });
    const experienceDetails = await newExperienceDetails.save();
    res.json(experienceDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

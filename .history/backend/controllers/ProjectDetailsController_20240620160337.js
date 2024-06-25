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
    const ExperienceDetails = await newExperienceDetails.save();
    res.json(ExperienceDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

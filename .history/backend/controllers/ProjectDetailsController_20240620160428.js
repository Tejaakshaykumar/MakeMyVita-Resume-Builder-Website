const ProjectDetails = require('../models/ProjectDetails');

exports.createProjectDetails = async (req, res) => {
  const { 
    projectName,
    projectDescription,
    projectLink,
    submitDate,
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

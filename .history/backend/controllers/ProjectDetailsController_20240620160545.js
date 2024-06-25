const ProjectDetails = require('../models/ProjectDetails');

exports.createProjectDetails = async (req, res) => {
  const { 
    projectName,
    projectDescription,
    projectLink,
    submitDate,
  } = req.body;
  try {
    const newProjectDetails = new ProjectDetails({
        companyName,
        jobTitle,
        jobDescription,
        startDate,
        endDate,
    });
    const ProjectDetails = await newExperienceDetails.save();
    res.json(ExperienceDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

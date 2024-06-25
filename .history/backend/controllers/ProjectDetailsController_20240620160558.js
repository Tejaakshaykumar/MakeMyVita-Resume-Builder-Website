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
    const projectDetails = await newProjectDetails.save();
    res.json();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

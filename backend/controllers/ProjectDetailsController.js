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
        projectName,
        projectDescription,
        projectLink,
        submitDate,
    });
    const projectDetails = await newProjectDetails.save();
    res.json(projectDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

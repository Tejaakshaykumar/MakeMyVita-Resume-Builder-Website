const SkillDetails = require('../models/SkillDetails');

exports.createSkillDetails = async (req, res) => {
  const { 
    skillName,
    proficiency,

  } = req.body;
  try {
    const newSkillDetails = new SkillDetails({
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

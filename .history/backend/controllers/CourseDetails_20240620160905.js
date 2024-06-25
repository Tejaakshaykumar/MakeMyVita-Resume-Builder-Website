const SkillDetails = require('../models/');

exports.createSkillDetails = async (req, res) => {
  const { 
    skillName,
    proficiency,

  } = req.body;
  try {
    const newSkillDetails = new SkillDetails({
        skillName,
        proficiency,
    });
    const skillDetails = await newSkillDetails.save();
    res.json(skillDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

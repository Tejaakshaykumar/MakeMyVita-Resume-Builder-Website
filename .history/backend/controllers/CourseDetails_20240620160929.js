const CourseDetails = require('../models/CourseDetails');

exports.createCourseDetails = async (req, res) => {
  const { 
    skillName,
    proficiency,

  } = req.body;
  try {
    const newCourseDetails = new CourseDetails({
        skillName,
        proficiency,
    });
    const CourseDetails = await newSkillDetails.save();
    res.json(skillDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

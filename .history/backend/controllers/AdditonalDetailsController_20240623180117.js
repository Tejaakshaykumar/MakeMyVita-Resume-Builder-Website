const AdditionalDetails = require('../models/AdditionalDetails');

exports.createAdditionalDetails = async (req, res) => {
  const { 
    skillName,
    proficiency,

  } = req.body;
  try {
    const newCourseDetails = new CourseDetails({
        skillName,
        proficiency,
    });
    const courseDetails = await newCourseDetails.save();
    res.json(courseDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

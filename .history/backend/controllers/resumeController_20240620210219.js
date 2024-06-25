const Resume = require('../models/Resume');

exports.createResume = async (req, res) => {
  const { name, description, templateNo, personalDetails, educationDetails, projectDetails, experienceDetails, courseDetails, skillDetails, additionalSections } = req.body;
  try {
    const newResume = new Resume({
      userId: req.user.id,
      name,
      description,
      templateNo,
      personalDetails,
      educationDetails,
      projectDetails,
      experienceDetails,
      courseDetails,
      skillDetails,
      additionalSections,
    });
    const resume = await newResume.save();
    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id }).populate('personalDetails educationDetails projectDetails experienceDetails courseDetails skillDetails');
    console.log('Fetched Resumes:', resumes);
    res.json(resumes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.getResumeDetails = async (req, res) => {
  try {
    const resumeDetails = await Resume.findById(req.params.id) .populate('personalDetails educationDetails projectDetails experienceDetails courseDetails skillDetails');
    if (!resumeDetails) {
      return res.status(404).json({ msg: 'Resume details not found' });
    }
    res.json(resumeDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


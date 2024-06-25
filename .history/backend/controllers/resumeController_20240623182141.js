const fs = require('fs');
const path = require('path');
const Resume = require('../models/Resume');
const PersonalDetails = require('../models/PersonalDetails');
const EducationDetails = require('../models/EducationDetails');
const ProjectDetails = require('../models/ProjectDetails');
const ExperienceDetails = require('../models/ExperienceDetails');
const CourseDetails = require('../models/CourseDetails');
const SkillDetails = require('../models/SkillDetails');
const StudentDetails = require('../models/StudentDetails')
const AdditonalDetails = require('../models/AdditionalDetails')

exports.createResume = async (req, res) => {
  const { name, description, templateNo,fontColor,fontFamily,templateColor, personalDetails, educationDetails, projectDetails, experienceDetails, courseDetails, skillDetails,studentDetails, additionalDetails } = req.body;
  try {
    const newResume = new Resume({
      userId: req.user.id,
      name,
      description,
      templateNo,
      fontColor,
      fontFamily,
      templateColor,
      personalDetails,
      educationDetails,
      projectDetails,
      experienceDetails,
      courseDetails,
      skillDetails,
      studentDetails,
      additionalDetails,
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
    const resumes = await Resume.find({ userId: req.user.id }).populate('personalDetails educationDetails projectDetails experienceDetails courseDetails skillDetails studentDetails additionalDetails');
    console.log('Fetched Resumes:', resumes);
    res.json(resumes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.getResumeDetails = async (req, res) => {
  try {
    const resumeDetails = await Resume.findById(req.params.id) .populate('personalDetails educationDetails projectDetails experienceDetails courseDetails skillDetails studentDetails additionalDetails');
    if (!resumeDetails) {
      return res.status(404).json({ msg: 'Resume details not found' });
    }
    res.json(resumeDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteResume = async (req, res) => {
  const resumeId = req.params.id;
  try {
    const resume = await Resume.findById(resumeId).populate('personalDetails educationDetails projectDetails experienceDetails courseDetails skillDetails studentDetails additionalDetails');

    if (!resume) {
      return res.status(404).json({ msg: 'Resume not found' });
    }

    if (resume.personalDetails && resume.personalDetails.cvFile) {
      const filePath = path.join(__dirname, '..', 'uploads', resume.personalDetails.cvFile);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Resume.findOneAndDelete(resumeId);

    await Promise.all([
      PersonalDetails.findByIdAndDelete(resume.personalDetails._id),
      EducationDetails.deleteMany({ _id: { $in: resume.educationDetails.map(edu => edu._id) } }),
      ProjectDetails.deleteMany({ _id: { $in: resume.projectDetails.map(proj => proj._id) } }),
      ExperienceDetails.deleteMany({ _id: { $in: resume.experienceDetails.map(exp => exp._id) } }),
      CourseDetails.deleteMany({ _id: { $in: resume.courseDetails.map(course => course._id) } }),
      SkillDetails.deleteMany({ _id: { $in: resume.skillDetails.map(skill => skill._id) } }),
      StudentDetails.findByIdAndDelete(resume.studentDetails._id),
      AdditonalDetails.deleteMany({ _id: { $in: resume.additionalDetails.map(additional => ._id) } }),
    ]);

    res.json({ msg: 'Resume and associated files deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  personalDetails: {
    firstName: String,
    lastName: String,
    role: String,
    professionalEmail: String,
    phone: String,
    city: String,
    state: String,
    country: String,
    website: String,
    linkedin: String,
    github: String
  },
  educationDetails: [{
    school: String,
    degree: String,
    fieldOfStudy: String,
    graduationYear: String,
    cgpa: String
  }],
  skills: {
    courses: [String],
    techSkills: [String]
  },
  experiences: [{
    companyName: String,
    jobTitle: String,
    jobDescription: String,
    startDate: String,
    endDate: String
  }],
  projects: [{
    projectName: String,
    projectDescription: String,
    projectLink: String,
    submissionDate: String
  }],
  imageSrc: String
});

module.exports = mongoose.model('Resume', resumeSchema);

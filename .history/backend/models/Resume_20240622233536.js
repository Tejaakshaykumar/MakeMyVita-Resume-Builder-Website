const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, default: 'Resume'},
    description: { type: String },
    templateNo: { type: Number, required: true },
    fontColor: { type: String, default: '#000000'},
    fontFamily: { type: String,default: 'Arial'},
    templateColor: { type: String,default: '#c7cbcc'},
    personalDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'PersonalDetails' },
    educationDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'EducationDetails' }],
    projectDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProjectDetails' }],
    experienceDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ExperienceDetails' }],
    courseDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CourseDetails' }],
    skillDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SkillDetails' }],
});

module.exports = mongoose.model('Resume', resumeSchema);

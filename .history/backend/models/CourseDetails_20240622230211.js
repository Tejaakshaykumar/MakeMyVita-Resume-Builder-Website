const mongoose = require('mongoose');

const skillDetailsSchema = new mongoose.Schema({
    skillName: { type: String },
    proficiency: { type: Number },  // e.g., Beginner, Intermediate, Expert
});

module.exports = mongoose.model('CourseDetails', skillDetailsSchema);

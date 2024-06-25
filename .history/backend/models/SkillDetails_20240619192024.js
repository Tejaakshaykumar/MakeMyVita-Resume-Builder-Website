const mongoose = require('mongoose');

const skillDetailsSchema = new mongoose.Schema({
    skillName: { type: String, required: true },
    proficiency: { type: String },  // e.g., Beginner, Intermediate, Expert
    // add other fields as necessary
});

module.exports = mongoose.model('SkillDetails', skillDetailsSchema);

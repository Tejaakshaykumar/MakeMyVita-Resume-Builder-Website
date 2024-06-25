const mongoose = require('mongoose');

const skillDetailsSchema = new mongoose.Schema({
    skillName: { type: String },
    proficiency: { type: Number }, 
});

module.exports = mongoose.model('CourseDetails', skillDetailsSchema);

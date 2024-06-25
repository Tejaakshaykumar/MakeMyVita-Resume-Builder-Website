const mongoose = require('mongoose');

const sDetailsSchema = new mongoose.Schema({
    skillName: { type: String },
    proficiency: { type: Number }, 
});

module.exports = mongoose.model('CourseDetails', skillDetailsSchema);

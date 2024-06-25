const mongoose = require('mongoose');

const DetailsSchema = new mongoose.Schema({
    skillName: { type: String },
    proficiency: { type: Number }, 
});

module.exports = mongoose.model('CourseDetails', skillDetailsSchema);

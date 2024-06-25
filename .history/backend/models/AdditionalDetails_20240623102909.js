const mongoose = require('mongoose');

const additonalDetailsSchema = new mongoose.Schema({
    skillName: { type: String },
    proficiency: { type: Number }, 
});

module.exports = mongoose.model('CourseDetails', additionalDetailsSchema);

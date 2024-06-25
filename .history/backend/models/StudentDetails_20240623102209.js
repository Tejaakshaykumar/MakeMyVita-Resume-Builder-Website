const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    skillName: { type: String },
    proficiency: { type: Number }, 
});

module.exports = mongoose.model('StuDetails', skillDetailsSchema);

const mongoose = require('mongoose');

const educationDetailsSchema = new mongoose.Schema({
    instituteName: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    graduationYear: { type: String },
    cgpa: { type: String }
    // add other fields as necessary
});

module.exports = mongoose.model('EducationDetails', educationDetailsSchema);

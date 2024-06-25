const mongoose = require('mongoose');

const educationDetailsSchema = new mongoose.Schema({
    instituteName: { type: String, required: true },
    degree: { type: String, required: true },
    startDate: { type: Date },
    graduation: { type: Date },
    // add other fields as necessary
});

module.exports = mongoose.model('EducationDetails', educationDetailsSchema);

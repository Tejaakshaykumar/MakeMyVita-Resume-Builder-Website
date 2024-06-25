const mongoose = require('mongoose');

const educationDetailsSchema = new mongoose.Schema({
    instituteName: { type: String,  },
    degree: { type: String,  },
    fieldOfStudy: { type: String, required: true },
    graduationYear: { type: String },
    cgpa: { type: String }
});

module.exports = mongoose.model('EducationDetails', educationDetailsSchema);

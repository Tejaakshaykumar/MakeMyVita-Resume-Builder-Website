const mongoose = require('mongoose');

const experienceDetailsSchema = new mongoose.Schema({
    companyName: { type: String, },
    jobTitle: { type: String, required: true },
    jobDescription: { type: String, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
});

module.exports = mongoose.model('ExperienceDetails', experienceDetailsSchema);

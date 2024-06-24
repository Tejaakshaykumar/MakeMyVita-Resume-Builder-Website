const mongoose = require('mongoose');

const experienceDetailsSchema = new mongoose.Schema({
    companyName: { type: String, },
    jobTitle: { type: String, },
    jobDescription: { type: String, },
    startDate: { type: Date },
    endDate: { type: Date },
});

module.exports = mongoose.model('ExperienceDetails', experienceDetailsSchema);

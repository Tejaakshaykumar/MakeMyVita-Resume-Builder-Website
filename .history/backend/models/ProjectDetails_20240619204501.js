const mongoose = require('mongoose');

const projectDetailsSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    startDate: { type: Date },
    // add other fields as necessary
});

module.exports = mongoose.model('ProjectDetails', projectDetailsSchema);

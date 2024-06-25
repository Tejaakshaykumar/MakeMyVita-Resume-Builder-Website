const mongoose = require('mongoose');

const projectDetailsSchema = new mongoose.Schema({
    project: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    // add other fields as necessary
});

module.exports = mongoose.model('ProjectDetails', projectDetailsSchema);

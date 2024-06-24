const mongoose = require('mongoose');

const projectDetailsSchema = new mongoose.Schema({
    projectName: { type: String,  },
    projectDescription: { type: String, },
    projectLink:{type: String},
    submitDate: { type: Date },
});

module.exports = mongoose.model('ProjectDetails', projectDetailsSchema);

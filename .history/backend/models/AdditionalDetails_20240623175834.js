const mongoose = require('mongoose');

const additonalDetailsSchema = new mongoose.Schema({
    sectionName: { type: String, },
    description: {type:[String]}
});

module.exports = mongoose.model('AdditionalDetails', additionalDetailsSchema);

// models/Section.js
const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  descriptions: {
    type: [String], // Array of strings to hold multiple descriptions
    required: true,
  },
});

module.exports = mongoose.model('Section', SectionSchema);

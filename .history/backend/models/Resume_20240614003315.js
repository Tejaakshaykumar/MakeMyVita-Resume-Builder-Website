const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  personalDetails: {
    type: Object,
    required: true
  },
  educationDetails: {
    type: Array,
    required: true
  },
  skills: {
    type: Object,
    required: true
  },
  experiences: {
    type: Array,
    required: true
  },
  projects: {
    type: Array,
    required: true
  },
  imageSrc: {
    type: String
  }
});

module.exports = mongoose.model('Resume', ResumeSchema);

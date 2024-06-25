const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  jobTitle: String,
  companyName: String,
  endDate: String,
  jobDescription: String
});

module.exports = mongoose.model('Experience', ExperienceSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationDetailsSchema = new Schema({
  school: String,
  degree: String,
  fieldOfStudy: String,
  graduationYear: String,
  cgpa: String
});

module.exports = mongoose.model('EducationDetails', EducationDetailsSchema);

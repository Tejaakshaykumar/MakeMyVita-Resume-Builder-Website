const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
  projectName: String,
  projectLink: String,
  submissionDate: String,
  projectDescription: String
});

module.exports = mongoose.model('Projects', ProjectsSchema);

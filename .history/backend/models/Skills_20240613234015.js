const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillsSchema = new Schema({
  courses: [String],
  techSkills: [String]
});

module.exports = mongoose.model('Skills', SkillsSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalDetailsSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  professionalEmail: String,
  city: String,
  state: String,
  country: String,
  website: String,
  role: String
});

module.exports = mongoose.model('PersonalDetails', PersonalDetailsSchema);

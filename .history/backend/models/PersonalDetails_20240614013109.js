const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalDetailsSchema = new Schema({
  firstName: {
    type: String,
    required: true
},
  lastName: {
    type: String,
    required: true
},
  phone: {
    type: String,
    required: true
},
  professionalEmail: {
    type: String,
    required: true
},
  city: String,
  state: String,
  country: String,
  website: String,
  role: String
});

module.exports = mongoose.model('PersonalDetails', PersonalDetailsSchema);

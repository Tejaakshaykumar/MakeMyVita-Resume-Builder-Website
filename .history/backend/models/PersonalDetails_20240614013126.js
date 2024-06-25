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
  city: {
    type: String,
    required: true
},
  state: {
    type: String,
    required: true
},
  country: {
    type: String,
    required: true
},
  website: {
    type: String,
    required: true
},
  role: {
    type: String,
    required: true
}
});

module.exports = mongoose.model('PersonalDetails', PersonalDetailsSchema);

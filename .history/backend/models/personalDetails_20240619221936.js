const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    professionalEmail: { type: String, required: true },
    personalEmail: { type: String },
    role: { type: String },
    phone: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    website: { type: String },
    linkedin: { type: String },
    github: { type: String },

});

module.exports = mongoose.model('PersonalDetails', personalDetailsSchema);

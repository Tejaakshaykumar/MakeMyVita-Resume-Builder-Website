const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    professionalEmail: { type: String, required: true },
    personalEmail: { type: String, required: true },
    address: { type: String },
});

module.exports = mongoose.model('PersonalDetails', personalDetailsSchema);

const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String },
    // add other fields as necessary
});

module.exports = mongoose.model('PersonalDetails', personalDetailsSchema);

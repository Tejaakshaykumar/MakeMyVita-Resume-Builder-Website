const mongoose = require('mongoose');

const additonalDetailsSchema = new mongoose.Schema({
    sectionName: { type: String },
    description
});

module.exports = mongoose.model('AdditionalDetails', additionalDetailsSchema);

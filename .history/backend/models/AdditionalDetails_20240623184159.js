const mongoose = require('mongoose');

const additionalDetailsSchema = new mongoose.Schema({
    sectionName: { type: String },
    descriptions: {type:[String]}
});

module.exports = mongoose.model('AdditionalDetails', additionalDetailsSchema);

const mongoose = require('mongoose');

const additonalDetailsSchema = new mongoose.Schema({
    sectionName: { type: String },
    description: {type:[String]}
});

module.exports = mongoose.model('AdditionalDetails', additionalDetailsSchema);

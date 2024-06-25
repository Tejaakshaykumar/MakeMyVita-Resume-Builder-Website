const mongoose = require('mongoose');

const additonalDetailsSchema = new mongoose.Schema({
    sectionName: { type: String },
    descrip
});

module.exports = mongoose.model('AdditionalDetails', additionalDetailsSchema);

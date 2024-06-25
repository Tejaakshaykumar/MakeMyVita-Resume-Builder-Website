const mongoose = require('mongoose');

const additonalDetailsSchema = new mongoose.Schema({
    skillName: { type: String },
     
});

module.exports = mongoose.model('AdditionalDetails', additionalDetailsSchema);

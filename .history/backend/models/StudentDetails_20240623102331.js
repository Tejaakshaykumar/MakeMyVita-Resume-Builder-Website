const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    : { type: String },
    proficiency: { type: Number }, 
});

module.exports = mongoose.model('StudentDetails', studentDetailsSchema);

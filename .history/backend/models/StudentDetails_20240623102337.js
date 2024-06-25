const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    rollN: { type: String },
    proficiency: { type: Number }, 
});

module.exports = mongoose.model('StudentDetails', studentDetailsSchema);

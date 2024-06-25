const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    rollNo: { type: String },
    proficiency: { type: Number }, 
});

module.exports = mongoose.model('StudentDetails', studentDetailsSchema);

const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    rollNo: { type: String },
    depart: { type: Number }, 
});

module.exports = mongoose.model('StudentDetails', studentDetailsSchema);

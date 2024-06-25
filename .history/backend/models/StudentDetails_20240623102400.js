const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    rollNo: { type: String },
    rollNo: { type: String },
    rollNo: { type: String },
    rollNo: { type: String },
    department: { type: Number }, 
});

module.exports = mongoose.model('StudentDetails', studentDetailsSchema);

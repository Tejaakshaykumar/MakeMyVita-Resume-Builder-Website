const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    rollNo: { type: String },
    department: { type: String },
    degree: { type: String },
    institute: { type: String },
});

module.exports = mongoose.model('StudentDetails', studentDetailsSchema);

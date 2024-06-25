const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    rollNo: { type: String },
    department: { type: String },
    institute: { type: String },
    : { type: String },
});

module.exports = mongoose.model('StudentDetails', studentDetailsSchema);

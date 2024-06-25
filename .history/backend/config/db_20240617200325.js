const mongoose = require('mongoose');
require('dotenv').config();
const URI=process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

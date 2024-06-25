const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Make sure dotenv is called before accessing process.env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

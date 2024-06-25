// const express = require('express');
// const mongoose = require('mongoose');
// const itemRoutes = require('./routes/itemRoutes');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log('MongoDB connection error:',err));

// // Routes
// app.use('/api/items', itemRoutes);

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Create a schema and model for resume data
const resumeSchema = new mongoose.Schema({
  personalDetails: Object,
  educationDetails: Array,
  skills: Object,
  experiences: Array,
  projects: Array,
  imageSrc: String
});

const Resume = mongoose.model('Resume', resumeSchema);

// API endpoint to save resume data
app.post('/api/resume', (req, res) => {
  const newResume = new Resume(req.body);
  
  newResume.save()
    .then(() => res.json('Resume saved!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

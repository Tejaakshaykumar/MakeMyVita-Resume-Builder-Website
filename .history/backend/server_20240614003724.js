require('dotenv').config(); // Add this line to load environment variables

const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use('/api/resume', require('./routes/resume'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

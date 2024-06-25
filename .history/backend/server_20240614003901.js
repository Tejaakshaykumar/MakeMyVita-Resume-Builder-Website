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

const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

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

const express = require('express');
const router = express.Router();
const { createEducationDetails } = require('../controllers/educationDetailsController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createEducationDetails);

module.exports = router;

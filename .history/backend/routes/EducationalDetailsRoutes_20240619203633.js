const express = require('express');
const router = express.Router();
const { createEducationDetails } = require('../controllers/EducationDetailsController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createEducationDetails);

module.exports = router;

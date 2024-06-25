const express = require('express');
const router = express.Router();
const { createEducationDetails } = require('../controllers/CourseDetails');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createEducationDetails);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createAdditionalDetails } = require('../controllers/CourseDetails');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createCourseDetails);

module.exports = router;

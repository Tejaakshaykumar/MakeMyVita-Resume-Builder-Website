const express = require('express');
const router = express.Router();
const { createCourseDetails } = require('../controllers/CourseDetails');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createCourseDetails);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createStudentDetails } = require('../controllers/StudentDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createStudentDetails);

module.exports = router;
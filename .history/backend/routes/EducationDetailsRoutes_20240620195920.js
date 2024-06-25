const express = require('express');
const router = express.Router();
const { createEducationDetails,ge } = require('../controllers/EducationDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createEducationDetails);

module.exports = router;

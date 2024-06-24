const express = require('express');
const router = express.Router();
const { createExperienceDetails } = require('../controllers/ExperienceDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createExperienceDetails);

module.exports = router;

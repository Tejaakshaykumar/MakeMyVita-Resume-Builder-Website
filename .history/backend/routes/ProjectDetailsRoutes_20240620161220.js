const express = require('express');
const router = express.Router();
const { createExperienceDetails } = require('../controllers/ProjectDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createExperienceDetails);

module.exports = router;

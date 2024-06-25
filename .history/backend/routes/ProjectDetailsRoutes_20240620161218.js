const express = require('express');
const router = express.Router();
const { createExperienceDetails } = require('../controllers/');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createExperienceDetails);

module.exports = router;

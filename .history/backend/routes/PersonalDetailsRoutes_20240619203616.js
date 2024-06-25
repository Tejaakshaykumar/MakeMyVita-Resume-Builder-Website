const express = require('express');
const router = express.Router();
const { createPersonalDetails } = require('../controllers/PersonalDetailsController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createPersonalDetails);

module.exports = router;

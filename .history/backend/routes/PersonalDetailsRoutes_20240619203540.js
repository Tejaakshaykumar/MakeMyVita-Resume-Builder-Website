const express = require('express');
const router = express.Router();
const { createPersonalDetails } = require('../controllers/personalDetailsController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createPersonalDetails);

module.exports = router;

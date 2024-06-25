const express = require('express');
const router = express.Router();
const { createPersonalDetails, } = require('../controllers/PersonalDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createPersonalDetails);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createPersonalDetails,getPersonalDetails } = require('../controllers/PersonalDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createPersonalDetails);
router.get()

module.exports = router;

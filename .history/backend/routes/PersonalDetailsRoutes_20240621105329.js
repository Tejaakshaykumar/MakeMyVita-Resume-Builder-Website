const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { createPersonalDetails } = require('../controllers/PersonalDetailsController');
const auth = require('../middleware/auth-middleware');
=
router.post('/', auth,= createPersonalDetails);

module.exports = router;

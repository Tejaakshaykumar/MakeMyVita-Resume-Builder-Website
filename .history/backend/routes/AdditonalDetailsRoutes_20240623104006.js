const express = require('express');
const router = express.Router();
const { createAdditonalDetails } = require('../controllers/StudentDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createAdditonalDetails);

module.exports = router;
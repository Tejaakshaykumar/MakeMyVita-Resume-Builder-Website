const express = require('express');
const { socialLogin } = require('../controllers/authController');
const router = express.Router();

router.post('/social-login', socialLogin);

module.exports = router;

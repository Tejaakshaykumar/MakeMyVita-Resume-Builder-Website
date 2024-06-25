const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/auth/signup
router.post('api/signup', authController.signup);

// POST /api/auth/login
router.post('/login', authController.login);

module.exports = router;
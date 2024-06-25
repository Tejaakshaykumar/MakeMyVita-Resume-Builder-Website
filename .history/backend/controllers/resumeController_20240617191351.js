const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const { authenticateUser } = require('../middleware/authMiddleware');

// POST /api/resume
router.post('/', authenticateUser, resumeController.createResume);

// Add more routes for updating, deleting resumes, etc.

module.exports = router;
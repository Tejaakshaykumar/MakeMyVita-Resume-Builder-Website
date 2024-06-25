const express = require('express');
const router = express.Router();
const { createResume, getResumes,getResumeDetails } = require('../controllers/resumeController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createResume);
router.get('/', auth, getResumes);

module.exports = router;

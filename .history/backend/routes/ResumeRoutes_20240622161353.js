const express = require('express');
const router = express.Router();
const { createResume, getResumes,getResumeDetails,deleteResume } = require('../controllers/resumeController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createResume);
router.get('/', auth, getResumes);
router.get('/:id', auth, getResumeDetails);

module.exports = router;

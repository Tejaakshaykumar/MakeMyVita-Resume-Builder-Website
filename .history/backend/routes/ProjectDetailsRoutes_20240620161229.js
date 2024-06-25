const express = require('express');
const router = express.Router();
const { createProjectDetails } = require('../controllers/ProjectDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createExperienceDetails);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createProjectDetails } = require('../controllers/SkillDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createProjectDetails);

module.exports = router;

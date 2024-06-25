const express = require('express');
const router = express.Router();
const { createSkilDetails } = require('../controllers/SkillDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createProjectDetails);

module.exports = router;

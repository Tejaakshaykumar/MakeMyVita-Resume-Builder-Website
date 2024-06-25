const express = require('express');
const router = express.Router();
const { createProjectDetails } = require('../controllers/SkillDetailsControllerDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createProjectDetails);

module.exports = router;

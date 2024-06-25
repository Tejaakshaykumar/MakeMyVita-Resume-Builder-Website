const express = require('express');
const router = express.Router();
const { createSkillDetails } = require('../controllers/SkillDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createSkillDetails);

module.exports = router;

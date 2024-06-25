const express = require('express');
const router = express.Router();
const { createEducationDetails } = require('../controllers/EducationDetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createEducationDetails);
// router.get('/:id', auth, getEducationDetails);

module.exports = router;

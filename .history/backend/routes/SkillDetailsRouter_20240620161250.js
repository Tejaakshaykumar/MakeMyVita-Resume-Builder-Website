const express = require('express');
const router = express.Router();
const { createProjectDetails } = require('../controllers/DetailsController');
const auth = require('../middleware/auth-middleware');

router.post('/', auth, createProjectDetails);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createPersonalDetails } = require('../controllers/StudentDetailsController');
const auth = require('../middleware/auth-middleware');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', auth, upload.single('image'), createPersonalDetails);

module.exports = router;
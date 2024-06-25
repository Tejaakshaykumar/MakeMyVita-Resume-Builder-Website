// const express = require('express');
// const router = express.Router();
// const { createPersonalDetails } = require('../controllers/PersonalDetailsController');
// const auth = require('../middleware/auth-middleware');

// router.post('/', auth, createPersonalDetails);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { createPersonalDetails } = require('../controllers/PersonalDetailsController');
const auth = require('../middleware/auth-middleware');
const multer = require('multer');

// Configure Multer for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', auth, upload.single('image'), createPersonalDetails);

module.exports = router;

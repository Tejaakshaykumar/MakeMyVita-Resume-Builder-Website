const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { createPersonalDetails } = require('../controllers/PersonalDetailsController');
const auth = require('../middleware/auth-middleware');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
  
router.post('/', auth, upload.single('image'), createPersonalDetails);

module.exports = router;

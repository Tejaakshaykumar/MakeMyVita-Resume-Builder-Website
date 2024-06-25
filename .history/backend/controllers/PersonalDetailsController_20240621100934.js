const PersonalDetails = require('../models/PersonalDetails');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

exports.createPersonalDetails = async (req, res) => {
  const { firstName, lastName, professionalEmail,personalEmail,role,phone,city,state,country,website,linkedin,github} = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    const newPersonalDetails = new PersonalDetails({
      firstName,
      lastName,
      professionalEmail,
      personalEmail,
      role,
      phone,
      city,
      state,
      country,
      website,
      linkedin,
      github.
    });
    const personalDetails = await newPersonalDetails.save();
    res.json(personalDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

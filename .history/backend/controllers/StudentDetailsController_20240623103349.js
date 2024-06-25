const Details = require('../models/PersonalDetails');
const path = require('path');
const fs = require('fs');

exports.createPersonalDetails = async (req, res) => {
  const { firstName, lastName, professionalEmail, personalEmail, role, phone, city, state, country, website, linkedin, github } = req.body;

  let imagePath = '';
  if (req.file) {
    const imageBuffer = req.file.buffer;
    const fileName = `${Date.now()}-${req.file.originalname}`;
    imagePath = path.join('uploads', fileName);

    fs.writeFileSync(imagePath, imageBuffer);
  }

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
      github,
      image: imagePath // Save image path
    });
    const personalDetails = await newPersonalDetails.save();
    res.json(personalDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


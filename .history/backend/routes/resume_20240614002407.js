const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// POST route to save resume data
router.post('/', async (req, res) => {
  try {
    const {
      personalDetails,
      educationDetails,
      skills,
      experiences,
      projects,
      imageSrc
    } = req.body;

    const newResume = new Resume({
      personalDetails,
      educationDetails,
      skills,
      experiences,
      projects,
      imageSrc
    });

    const savedResume = await newResume.save();
    res.json(savedResume);
  } catch (error) {
    console.error('Error saving resume:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

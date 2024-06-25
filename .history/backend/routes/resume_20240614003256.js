const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// Route: POST /api/resume
// Description: Create a new resume entry
router.post('/', async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();
    res.json(savedResume);
  } catch (error) {
    console.error('Error saving resume:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

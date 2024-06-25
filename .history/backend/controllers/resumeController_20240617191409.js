const Resume = require('../models/Resume');

exports.createResume = async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
const AdditionalDetails = require('../models/AdditionalDetails');

exports.createAdditionalDetails = async (req, res) => {
  const { 
    sectionName,
    de,

  } = req.body;
  try {
    const newAdditionalDetails = new AdditionalDetails({
        skillName,
        proficiency,
    });
    const additionalDetails = await newAdditionalDetails.save();
    res.json(additionalDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

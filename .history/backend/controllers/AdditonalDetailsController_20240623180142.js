const AdditionalDetails = require('../models/AdditionalDetails');

exports.createAdditionalDetails = async (req, res) => {
  const { 
    skillName,
    proficiency,

  } = req.body;
  try {
    const newAdditionalDetails = new AdditionalDetails({
        skillName,
        proficiency,
    });
    const additionalDetails = await newAdditionalDetails.save();
    res.json(AdditionalDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

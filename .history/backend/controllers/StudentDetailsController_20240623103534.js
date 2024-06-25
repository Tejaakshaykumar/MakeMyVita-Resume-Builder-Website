const AdditionalDetails = require('../models/StudentDetails');

exports.createAdditonalDetails = async (req, res) => {
  const { rollNo,department,degree,institute } = req.body;

  try {
    const newAdditonalDetails = new AdditonalDetails({
      
    });
    const personalDetails = await newPersonalDetails.save();
    res.json(personalDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


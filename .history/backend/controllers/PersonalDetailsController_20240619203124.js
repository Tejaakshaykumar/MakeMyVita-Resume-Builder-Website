const PersonalDetails = require('../');

exports.createPersonalDetails = async (req, res) => {
  const { firstName, lastName, phone, email, address } = req.body;
  try {
    const newPersonalDetails = new PersonalDetails({
      firstName,
      lastName,
      phone,
      email,
      address,
    });
    const personalDetails = await newPersonalDetails.save();
    res.json(personalDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

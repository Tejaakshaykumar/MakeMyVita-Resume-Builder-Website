const StudentDetails = require('../models/StudentDetails');

exports.createStudentDetails = async (req, res) => {
  const { rollNo,department,degree,institute } = req.body;

  try {
    const newStudentDetails = new StudentDetails({
        rollNo,
        department,
        degree,
        institute
    });
    const AdditonalDetails = await newAdditonalDetails.save();
    res.json(AdditonalDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


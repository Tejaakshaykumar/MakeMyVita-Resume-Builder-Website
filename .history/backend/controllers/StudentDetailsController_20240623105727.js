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
    const studentDetails = await newStudentDetails.save();
    res.json(studentDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


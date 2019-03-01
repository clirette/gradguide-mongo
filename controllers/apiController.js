const Student = require('../models/student');

module.exports = {
  getStudentForPDF(req, res) {
    Student.findById(req.params.id, (err, student) => {
      if (err) throw err;
      const returnObj = JSON.parse(JSON.stringify(student));
      delete returnObj.password;
      res.send(returnObj);
    })
  }
}
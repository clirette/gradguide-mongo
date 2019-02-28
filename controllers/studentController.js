const Student = require('../models/student');
const Major = require('../models/major');

module.exports = {
  getStudentsInMajor(req, res) {
    Student.find({'majorCode': req.user.majorCode}, (err, students) => {
      students = students.filter(student => !student._id.equals(req.user._id) && student.share)
      res.render("students", {
        title: 'Students',
        students: students
      });
    });
  },

  getStudentInfo(req, res) {
    res.render('info', { user: req.user });
  },

  postStudentInfo(req, res) {
    let firstName, lastName, majorCode, classification, share;
    if (req.body.firstName) {
      firstName = req.body.firstName;
    }
    if (req.body.lastName) {
      lastName = req.body.lastName;
    }
    if (req.body.classification) {
      classification = req.body.classification;
    }
    if (req.body.share) {
      share = true;
    }
    Student.findOne({_id: req.user._id}, (err, student) => {
      if (req.body.majorCode) {
        majorCode = req.body.majorCode;
        Major.findOne({majorCode: majorCode}, (err, major) => {
          if (err) throw err;
          student.majorCode = majorCode;
          student.majorName = major.majorName;
          student.firstName = firstName;
          student.lastName = lastName;
          student.classification = classification;
          student.share = share;
          student.save()
          .then(response => {
            req.flash('success_msg', 'Info saved');
            res.redirect('/dashboard');
            req.user = student;
          }).catch(err => res.status(400).send({msg: err}));
        })
      } else {
        student.firstName = firstName;
        student.lastName = lastName;
        student.classification = classification;
        student.share = share;
        student.save()
        .then(response => {
          req.flash('success_msg', 'Info saved');
          res.redirect('/dashboard');
          req.user = student;
        }).catch(err => res.status(400).send({msg: err}));
      }
    });
  },

  getCompletedCourses(req, res) {
    req.user.completedCourses.forEach(course => {
      if (course.grade === '4') {
        course.letterGrade = 'A';
      } else if (course.grade === '3') {
        course.letterGrade = 'B';
      } else if (course.grade === '2') {
        course.letterGrade = 'C';
      } else if (course.grade === '1') {
        course.letterGrade = 'D';
      } else if (course.grade === '0') {
        course.letterGrade = 'F';
      }
    })
    res.render('completed-courses', {
      completedCourses: req.user.completedCourses
    });
  },

  getClassmateInfo(req, res) {
    Student.findById(req.params.id, (err, student) => {
      res.render('classmate-info', {student});
    })
  }
}
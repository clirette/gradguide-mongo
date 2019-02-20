const Course = require('../models/course');
const Student = require('../models/student');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'index'
    });
  }),

  app.get('/students', (req, res) => {
    Student.find((err, students) => {
      res.render("students", {
        title: 'Students',
        students: students
      });
    });
  }),

  app.get('/courses', (req, res) => {
      res.render('courseSelect', {
        title: 'Courses'
      });
  }),

  app.get('/courses/:code', (req, res) => {
    Course.find({'subjectCode': req.params.code}, (err, courses) => {
      res.render('courses', {
        title: 'Courses',
        curriculum: req.params.code,
        courses: courses
      });
    });
  });
}
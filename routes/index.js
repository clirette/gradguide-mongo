module.exports = (app, db) => {
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'index'
    });
  }),

  app.get('/students', (req, res) => {
    db.students.find((err, students) => {
      res.render("students", {
        title: 'Students',
        students: students
      });
    });
  }),

  app.get('/courses', (req, res) => {
    db.courses.find((err, courses) => {
      res.render('courseSelect', {
        title: 'Courses',
        courses: courses
      });
    });
  }),

  app.get('/courses/:code', (req, res) => {
    db.courses.find({subjectCode: req.params.code}, (err, courses) => {
      res.render('courses', {
        title: 'Courses',
        curriculum: req.params.code,
        courses: courses
      })
    });
  })
}
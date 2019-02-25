const Course = require('../models/course');
const Student = require('../models/student');
const Major = require('../models/major');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'index'
    });
  }),

  app.get('/students', ensureAuthenticated, (req, res) => {
    Student.find({'majorCode': req.user.majorCode}, (err, students) => {
      res.render("students", {
        title: 'Students',
        students: students
      });
    });
  }),

  app.get('/courses', ensureAuthenticated, (req, res) => {
      res.render('courseSelect', {
        title: 'Courses'
      });
  }),

  app.get('/courses/:code', ensureAuthenticated, (req, res) => {
    Course.find({'subjectCode': req.params.code}).sort({subjectNumber: 1}).exec((err, courses) => {
      res.render('courses', {
        title: 'Courses',
        curriculum: req.params.code,
        courses: courses
      });
    });
  });

  app.get('/major-courses', ensureAuthenticated, (req, res) => {
    Course.find({'subjectCode': req.user.majorCode}).sort({subjectNumber: 1}).exec((err, courses) => {
      res.render('major-courses', {
        title: 'Courses',
        majorCode: req.user.majorCode,
        majorName: req.user.majorName,
        courses: courses
      });
    });
  });

  app.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
      student: req.user.firstName
    });
  })

  app.get('/login', (req, res) => res.render('login'));

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })

  app.get('/info', ensureAuthenticated,  (req, res) => {
    res.render('info', { user: req.user });
  });

  app.post('/info', ensureAuthenticated, (req, res) => {
    let firstName, lastName, majorCode;

    if (req.body.firstName) {
      firstName = req.body.firstName;
    }
    if (req.body.lastName) {
      lastName = req.body.lastName;
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
        student.save()
        .then(response => {
          req.flash('success_msg', 'Info saved');
          res.redirect('/dashboard');
          req.user = student;
        }).catch(err => res.status(400).send({msg: err}));
      }
    });
  });

  app.get('/register', (req, res) => res.render('register'));

  app.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    if (!name || !email || !password || !password2) {
      errors.push({msg: 'Please fill out all fields'});
    }

    if (password !== password2) {
      errors.push({msg: 'Passwords do not match'});
    }

    if (password.length < 6) {
      errors.push({msg: 'Password length must exceed 6'});
    }
    if (errors.length > 0) {
      res.render('register', {
        errors,
        name,
        email,
        password,
        password2
      });      
    } else {
      Student.findOne({email: email}, (err, student) => {
        if (err) throw err;
        if (student) {
          errors.push({msg: 'Student already registered with that email'});
          res.render('register', {
            name,
            email,
            password,
            password2
          });
        } else {
          let firstName, lastName;
          const names = name.split(' ');
          if (names.length > 1) {
            firstName = names[0];
            lastName = names[1];
          } else {
            firstName = name;
          }
          const student = new Student({
            firstName,
            lastName,
            email,
            password
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(student.password, salt, (err, hash) => {
              if (err) throw err;
              student.password = hash;
              student.save()
              .then(student => {
                req.flash('success_msg', 'You are now registered and can log in');
                res.redirect('/login');
              })
              .catch(err => console.log(err));
            })
          })
        }
      })
    }
  })
}
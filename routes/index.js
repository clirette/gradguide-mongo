const Course = require('../models/course');
const Student = require('../models/student');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');

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
    Course.find({'subjectCode': req.params.code}).sort({subjectNumber: 1}).exec((err, courses) => {
      res.render('courses', {
        title: 'Courses',
        curriculum: req.params.code,
        courses: courses
      });
    });
  });

  app.get('/dashboard', ensureAuthenticated, (req, res) => {
    console.log(req);
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

  app.get('/register', (req, res) => res.render('register'));

  app.post('/register', (req, res) => {
    console.log('hello');
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
    console.log(errors);
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
          console.log('again');
          const student = new Student({
            firstName: name,
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
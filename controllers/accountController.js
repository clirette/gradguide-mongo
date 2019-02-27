const Student = require('../models/student');
const bcrypt = require('bcryptjs');
const passport = require('passport');

module.exports = {
  getLogin(req, res) {
    res.render('login');
  },

  postLogin(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
  },
  
  getRegister(req, res) {
    res.render('register');
  }, 

  postRegister(req, res) {
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
            });
          });
        }
      });
    }
  },

  logout(req, res) {
    req.logout();
    res.redirect('/');
  },

  getDashboard(req, res) {
    res.render('dashboard', {
      student: req.user.firstName
    });
  }

}
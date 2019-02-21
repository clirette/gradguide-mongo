const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Student = require('../models/student');

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            Student.findOne({email: email})
            .then(student => {
                if (!student) {
                    return done(null, false, { message: 'That email is not registered' })
                }

                bcrypt.compare(password, student.password, (err, isMatch) => {
                    console.log(student);
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, student);
                    } else {
                        return done(null, false, { message: 'Password incorrect' });
                    }
                });
            });
        })
    );

    passport.serializeUser(function(student, done) {
        done(null, student.id);
    });
    
    passport.deserializeUser(function(id, done) {
        Student.findById(id, function(err, user) {
            done(err, user);
        });
    });
}
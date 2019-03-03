const fullCourses = require('./fullcourses');
const Course = require('../models/course');
const Major = require('../models/major');
const majors = require('./majorsString');

module.exports = {

  insertMajors: function() {
    majors.forEach(major => {
      const newMajor = new Major(major);
      newMajor.save((err, res) => {
        if (err) return console.error(err);
      });
    })
  },

  insertFullCourses: function() {
    fullCourses.forEach(course => {
      const insertCourse = new Course(course);
      insertCourse.save((err, res) => {
        if (err) return console.error(err);
      })
    });
  },
}
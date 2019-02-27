const Course = require('../models/course');
const Student = require('../models/student');
const ObjectId = require('mongodb').ObjectID;

module.exports = {
  getAddCourse(req, res) {
    Course.findById(req.params.id, (err, course) => {
      res.render('add-course', {
        course
      });
    })
  },

  postAddCourse(req, res) {
    Course.findById(req.body._id, (err, course) => {
      if (err) {
        return res.status(400).send({msg: 'Could not find course'});
      }
      const completedCourse = {
        subjectNumber: course.subjectNumber,
        subjectCode: course.subjectCode,
        name: course.name,
        description: course.description,
        credits: course.credits,
        courseId: ObjectId(req.body._id),
        instructor: req.body.instructor,
        semester: req.body.semester,
        grade: req.body.grade
      }
      Student.findById(req.user._id, (err, student) => {
        if (err) {
          return res.status(400).send({msg: 'Could not update student'});
        }
        student.completedCourses.push(completedCourse);
        student.save()
        .then(success => {
          req.flash('success_msg', 'Updated compeleted courses');
          res.redirect(303, '/major-courses')
        }).catch(err => res.status(400).send({msg: err}));
      });
    });
  },

  deleteCourse(req, res) {
    Student.findById(req.user._id, (err, student) => {
      const toDelete = student.completedCourses.findIndex(course => course.courseId.valueOf() == req.body.id);
      if (toDelete > -1) {
        student.completedCourses.splice(toDelete, 1);
      }
      student.save()
      .then(success => {
        req.flash('success_msg', 'Updated completed courses');
        res.send({redirectUrl: '/completed-courses'})
      }).catch(err => res.status(400).send({msg: err}));
    });
  },

  getCourses(req, res) {
      res.render('courseSelect', {
        title: 'Courses'
      });
  },

  getCoursesByCode(req, res) {
    Course.find({'subjectCode': req.params.code}).sort({subjectNumber: 1}).exec((err, courses) => {
      res.render('courses', {
        title: 'Courses',
        curriculum: req.params.code,
        courses: courses
      });
    });
  },

  getMajorCourses(req, res) {
    Student.findById(req.user._id, (err, student) => {
      Course.find({'subjectCode': req.user.majorCode}).sort({subjectNumber: 1}).exec((err, courses) => {
        courses = courses.filter(course => {
          let isPresent = true;
          for (completedCourse of student.completedCourses) {
            if (course._id.equals(completedCourse.courseId)) {
              isPresent = false;
              break;
            }
          }
          return isPresent;
        });
        res.render('major-courses', {
          title: 'Courses',
          majorCode: req.user.majorCode,
          majorName: req.user.majorName,
          courses: courses
        });
      });

    })
  },

  
}
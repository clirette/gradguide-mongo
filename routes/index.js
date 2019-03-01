const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const accountController = require('../controllers/accountController');
const studentController = require('../controllers/studentController');
const courseController = require('../controllers/courseController');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'index'
  });
})

router.get('/login', accountController.getLogin);
router.post('/login', accountController.postLogin);
router.get('/register', accountController.getRegister);
router.post('/register', accountController.postRegister);
router.get('/logout', accountController.logout);
router.get('/dashboard', ensureAuthenticated, accountController.getDashboard);

router.get('/students', ensureAuthenticated, studentController.getStudentsInMajor);
router.get('/students/:id', ensureAuthenticated, studentController.getClassmateInfo);
router.get('/info', ensureAuthenticated, studentController.getStudentInfo);
router.post('/info', ensureAuthenticated, studentController.postStudentInfo);
router.get('/completed-courses', ensureAuthenticated, studentController.getCompletedCourses);

router.get('/add-course/:id', ensureAuthenticated, courseController.getAddCourse);
router.post('/add-course', ensureAuthenticated, courseController.postAddCourse);
router.delete('/delete-course', ensureAuthenticated, courseController.deleteCourse);
router.get('/courses', ensureAuthenticated, courseController.getCourses);
router.get('/courses/:code', ensureAuthenticated, courseController.getCoursesByCode);
router.get('/major-courses', ensureAuthenticated, courseController.getMajorCourses);

router.get('/api/student/:id', ensureAuthenticated, studentController.getStudentForPDF);

module.exports = router;
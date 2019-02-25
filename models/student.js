const mongoose = require('mongoose');

const CompletedCoursesSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId
    },
    degree: {
        type: String
    },
    subjectNumber: {
        type: String
    },
    subjectCode: {
        type: String
    },
    name: {
        type: String,
        //required: true
    },
    description: {
        type: String
    },
    credits: {
        type: String
    },
    instructor: {
        type: String
    },
    semester: {
        type: String
    },
    grade: {
        type: String
    }
})

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    classification: {
        type: String
    },
    majorName: {
        type: String
    },
    majorCode: {
        type: String
    },
    completedCourses: [CompletedCoursesSchema]
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
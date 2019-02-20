const mongoose = require('mongoose');

const CompletedCoursesSchema = new mongoose.Schema({
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
        required: true
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
    semesterCompleted: {
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
        type: String,
        required: true
    },
    degree: {
        type: String
    },
    status: {
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
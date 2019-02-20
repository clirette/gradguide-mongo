const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    subjectCode: {
      type: String,
      required: true  
    },
    subjectNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    credits: {
        type: Number
    }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
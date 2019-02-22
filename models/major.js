const mongoose = require('mongoose');

const MajorSchema = new mongoose.Schema({
    majorCode: {
        type: String,
        required: true
    },
    majorName: {
        type: String,
        required: true
    }
});

const Major = mongoose.model('Major', MajorSchema, 'majors_lookup');

module.exports = Major;
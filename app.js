const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongojs = require('mongojs');
const cors = require('cors');
const path = require('path');
const db = mongojs('gradguide', ['courses', 'course_offerings', 'students', 'counselors', 'curriculum_admins']);
const helper = require('./info');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger("dev"));
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app, db);

app.listen(8000, () => {
  console.log('Gradguide started');
});
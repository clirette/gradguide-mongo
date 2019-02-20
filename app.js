const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongojs = require('mongojs');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = mongojs('gradguide', ['courses', 'course_offerings', 'students', 'counselors', 'curriculum_admins']);
const helper = require('./helpers/info');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger("dev"));

app.use(cors());


app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app, db);

app.listen(8000, () => {
  console.log('Gradguide started');
});
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const mongoose = require('mongoose');
const helper = require('./helpers/info');
const session = require('express-session');

const app = express();

require('./config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger("dev"));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cors());

mongoose.connect('mongodb://localhost/gradguide');

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app);

app.listen(8000, () => {
  console.log('Gradguide started');
});
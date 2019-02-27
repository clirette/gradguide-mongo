const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const helper = require('./helpers/info');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

require('./config/passport')(passport);
require('dotenv').config({path: 'variables.env'})

app.use(express.urlencoded({extended: true}));

app.use(logger("dev"));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cors());

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


require('./routes')(app);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Gradguide started');
});
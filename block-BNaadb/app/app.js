//require
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var User = require('./moduls/user')
var indexRouter = require('./routers/index');
var userRouter = require('./routers/users');

//connect to database

mongoose
  .connect('mongodb://127.0.0.1:27017/app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected'))
  .catch((err) => {
    console.error(err);
  });

//instance the app
var app = express();

//set up template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static directory
app.use(express.static(path.join(__dirname, 'public')));

//Routing middleware
// app.use('/', indexRouter);
app.use('/users', userRouter);

//error handler
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

//listener
app.listen(3000, () => {
  console.log('Server listening to port 3k');
});

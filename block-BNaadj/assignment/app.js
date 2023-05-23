var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var userRouter = require('./router/users');

//connected to data base

mongoose
  .connect('mongodb://127.0.0.1:27017/assignment', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('successfully connnected');
  })
  .catch((err) => {
    console.error(err);
  });
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//handle views

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//router handler
 app.use('/', userRouter);


app.listen(4000, () => {
  console.log(`server listen on Port 4k`);
});

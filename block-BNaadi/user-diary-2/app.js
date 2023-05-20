//require
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var userRouter = require('./routers/users');
//conneting mongo
mongoose
  .connect('mongodb://127.0.0.1:27017/user-diary-2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('successfully connected'))
  .catch((err) => {
    console.error(err);
  });
var app = express();

//static middware

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// views middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routing handle
app.use('/', userRouter);
//listening
app.listen(4000, () => {
  console.log('app listen on port 4k');
});

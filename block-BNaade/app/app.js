var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var userRouter = require('./routers/users');

mongoose
  .connect('mongodb://127.0.0.1:27017/app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected'))
  .catch((err) => {
    console.error(err);
  });

var app = express();

app.set(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', userRouter);

app.listen(4000, () => {
  console.log('app listen on port 4k');
});

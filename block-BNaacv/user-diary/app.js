var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var userRouter = require('./routes/users');

mongoose
  .connect('mongodb://127.0.0.1:27017/user-diary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected'))
  .catch((err) => {
    console.error(err);
  });

var app = express();

//   middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes middleware

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/users' ,userRouter);


// error handler

app.get((req, res, next) => {
  res.send('Page not found');
});

app.listen(4000, () => {
  console.log('app listen on port 4k');
});

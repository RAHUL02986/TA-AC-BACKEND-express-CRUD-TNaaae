var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var studentRoutes = require('./routes/students');

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

//middleware

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/students', studentRoutes);

// handle error

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(5000, () => {
  console.log('app listen on port 5k');
});

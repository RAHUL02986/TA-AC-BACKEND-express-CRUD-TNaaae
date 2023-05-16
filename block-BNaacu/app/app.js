var express = require('express');
var mongoose = require('mongoose');

var studentRoutes = require('./routes/students');

var path = require('path');

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

app.get('view engine', 'ejs');
app.get('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/students', studentRoutes);

app.listen(5000, () => {
  console.log('app listen on port 5k');
});

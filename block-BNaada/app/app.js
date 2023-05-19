var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var User = require('./models/users');
var userRouter = require('./routers/user');
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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use('/user', userRouter);

app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log('app listen on port 4k');
});

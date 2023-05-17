//require
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var user = require('./models/user');
var userRouter = require('./routers/user')
//connect to db
mongoose
  .connect('mongodb://127.0.0.1:27017/application', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('successfully'))
  .catch((err) => {
    console.error(err);
  });

var app = express();

//views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//routing middleware

app.use('/', userRouter);


//capture form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//listener
app.listen(4000, () => {
  console.log('app listen on port 4k');
});

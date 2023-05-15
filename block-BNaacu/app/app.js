var express = require('express');
var mongoose = require('mongoose');
let studentRoutes = require('./')
var path = require('path');
var app = express();

app.get('view engine', 'ejs');
app.get('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/students', studentRoutes);

app.listen(3000, () => {
  console.log('app listen on port 3k');
});

var express = require('express');
var path = require('path');

var mongoose = require('mongoose');

var app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('school', { school: 'AltCampus' });
});

app.get('/about', (req, res) => {
    var school =  { school: 'AltCampus', location: 'Khaniyara' }
  res.render('about',{school : school});
});

app.listen(3300, () => {
  console.log('app listen on port 3k');
});

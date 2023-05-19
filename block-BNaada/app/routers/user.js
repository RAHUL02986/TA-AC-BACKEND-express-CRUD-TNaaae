var express = require('express');
var User = require('../models/users');
var router = express.Router();
router.get('/ ', (req, res) => {
  User.find({})
    .then((users) => {
      res.send('users');
    })
    .catch((err) => {
      return next(err);

    });
    res.render('users.ejs',{users:users});

});

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then((savedData) => res.send(savedData))
    .catch((err) => {
      return res.redirect('/users/new');
      res.redirect('/');
    });
});

router.get('/:id', (req, res) => {
  var id = req.params.id;
  res.render('singleUser');
});

module.exports = router;

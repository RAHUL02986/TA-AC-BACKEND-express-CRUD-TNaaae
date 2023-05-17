var express = require('express');
var mongoose = require('mongoose');
var user = require('../models/user');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('user');
});

router.get('/new', (req, res) => {
  res.render('form');
});
router.post('/', (req, res, next) => {
  user
    .create(req.body)
    .then((newUser) => {
      console.log(newUser);
    })
    .catch((err) => {
      console.error(err);
    });
  res.redirect('/');
});

module.exports = router;

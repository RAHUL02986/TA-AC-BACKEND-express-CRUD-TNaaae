var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/list', (req, res) => {
  res.render('list');
});
router.get('/form', (req, res) => {
  console.log(req.body);
  res.render('form');
});

module.exports = router;

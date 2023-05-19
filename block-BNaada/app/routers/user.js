var express = require('express');
var User = require('../models/users');
var router = express.Router();
router.get('/ ', (req, res) => {
  res.render('list');
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then((savedData) => res.send(savedData))
    .catch((err) => {
      console.error(err);
      res.redirect('/')
    });
});

module.exports = router;
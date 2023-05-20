var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('users');
});
router.get('/new', (req, res) => {
  res.render('form');
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id).catch((err) => {
    return next(err);
    res.render('singleUser', { user: user });
  });
});

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('users', { users: users });
  });
});

router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  User.findById(id)
    .then((useredit) => {
      res.send(useredit);
    })
    .catch((err) => {
      res.send(err);
      res.render('edituser', { user: user });
    });
  res.render('edituser', { user: user });
});
router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
  res.redirect('/users');
});

module.exports = router;

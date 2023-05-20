var express = require('express');
var router = express.Router();
var User = require('../moduls/user');

//user Routes

//Creating new user
router.get('/new', (req, res) => {
  res.render('userForm.ejs');
});

//Saving data
router.post('/', (req, res, next) => {
  User.create(req.body)
    .then((createduser) => res.send(createduser))
    .catch((err) => {
      res.send(err);
    });
  res.redirect('/users');
});

//fetch the user
router.get('/', (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => {
      res.send(err);
    });
  res.render('users.ejs', { users: users });
});

//fetch only one user
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id)
    .then((user) => res.send(user))
    .catch((err) => {
      res.send(err);
    });
  res.render('singleUser', { user });
});

//updating user form
router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findById(id)
    .then((user) => res.send(user))
    .catch((err) => {
      res.send(err);
    });
  res.render('editUser', { user: user });
});

//update user
router.post('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body)
    .then((updatedUser) => res.send(updatedUser))
    .catch((err) => {
      res.send(err);
    });
  res.redirect('/users/' + id);
});

//delete user
router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id)
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(err);
    });
  res.redirect('/users');
});

module.exports = router;

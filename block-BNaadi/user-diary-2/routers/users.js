var express = require('express');

var User = require('../models/user');

var router = express.Router();

router.post('/users', (req, res) => {
  console.log(req.body);
  User.create({}, req.body)
    .then((User) => res.send(User))
    .catch((err) => {
      res.send(err);
      res.render('users');
      res.redirect('/users');
    });
});

router.get('/',(req,res)=>{
    res.render('listUsers')
})

module.exports = router;

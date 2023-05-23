var express = require('express');

var User = require('../models/user');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('allUsers');
});

router.get('/new', (req, res) => {
  res.render('createUser');
});

//Saving data
router.post("/", (req, res, next) => {
    User.create(req.body).then((createUser)=>{
        res.send(createUser)
    }).catch((err)=>{
        res.send(err)

        res.redirect("/");
    }) 

    });

  
  //fetch the user
  router.get("/", (req, res, next) => {
    User.find({}, (err, users) => {
      if (err) return next(err);
      res.render("users.ejs", { users: users });
    });
  });
  
router.post('/id/edit', (req, res) => {
  var id = req.params.id;
  User.create(id, req.body)
    .then((updatedUser) => {
      res.send(updatedUser);
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/');
    });
});

module.exports = router;

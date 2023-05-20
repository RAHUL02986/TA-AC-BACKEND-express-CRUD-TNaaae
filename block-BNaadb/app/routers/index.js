var express = require("express");
var router = express.Router();
var User = require('../moduls/user')

//router
router.get("/", (req, res) => {
  res.render("index.ejs");
});

module.exports = router;
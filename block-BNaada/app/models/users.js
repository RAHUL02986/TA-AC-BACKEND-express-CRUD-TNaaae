var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, minlength: 18 },
  email: { type: String, matchMedia: '@' },
});


var User = mongoose.model("User",userSchema )

module.exports = User;
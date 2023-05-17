var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  age: { type: Number, maxlength: 48, minlenght: 18 },
  email: { type: String },
  password: { type: String }
},{timestamps:true});

var User = mongoose.model('User', userSchema);

module.exports = User;

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String, matchMedia:"@"},
    email:{type:Number, min:18,max:45},
    address : String,
    bio: String,
    hobbies: [String]
})

var User = mongoose.model("User",userSchema);

module.exports = User;
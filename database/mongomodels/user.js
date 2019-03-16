var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doitdb',{ useNewUrlParser: true });
var passportLocalMongoose = require('passport-local-mongoose');
var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    fullname:String,
    email:String,
    category:String,
    spass:String,
    secured:String,
    state:String,
    branch:String,
    income:Number

});

UserSchema.plugin(passportLocalMongoose);

module.exports =mongoose.model("User",UserSchema);


//install mongodb and mongoose
const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");  //simplifies the integration of Passport.js with Mongoose.
// Passport.js is a popular authentication middleware for Node.js, and Mongoose is commonly used with MongoDB to define data models and interact with the database.

mongoose.connect("mongodb://127.0.0.1:27017/Robonox");// creating the DB with the name: pin


// creating schema name: userSchema...
const userSchema = mongoose.Schema({ 
     username: String,
     email:String,
     password:String,
     profileImage:String,
     contact:Number,
     boards:[],
     type:Array,
     default:[],
});


userSchema.plugin(plm);  // used to plugin to a Mongoose schema
module.exports = mongoose.model("user", userSchema);  // here user is collection exporting userSchema 







// const mongoose = require('mongoose');
// const plm = require('passport-local-mongoose');

// mongoose.connect("mongodb://127.0.0.1.27017/shiv");

// const useSchema = mongoose.Schema({
//      name: String,
//      email:String,
//      subject:String,
//      message:String
// });


// userSchema.plugin(plm);
//  module.exports = mongoose.model("user","useSchema");



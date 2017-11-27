var Passport = require("passport");
var LocalStrategy    = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('./config/authconfig');

console.log(configAuth.googleAuthConfigObject);

module.exports = function(passport) {

};
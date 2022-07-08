const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

passport.use(
    new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                return done(null, false, { message: "Username/Email not registered" }) //error, usernameexists, message
            }
            //email exists let's verify the password
            const isMatch = await user.isvalidPassword(password);
            if (isMatch) {
                return done(null, user)
            } else {
                return done(null, false, { message: "Incorrect Password" })
            }
        } catch (error) {
            done(error);
        }
    })
);

//Automatic session building cookie for persistent login by passport library
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  })



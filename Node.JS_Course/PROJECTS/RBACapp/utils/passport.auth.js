const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require('../models/user.model');
require('dotenv').config;

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

//google OAuth
passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        passReqToCallback: true
    },
        async (req, accessToken, refreshToken, profile, done) => {
            try {
                console.log(profile);
                // if user exists return the user
                let existingUser = await User.findOne({ 'google.id': profile.id });
                if (existingUser) {
                    return done(null, existingUser);
                }

                const newUser = new User({
                    google: {
                        id: profile.id,
                    },
                    email: profile.emails[0].value,
                    password: profile.id
                });
                await newUser.save();
                return done(null, newUser);
            } catch (error) {
                return done(error, false)
            }
        }
    ));


//Automatic session building cookie for persistent login by passport library=========================================================>>
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
})



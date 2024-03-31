const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const OutlookStrategy = require('passport-outlook').Strategy;

// Configure Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Handle user profile data
  return done(null, profile);
}));

// Configure Outlook OAuth Strategy
passport.use(new OutlookStrategy({
  clientID: OUTLOOK_CLIENT_ID,
  clientSecret: OUTLOOK_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/outlook/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Handle user profile data
  return done(null, profile);
}));

module.exports= passport;
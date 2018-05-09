let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let mongoose = require('mongoose');
let User = mongoose.model('User');

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Foutieve gebruikersnaam.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Foutief wachtwoord.' });
      }
      return done(null, user);
    });
  })
);

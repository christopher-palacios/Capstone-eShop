const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../db/models/user");

// Specify some verification options
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

// Same as above
// let jwtOptions = {
//   jwtFromRequest: (req) => {
//     return req.cookies?.jwt || ExtractJwt.fromAuthHeaderAsBearerToken();
//   },
//   secretOrKey: process.env.JWT_SECRET,
// };

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayLoad, done) => {
    // Check expiration date of token
    if (Date.now() > jwtPayLoad.expires) {
      return done(null, false, { message: "Please login again" });
    }
    // Destructure issuedAtTime and expiration of token, along with email and id
    let { iat, exp, ...userData } = jwtPayLoad;
    // Redefine the value of userData to be the User we find by id
    userData = await User.findById(userData._id);
    // Return the user (which really attaches the user to the request)
    return done(null, userData);
  })
);

module.exports = passport;

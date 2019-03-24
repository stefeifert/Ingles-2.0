const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// define the User model schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: { unique: true }
  },
  password: String
});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compareSync(password, this.password);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();

  user.password = bcrypt.hashSync(user.password, parseInt(process.env.SALT))

  return next();

});


module.exports = mongoose.model('User', UserSchema);

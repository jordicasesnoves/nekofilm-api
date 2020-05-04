const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  uuid: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
});

UserSchema.pre("save", function (next) {
  let user = this;
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  next();
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, res) {
    cb(null, res);
  });
};

module.exports = mongoose.model("User", UserSchema);

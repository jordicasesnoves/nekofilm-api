const { users } = require("../data");

class userModel {
  static all() {
    return users;
  }
}

module.exports = {
  userModel,
};

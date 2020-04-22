const { userModel } = require("../models/userModel");

const usersResolvers = {
  Query: {
    users: () => userModel.all(),
  },
};

module.exports = {
  usersResolvers,
};

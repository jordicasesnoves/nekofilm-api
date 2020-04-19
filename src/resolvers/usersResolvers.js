const { userModel } = require("../models");

const usersResolvers = {
  Query: {
    users: () => userModel.all(),
  },
};

module.exports = {
  usersResolvers,
};

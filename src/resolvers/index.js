const { usersResolvers } = require("./usersResolvers");
const { moviesResolvers } = require("./moviesResolvers");

const resolvers = [usersResolvers, moviesResolvers];

module.exports = {
  resolvers,
};

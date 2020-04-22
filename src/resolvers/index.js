const { usersResolvers } = require("./usersResolvers");
const { moviesResolvers } = require("./moviesResolvers");
const { movieCreditsResolvers } = require("./movieCreditsResolvers");

const resolvers = [usersResolvers, moviesResolvers, movieCreditsResolvers];

module.exports = {
  resolvers,
};

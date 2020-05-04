const { usersResolvers } = require("./usersResolvers");
const { moviesResolvers } = require("./moviesResolvers");
const { movieCreditsResolvers } = require("./movieCreditsResolvers");
const { showsResolvers } = require("./showsResolvers");
const { showCreditsResolvers } = require("./showCreditsResolvers");
const { authResolvers } = require("./authResolvers");

const resolvers = [
  authResolvers,
  usersResolvers,
  moviesResolvers,
  movieCreditsResolvers,
  showsResolvers,
  showCreditsResolvers,
];

module.exports = {
  resolvers,
};

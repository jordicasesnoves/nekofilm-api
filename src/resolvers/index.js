const { usersResolvers } = require("./usersResolvers");
const { moviesResolvers } = require("./moviesResolvers");
const { movieCreditsResolvers } = require("./movieCreditsResolvers");
const { showsResolvers } = require("./showsResolvers");
const { showCreditsResolvers } = require("./showCreditsResolvers");

const resolvers = [
  usersResolvers,
  moviesResolvers,
  movieCreditsResolvers,
  showsResolvers,
  showCreditsResolvers,
];

module.exports = {
  resolvers,
};

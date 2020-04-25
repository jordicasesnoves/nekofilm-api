const { query } = require("./query");
const {
  userType,
  MovieType,
  infoType,
  MovieCreditsType,
  ShowType,
  ShowCreditsType,
  ShowEpisodeType,
} = require("./types");

const typeDefs = [
  query,
  userType,
  MovieType,
  infoType,
  MovieCreditsType,
  ShowType,
  ShowCreditsType,
  ShowEpisodeType,
];

module.exports = { typeDefs };

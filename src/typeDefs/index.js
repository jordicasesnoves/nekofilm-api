const { query } = require("./query");
const {
  userType,
  MovieType,
  infoType,
  MovieCreditsType,
  MovieDetailType,
  ShowType,
  ShowDetailType,
  ShowCreditsType,
  ShowEpisodeType,
} = require("./types");

const typeDefs = [
  query,
  userType,
  MovieType,
  infoType,
  MovieCreditsType,
  MovieDetailType,
  ShowType,
  ShowDetailType,
  ShowCreditsType,
  ShowEpisodeType,
];

module.exports = { typeDefs };

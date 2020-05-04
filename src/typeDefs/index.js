const { query } = require("./query");
const { mutation } = require("./mutation");
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
  mutation,
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

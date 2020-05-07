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
  VideoType,
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
  VideoType,
];

module.exports = { typeDefs };

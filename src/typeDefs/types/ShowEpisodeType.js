const { gql } = require("apollo-server-express");

// Search movies based Type
// https://developers.themoviedb.org/3/search/search-movies
const ShowEpisodeType = gql`
  type ShowEpisode {
    air_date: String!
    episode_number: Int!
    name: String!
    overview: String!
    id: Int!
    production_code: String
    season_number: Int!
    still_path: String
    vote_average: Float!
    vote_count: Int!
  }
`;

module.exports = {
  ShowEpisodeType,
};

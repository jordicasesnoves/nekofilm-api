const { gql } = require("apollo-server-express");

// Search movies based Type
// https://developers.themoviedb.org/3/search/search-movies
const ShowType = gql`
  type Show {
    poster_path: String
    overview: String!
    first_air_date: String
    origin_country: [String]!
    genre_ids: [ID]!
    id: ID!
    original_name: String!
    original_language: String!
    name: String!
    backdrop_path: String
    popularity: Float!
    vote_count: Int!
    vote_average: Float!
  }

  type Shows {
    info: Info
    results: [Show]
  }
`;

module.exports = {
  ShowType,
};

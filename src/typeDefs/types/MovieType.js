const { gql } = require("apollo-server-express");

// Search movies based Type
// https://developers.themoviedb.org/3/search/search-movies
const MovieType = gql`
  type Movie {
    poster_path: String
    adult: Boolean!
    overview: String!
    release_date: String
    genre_ids: [ID]!
    id: ID!
    original_title: String!
    original_language: String!
    title: String!
    backdrop_path: String
    popularity: Float!
    vote_count: Int!
    video: Boolean!
    vote_average: Float!
  }

  type Movies {
    info: Info
    results: [Movie]
  }
`;

module.exports = {
  MovieType,
};

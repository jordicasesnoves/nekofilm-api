const { gql } = require("apollo-server-express");

// Search movies based Type
// https://developers.themoviedb.org/3/search/search-movies
const MovieDetailType = gql`
  type MovieDetail {
    adult: Boolean!
    backdrop_path: String
    belongs_to_collection: MovieDetailBelongsToCollection
    budget: Int!
    genres: [MovieDetailGenre!]!
    homepage: String
    id: Int!
    imdb_id: String
    original_language: String!
    original_title: String!
    overview: String
    popularity: Float!
    poster_path: String
    production_companies: [MovieDetailProductionCompany!]!
    production_countries: [MovieDetailProductionCountry!]!
    release_date: String!
    revenue: Int!
    runtime: Int
    spoken_languages: [MovieDetailSpokenLanguage!]!
    status: MovieDetailStatus
    tagline: String
    title: String!
    video: Boolean!
    videos: Videos
    vote_average: Float!
    vote_count: Int!
  }

  enum MovieDetailStatus {
    Rumored
    Planned
    "In Production"
    Post
    Production
    Released
    Canceled
  }

  extend type MovieDetail {
    credits: MovieCredits
  }

  type MovieDetailBelongsToCollection {
    id: Int!
    name: String!
    poster_path: String
    backdrop_path: String
  }

  type MovieDetailGenre {
    id: ID!
    name: String!
  }

  type MovieDetailProductionCompany {
    name: String!
    id: Int!
    logo_path: String
    origin_country: String!
  }

  type MovieDetailProductionCountry {
    iso_3166_1: String!
    name: String!
  }

  type MovieDetailSpokenLanguage {
    iso_639_1: String!
    name: String!
  }
`;

module.exports = {
  MovieDetailType,
};

const { gql } = require("apollo-server-express");

const MovieCreditsType = gql`
  # Get the cast and crew for a movie.
  # https://developers.themoviedb.org/3/movies/get-movie-credits
  type MovieCredits {
    id: ID
    cast: [MovieCast]!
    crew: [MovieCrew]!
  }

  interface MovieCredit {
    id: ID!
    credit_id: ID!
    gender: Int
    name: String!
    profile_path: String
  }

  type MovieCast implements MovieCredit {
    cast_id: Int!
    character: String!
    credit_id: ID!
    gender: Int
    id: ID!
    name: String!
    order: Int!
    profile_path: String
  }

  type MovieCrew implements MovieCredit {
    credit_id: ID!
    department: String!
    gender: Int
    id: ID!
    job: String!
    name: String!
    profile_path: String
  }
`;

module.exports = {
  MovieCreditsType,
};

const { gql } = require("apollo-server-express");

const ShowCreditsType = gql`
  # Get the cast and crew for a movie.
  # https://developers.themoviedb.org/3/movies/get-movie-credits
  type ShowCredits {
    id: ID
    cast: [ShowCast]!
    crew: [ShowCrew]!
  }

  interface ShowCredit {
    id: ID!
    credit_id: ID!
    gender: Int
    name: String!
    profile_path: String
  }

  type ShowCast implements ShowCredit {
    character: String!
    credit_id: ID!
    gender: Int
    id: ID!
    name: String!
    order: Int!
    profile_path: String
  }

  type ShowCrew implements ShowCredit {
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
  ShowCreditsType,
};

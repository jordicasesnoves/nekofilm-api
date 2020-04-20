const { gql } = require("apollo-server-express");

const movieType = gql`
  type Movie {
    id: ID
    title: String
    poster_path: String
    release_date: String
  }
`;

module.exports = {
  movieType,
};

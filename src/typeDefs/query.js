const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    users: [User]

    "Search for movies by title"
    movies(title: String!): Movies

    "Get movie details with a movie id"
    movie(id: ID!): MovieDetail

    "Search for TV Shows by title"
    shows(name: String!): Shows

    "Get TV Show details with a tvshow id"
    show(id: ID!): ShowDetail
  }
`;

module.exports = {
  query,
};

const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    users: [User]
    movies(title: String!): [Movie]
    movie(id: ID!): Movie
  }
`;

module.exports = {
  query,
};

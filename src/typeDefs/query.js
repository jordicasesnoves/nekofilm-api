const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    users: [User]
    movies(title: String!): Movies
    movie(id: ID!): Movie
    shows(name: String!): Shows
    show(id: ID!): ShowDetail
  }
`;

module.exports = {
  query,
};

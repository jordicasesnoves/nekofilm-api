const { gql } = require("apollo-server-express");
const mutation = gql`
  type Mutation {
    signup(email: String!, username: String!, password: String!): String
    login(email: String!, password: String!): String
  }
`;

module.exports = { mutation };

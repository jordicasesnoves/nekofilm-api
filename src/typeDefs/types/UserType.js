const { gql } = require("apollo-server-express");

const userType = gql`
  type User {
    id: ID!
    email: String!
    username: String!
  }
`;

module.exports = {
  userType,
};

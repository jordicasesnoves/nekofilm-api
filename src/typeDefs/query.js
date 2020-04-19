const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    users: [User]
  }
`;

module.exports = {
  query,
};

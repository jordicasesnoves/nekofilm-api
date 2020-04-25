const { gql } = require("apollo-server-express");

const personType = gql`
  type Person {
    id: ID
    name: String
  }
`;

module.exports = {
  personType,
};

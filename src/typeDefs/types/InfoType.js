const { gql } = require("apollo-server-express");

const infoType = gql`
  type Info {
    page: Int
    total_results: Int
    total_pages: Int
  }
`;

module.exports = {
  infoType,
};

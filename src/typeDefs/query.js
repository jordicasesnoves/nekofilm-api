const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    users: [User]

    "Get movie details with a movie id"
    movie(id: Int!): MovieDetail

    "Search for movies by title"
    movies(title: String!): Movies

    "Get the daily trending Movies"
    moviesTrending: Movies

    "Search for TV Shows by title"
    shows(name: String!): Shows

    "Get TV Show details with a tvshow id"
    show(id: Int!): ShowDetail

    "Get the daily trending TV Shows"
    showsTrending: Shows
  }
`;

module.exports = {
  query,
};

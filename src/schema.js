// Example of schema (all-in-one) config
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    avatar: String
    name: String
    email: String
    isPremium: Boolean
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => usersList,
  },
};

const usersList = [
  {
    name: "Rick Sanchez",
    id: 1,
    status: "Alive",
  },
  {
    name: "Morty Smith",
    id: 2,
    status: "Alive",
  },
];

export default { typeDefs, resolvers };

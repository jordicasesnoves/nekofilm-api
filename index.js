if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { ApolloServer, gql, graphqlExpress } = require("apollo-server-express");
const { typeDefs } = require("./src/typeDefs/index.js");
const { resolvers } = require("./src/resolvers/index.js");

const PORT = process.env.PORT || 3500;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
);

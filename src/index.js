const express = require("express");
const { ApolloServer, gql, graphqlExpress } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs/index.js");
const { resolvers } = require("./resolvers/index.js");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

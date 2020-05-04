if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const config = require("./src/config");
const service = require("./src/services");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./src/typeDefs/index.js");
const { resolvers } = require("./src/resolvers/index.js");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3500;
const app = express();

mongoose.Promise = require("bluebird");
mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.db, {
    useNewUrlParser: true,
    promiseLibrary: require("bluebird"),
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.error("Error connection MongoDB: " + err));

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  introspection: true,
  playground: {
    settings: {
      "editor.theme": "light",
    },
  },
  debug: true,
  context: async ({ req }) => {
    let authToken = null;
    let user = null;

    try {
      authToken = req.headers.authorization;

      if (authToken) {
        user = await service.decodeToken(authToken);
      }
    } catch (e) {
      console.warn(`No se pudo autenticar el token: ${authToken}`);
    }
    return {
      authToken,
      user,
    };
  },
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
);

const { sign } = require("jsonwebtoken");
const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const service = require("../services");
const { ApolloError } = require("apollo-server-express");

const authResolvers = {
  Mutation: {
    signup: async (_, { email, username, password }) => {
      // check if there's a user with that email or username
      const query = await User.findOne({
        $or: [{ email: email }, { username: username }],
      });

      // if the username and the email are not signed up, create new user
      if (query == null) {
        let newUser = {};
        newUser.uuid = uuidv4();
        newUser.username = username;
        newUser.email = email;
        newUser.password = password;

        const user = await User.create(newUser);
        return service.createToken(user);
      } else {
        throw new ApolloError(`User already exists`);
      }
    },
    login: async (_, { email, password }, { res }) => {
      const user = await User.find();
      const accessToken = sign({ userId: user.id });
      return {};
    },
  },
};
module.exports = { authResolvers };

const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const service = require("../services");
const { ApolloError, AuthenticationError } = require("apollo-server-express");

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
        // If the user is already signed up, throw an error
        throw new AuthenticationError(`User already exists`);
      }
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email: email });

      if (!user) {
        throw new AuthenticationError("No user with that email");
      }

      const validPassword = await bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        throw new AuthenticationError("Incorrect password");
      }

      return service.createToken(user);
    },
  },
};
module.exports = { authResolvers };

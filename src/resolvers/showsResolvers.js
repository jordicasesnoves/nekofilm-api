const { fetchShow, fetchShows } = require("../models/showModel");

const showsResolvers = {
  Query: {
    shows: async (parent, args, context) => {
      const { name } = args;
      return fetchShows({ name });
    },
    show: async (parent, args, context) => {
      const { id } = args;
      return fetchShow({ id });
    },
  },
};

module.exports = {
  showsResolvers,
};
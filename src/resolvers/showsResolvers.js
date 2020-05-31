const {
  fetchShow,
  fetchShows,
  fetchTrendingShows,
} = require("../models/showModel");

const showsResolvers = {
  Query: {
    showsTrending: async (parent, args, context) => {
      // Disabled required auth for demo purposes
      // if (!context.user) return null;
      return fetchTrendingShows();
    },
    shows: async (parent, args, context) => {
      // Disabled required auth for demo purposes
      // if (!context.user) return null;
      const { name } = args;
      return fetchShows({ name });
    },
    show: async (parent, args, context) => {
      // Disabled required auth for demo purposes
      // if (!context.user) return null;
      const { id } = args;
      return fetchShow({ id });
    },
  },
};

module.exports = {
  showsResolvers,
};

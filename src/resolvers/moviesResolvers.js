const { fetchMovie, fetchMovies } = require("../models/movieModel");

const moviesResolvers = {
  Query: {
    movies: async (parent, args, context) => {
      if (!context.user) return null;
      const { title } = args;
      return fetchMovies({ title });
    },
    movie: async (parent, args, context) => {
      const { id } = args;
      return fetchMovie({ id });
    },
  },
};

module.exports = {
  moviesResolvers,
};

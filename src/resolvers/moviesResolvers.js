const {
  fetchMovie,
  fetchMovies,
  fetchTrendingMovies,
} = require("../models/movieModel");

const moviesResolvers = {
  Query: {
    moviesTrending: async (parent, args, context) => {
      // Disabled required auth for demo purposes
      // if (!context.user) return null;
      return fetchTrendingMovies();
    },
    movies: async (parent, args, context) => {
      // Disabled required auth for demo purposes
      // if (!context.user) return null;
      const { title } = args;
      return fetchMovies({ title });
    },
    movie: async (parent, args, context) => {
      // Disabled required auth for demo purposes
      // if (!context.user) return null;
      const { id } = args;
      return fetchMovie({ id });
    },
  },
};

module.exports = {
  moviesResolvers,
};

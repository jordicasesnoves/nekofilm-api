//const { fetchMovie, fetchMovies } = require("../models");

const movieCreditsResolvers = {
  MovieCredit: {
    __resolveType(credit) {
      if (credit.job) {
        return "MovieCrew";
      } else {
        return "MovieCast";
      }
    },
  },
};

module.exports = {
  movieCreditsResolvers,
};

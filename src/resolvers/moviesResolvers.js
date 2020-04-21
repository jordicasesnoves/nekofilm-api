const fetch = require("node-fetch");
const apiKey = process.env.APIKEY;

const fetchMovies = async ({ title } = {}) => {
  const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`;
  const config = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  let response = await fetch(apiURL, config);
  let { results } = await response.json();
  return results;
};

const fetchMovie = async ({ id } = {}) => {
  const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const config = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  let response = await fetch(apiURL, config);
  let result = await response.json();
  return result;
};

const moviesResolvers = {
  Query: {
    movies: (_, args) => {
      const { title } = args;
      return fetchMovies({ title });
    },
    movie: (_, args) => {
      const { id } = args;
      return fetchMovie({ id });
    },
  },
};

module.exports = {
  moviesResolvers,
};

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
  console.log(results);
  return results;
};

const moviesResolvers = {
  Query: {
    movies: (_, args) => {
      const { title } = args;
      return fetchMovies({ title });
    },
  },
};

module.exports = {
  moviesResolvers,
};

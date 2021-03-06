const fetch = require("node-fetch");
const { ApolloError } = require("apollo-server-express");
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
  let json = await response.json();

  if (response.status != 200) {
    throw new ApolloError(response.statusText, response.status);
  }
  if (json.total_results == 0) {
    throw new ApolloError(`No results found for query: ${title}`);
  }

  let { page, total_results, total_pages, results } = json;
  let info = { page, total_results, total_pages };

  return {
    info: info,
    results,
  };
};

const fetchMovie = async ({ id } = {}) => {
  const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,images,credits,reviews`;
  const config = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  let response = await fetch(apiURL, config);
  let result = await response.json();

  if (response.status !== 200) {
    throw new ApolloError(response.statusText, response.status);
  }

  return { ...result };
};

const fetchTrendingMovies = async () => {
  const apiURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
  const config = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  let response = await fetch(apiURL, config);
  let json = await response.json();

  if (response.status != 200) {
    throw new ApolloError(response.statusText, response.status);
  }
  if (json.total_results == 0) {
    throw new ApolloError(`No results found for query: ${title}`);
  }

  let { page, total_results, total_pages, results } = json;
  let info = { page, total_results, total_pages };

  return {
    info: info,
    results,
  };
};

module.exports = {
  fetchMovie,
  fetchMovies,
  fetchTrendingMovies,
};

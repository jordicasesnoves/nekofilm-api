const fetch = require("node-fetch");
const { ApolloError } = require("apollo-server-express");
const apiKey = process.env.APIKEY;

const fetchShows = async ({ name } = {}) => {
  const apiURL = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${name}`;
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
    throw new ApolloError(`No results found for query: ${name}`);
  }

  let { page, total_results, total_pages, results } = json;
  let info = { page, total_results, total_pages };

  return {
    info: info,
    results,
  };
};

const fetchShow = async ({ id } = {}) => {
  const apiURL = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=videos,images,credits,reviews`;

  const config = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  let response = await fetch(apiURL, config);
  let result = await response.json();

  if (response.status != 200) {
    throw new ApolloError(response.statusText, response.status);
  }
  return { ...result };
};

module.exports = {
  fetchShow,
  fetchShows,
};

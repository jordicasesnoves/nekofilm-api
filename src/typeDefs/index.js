const { query } = require("./query");
const { userType, movieType, infoType, MovieCreditsType } = require("./types");

const typeDefs = [query, userType, movieType, infoType, MovieCreditsType];

module.exports = { typeDefs };

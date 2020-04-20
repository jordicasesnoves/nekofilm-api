const { query } = require("./query");
const { userType, movieType } = require("./types");

const typeDefs = [query, userType, movieType];

module.exports = { typeDefs };

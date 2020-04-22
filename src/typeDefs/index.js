const { query } = require("./query");
const { userType, movieType, infoType } = require("./types");

const typeDefs = [query, userType, movieType, infoType];

module.exports = { typeDefs };

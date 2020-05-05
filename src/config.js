module.exports = {
  db: process.env.MONGODB_URI || "mongodb://localhost/api",
  SECRET_TOKEN: process.env.SECRET_TOKEN,
};

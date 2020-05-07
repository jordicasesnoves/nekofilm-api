const { gql } = require("apollo-server-express");

// Note: The video type is the same for TV Shows and Movies
// https://developers.themoviedb.org/3/tv/get-tv-videos
// https://developers.themoviedb.org/3/movies/get-movie-videos
const VideoType = gql`
  type Video {
    id: String
    iso_639_1: String
    iso_3166_1: String
    key: String
    name: String
    site: String
    size: Int
    type: String
  }

  type Videos {
    id: Int
    results: [Video]
  }
`;

module.exports = { VideoType };

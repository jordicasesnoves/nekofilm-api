const { gql } = require("apollo-server-express");

// Get the primary TV show details by id.
// https://developers.themoviedb.org/3/tv/get-tv-details
const ShowDetailType = gql`
  type ShowDetail {
    backdrop_path: String
    created_by: [ShowDetailCreatedBy!]!
    episode_run_time: [Int!]!
    first_air_date: String!
    genres: [ShowDetailGenre!]!
    homepage: String!
    id: ID!
    in_production: Boolean!
    languages: [String!]!
    last_air_date: String
    last_episode_to_air: ShowDetailLastEpisodeToAir!
    name: String!
    networks: [ShowDetailNetwork!]!
    number_of_episodes: Int!
    number_of_seasons: Int!
    origin_country: [String!]!
    original_language: String!
    original_name: String!
    overview: String!
    popularity: Float!
    poster_path: String
    production_companies: [ShowDetailProductionCompany!]!
    seasons: [ShowDetailSeason!]!
    staus: String!
    type: String!
    vote_average: Float!
    vote_count: Int!
  }

  extend type ShowDetail {
    credits: ShowCredits
  }

  type ShowDetailCreatedBy {
    id: Int!
    credit_id: String!
    name: String!
    gender: Int!
    profile_path: String!
  }

  type ShowDetailGenre {
    id: ID!
    name: String!
  }

  type ShowDetailLastEpisodeToAir {
    air_date: String!
    episode_number: Int!
    id: Int!
    name: String!
    overview: String!
    production_code: String!
    season_number: Int!
    show_id: Int!
    still_path: String!
    vote_average: Float!
    vote_count: Int!
  }

  type ShowDetailNetwork {
    name: String!
    id: Int!
    logo_path: String!
    origin_country: String!
  }

  type ShowDetailProductionCompany {
    id: Int!
    logo_path: String
    name: String!
    origin_country: String!
  }

  type ShowDetailSeason {
    air_date: String!
    episode_count: Int!
    id: Int!
    name: String!
    overview: String!
    poster_path: String!
    season_number: Int!
  }
`;

module.exports = {
  ShowDetailType,
};

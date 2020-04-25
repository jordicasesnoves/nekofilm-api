const showCreditsResolvers = {
  ShowCredit: {
    __resolveType(credit) {
      if (credit.job) {
        return "ShowCrew";
      } else {
        return "ShowCast";
      }
    },
  },
};

module.exports = {
  showCreditsResolvers,
};

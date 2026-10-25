const musicService = require('./musicService');

const recommendationService = {
  getDailyMix: async (userId) => {
    const tracks = await musicService.getTrending();
    return {
      title: 'Daily Mix 1',
      description: 'Custom tailored stream based on your recent listening habits.',
      tracks: tracks.slice(0, 3),
    };
  },

  getDiscoverWeekly: async (userId) => {
    const tracks = await musicService.getTrending();
    return {
      title: 'Discover Weekly',
      description: 'Your weekly update of fresh music and deep cuts.',
      tracks: tracks.slice(1, 4),
    };
  },
};

module.exports = recommendationService;

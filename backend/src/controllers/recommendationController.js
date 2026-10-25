const recommendationService = require('../services/recommendationService');

const recommendationController = {
  getDailyMix: async (req, res, next) => {
    try {
      const mix = await recommendationService.getDailyMix(req.user?.id);
      res.json({ success: true, mix });
    } catch (err) {
      next(err);
    }
  },

  getDiscoverWeekly: async (req, res, next) => {
    try {
      const weekly = await recommendationService.getDiscoverWeekly(req.user?.id);
      res.json({ success: true, weekly });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = recommendationController;

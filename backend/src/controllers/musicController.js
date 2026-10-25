const musicService = require('../services/musicService');

const musicController = {
  getTrending: async (req, res, next) => {
    try {
      const tracks = await musicService.getTrending();
      res.json({ success: true, count: tracks.length, tracks });
    } catch (err) {
      next(err);
    }
  },

  search: async (req, res, next) => {
    try {
      const query = req.query.q || '';
      const results = await musicService.search(query);
      res.json({ success: true, query, results });
    } catch (err) {
      next(err);
    }
  },

  getTrackById: async (req, res, next) => {
    try {
      const track = await musicService.getTrackById(req.params.id);
      res.json({ success: true, track });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = musicController;

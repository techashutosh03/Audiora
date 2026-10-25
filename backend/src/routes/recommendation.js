const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

router.get('/daily-mix', recommendationController.getDailyMix);
router.get('/discover-weekly', recommendationController.getDiscoverWeekly);

module.exports = router;

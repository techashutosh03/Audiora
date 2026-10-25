const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.get('/', playlistController.getUserPlaylists);
router.post('/', playlistController.createPlaylist);
router.post('/:id/tracks', playlistController.addTrackToPlaylist);

module.exports = router;

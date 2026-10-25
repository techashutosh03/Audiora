const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema(
  {
    trackId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, default: '' },
    durationSeconds: { type: Number, required: true },
    coverUrl: { type: String, default: '' },
    audioUrl: { type: String, default: '' },
    genre: { type: String, default: 'Pop' },
    provider: { type: String, enum: ['spotify', 'youtube', 'lastfm', 'local'], default: 'local' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Track', trackSchema);

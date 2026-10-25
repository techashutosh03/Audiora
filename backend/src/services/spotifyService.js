const spotifyConfig = require('../config/spotify');

const spotifyService = {
  getAccessToken: async () => {
    // Simulated token fetch for Spotify API integration
    return 'mock_spotify_access_token_123';
  },

  searchTracks: async (query) => {
    return [
      {
        id: `sp_${Date.now()}_1`,
        title: `${query} - Synthwave Dreams`,
        artist: 'Aetheria',
        album: 'Neon Horizons',
        durationSeconds: 220,
        coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop&q=60',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        provider: 'spotify',
      },
      {
        id: `sp_${Date.now()}_2`,
        title: `${query} - Midnight Pulse`,
        artist: 'Cyber Echo',
        album: 'Retro Future',
        durationSeconds: 195,
        coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        provider: 'spotify',
      },
    ];
  },
};

module.exports = spotifyService;

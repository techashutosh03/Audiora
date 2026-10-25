const spotifyService = require('./spotifyService');
const youtubeService = require('./youtubeService');

const mockDatabaseTracks = [
  {
    id: 'tr_1',
    title: 'Starlight Echoes',
    artist: 'Celestial Dreams',
    album: 'Cosmic Drift',
    durationSeconds: 240,
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    genre: 'Ambient',
    provider: 'local',
  },
  {
    id: 'tr_2',
    title: 'Neon Odyssey',
    artist: 'HyperDrive',
    album: 'Retro Genesis',
    durationSeconds: 215,
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop&q=60',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    genre: 'Synthwave',
    provider: 'local',
  },
  {
    id: 'tr_3',
    title: 'Velocity Glow',
    artist: 'Lumina',
    album: 'Prism Light',
    durationSeconds: 180,
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    genre: 'Electronic',
    provider: 'local',
  },
  {
    id: 'tr_4',
    title: 'Deep Horizon',
    artist: 'Aetheria',
    album: 'Infinite Void',
    durationSeconds: 260,
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    genre: 'Chillout',
    provider: 'local',
  },
];

const musicService = {
  getTrending: async () => mockDatabaseTracks,

  search: async (query) => {
    const spotifyResults = await spotifyService.searchTracks(query);
    const filteredLocal = mockDatabaseTracks.filter(
      (t) => t.title.toLowerCase().includes(query.toLowerCase()) || t.artist.toLowerCase().includes(query.toLowerCase())
    );
    return [...filteredLocal, ...spotifyResults];
  },

  getTrackById: async (id) => {
    const found = mockDatabaseTracks.find((t) => t.id === id);
    if (found) return found;
    return {
      id,
      title: 'Dynamic Stream',
      artist: 'Audiora Streamer',
      album: 'Live Session',
      durationSeconds: 200,
      coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop&q=60',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      genre: 'Chill',
      provider: 'local',
    };
  },
};

module.exports = musicService;

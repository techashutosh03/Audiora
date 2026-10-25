export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

export const DEFAULT_TRACK = {
  id: 'tr_demo_1',
  title: 'Starlight Echoes',
  artist: 'Celestial Dreams',
  album: 'Cosmic Drift',
  durationSeconds: 240,
  coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60',
  audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  genre: 'Ambient',
};

export const INITIAL_FEATURED_TRACKS = [
  DEFAULT_TRACK,
  {
    id: 'tr_demo_2',
    title: 'Neon Odyssey',
    artist: 'HyperDrive',
    album: 'Retro Genesis',
    durationSeconds: 215,
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop&q=60',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    genre: 'Synthwave',
  },
  {
    id: 'tr_demo_3',
    title: 'Velocity Glow',
    artist: 'Lumina',
    album: 'Prism Light',
    durationSeconds: 180,
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    genre: 'Electronic',
  },
  {
    id: 'tr_demo_4',
    title: 'Deep Horizon',
    artist: 'Aetheria',
    album: 'Infinite Void',
    durationSeconds: 260,
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    genre: 'Chillout',
  },
];

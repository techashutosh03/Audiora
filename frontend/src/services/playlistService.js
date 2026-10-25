import { fetchApi } from './api';

export const playlistService = {
  getPlaylists: async () => {
    try {
      const data = await fetchApi('/playlists');
      return data.playlists || [];
    } catch {
      return [
        { id: 'pl_1', name: 'Chill Vibes', description: 'Lo-fi & Ambient tracks', coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60', tracksCount: 8 },
        { id: 'pl_2', name: 'Cyberpunk 2077 Vibe', description: 'Dark synth & electronic', coverImage: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop&q=60', tracksCount: 14 },
      ];
    }
  },

  createPlaylist: async (name, description) => {
    try {
      return await fetchApi('/playlists', {
        method: 'POST',
        body: JSON.stringify({ name, description }),
      });
    } catch {
      return {
        playlist: {
          id: `pl_${Date.now()}`,
          name,
          description,
          coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60',
          tracksCount: 0,
        },
      };
    }
  },
};
